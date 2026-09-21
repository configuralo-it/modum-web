'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useMemo, useRef, useState } from 'react';

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);
  return reduced;
}

function FrameTicker({ reduced }: { reduced: boolean }) {
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    if (reduced) {
      invalidate();
      return;
    }

    const tick = () => {
      if (!document.hidden) invalidate();
    };

    tick();
    const id = window.setInterval(tick, 1000 / 24);
    const onVisibility = () => {
      if (!document.hidden) invalidate();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.clearInterval(id);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [invalidate, reduced]);

  return null;
}

function ProductObject({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-1.65, -0.85);
    shape.bezierCurveTo(-1.95, 0.15, -1.25, 1.28, -0.15, 1.13);
    shape.bezierCurveTo(0.5, 1.05, 0.72, 0.62, 1.45, 0.74);
    shape.bezierCurveTo(1.95, 0.82, 2.0, 0.02, 1.42, -0.4);
    shape.bezierCurveTo(0.85, -0.82, 0.64, -1.22, -0.1, -1.02);
    shape.bezierCurveTo(-0.75, -0.85, -1.23, -0.45, -1.65, -0.85);

    const hole = new THREE.Path();
    hole.moveTo(-0.75, -0.23);
    hole.bezierCurveTo(-0.95, 0.38, -0.45, 0.72, 0.05, 0.62);
    hole.bezierCurveTo(0.52, 0.53, 0.62, 0.18, 0.9, 0.13);
    hole.bezierCurveTo(1.15, 0.08, 1.12, -0.25, 0.75, -0.42);
    hole.bezierCurveTo(0.2, -0.67, -0.6, -0.63, -0.75, -0.23);
    shape.holes.push(hole);

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.7,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 1,
      bevelSize: 0.16,
      bevelThickness: 0.18,
      curveSegments: 30,
    });
    geo.center();
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (!group.current || reduced) return;
    const t = state.clock.elapsedTime;
    const targetX = state.pointer.y * 0.08 - 0.12 + Math.sin(t * 0.35) * 0.014;
    const targetY = state.pointer.x * 0.1 + t * 0.03;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.08);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.07);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, 0.18 + state.pointer.x * 0.035, 0.07);
    group.current.position.y = Math.sin(t * 0.42) * 0.028;
  });

  return (
    <group ref={group} rotation={[-0.12, 0.35, 0.18]} scale={0.86}>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          color="#d8d2c9"
          roughness={0.35}
          metalness={0.16}
          clearcoat={0.55}
          clearcoatRoughness={0.32}
          envMapIntensity={0.7}
        />
      </mesh>
      <mesh position={[0.35, -0.05, 0.43]} rotation={[Math.PI / 2, 0.16, 0.2]}>
        <torusGeometry args={[0.72, 0.045, 12, 64, Math.PI * 1.42]} />
        <meshStandardMaterial color="#ff4d00" emissive="#ff4d00" emissiveIntensity={0.28} roughness={0.42} />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  const reduced = useReducedMotion();

  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas
        frameloop="demand"
        dpr={[1, 1.2]}
        camera={{ position: [0, 0.15, 6.4], fov: 31 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[-4, 5, 6]} intensity={2.7} color="#fff8ee" />
        <directionalLight position={[5, -1, 4]} intensity={1.45} color="#dfe7ff" />
        <pointLight position={[1.8, -1.3, 3]} intensity={3.6} color="#ff4d00" distance={5.5} />
        <FrameTicker reduced={reduced} />
        <ProductObject reduced={reduced} />
      </Canvas>
    </div>
  );
}
