'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
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

function PointerWake() {
  const invalidate = useThree((state) => state.invalidate);
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    const canvas = gl.domElement;
    const wake = () => invalidate();

    canvas.addEventListener('pointermove', wake, { passive: true });
    canvas.addEventListener('pointerenter', wake, { passive: true });
    canvas.addEventListener('pointerdown', wake, { passive: true });

    invalidate();

    return () => {
      canvas.removeEventListener('pointermove', wake);
      canvas.removeEventListener('pointerenter', wake);
      canvas.removeEventListener('pointerdown', wake);
    };
  }, [gl, invalidate]);

  return null;
}

function ProductObject({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);

  const seatGeometry = useMemo(
    () => new RoundedBoxGeometry(2.45, 0.34, 1.6, 5, 0.16),
    [],
  );

  const backGeometry = useMemo(
    () => new RoundedBoxGeometry(2.35, 1.5, 0.3, 5, 0.15),
    [],
  );

  const frameGeometries = useMemo(() => {
    const makeFrame = (x: number) => {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(x, 1.18, -0.76),
        new THREE.Vector3(x, 0.48, -0.56),
        new THREE.Vector3(x, -0.16, -0.1),
        new THREE.Vector3(x, -1.18, 0.2),
        new THREE.Vector3(x, -1.28, 0.9),
      ]);
      return new THREE.TubeGeometry(curve, 44, 0.055, 10, false);
    };

    return [makeFrame(-0.88), makeFrame(0.88)];
  }, []);

  const crossbarGeometry = useMemo(
    () => new THREE.CylinderGeometry(0.055, 0.055, 1.76, 14),
    [],
  );

  const jointGeometry = useMemo(
    () => new THREE.CylinderGeometry(0.13, 0.13, 0.24, 28),
    [],
  );

  useFrame((state) => {
    if (!group.current || reduced) return;

    group.current.rotation.x = -0.12 + state.pointer.y * 0.07;
    group.current.rotation.y = 0.34 + state.pointer.x * 0.11;
    group.current.rotation.z = -0.08 + state.pointer.x * 0.025;
    group.current.position.y = -0.03 + state.pointer.y * 0.035;
  });

  const shellMaterial = {
    color: '#d8d2c9',
    roughness: 0.42,
    metalness: 0.08,
    envMapIntensity: 0.72,
  };

  const frameMaterial = {
    color: '#3c3f45',
    roughness: 0.26,
    metalness: 0.68,
    envMapIntensity: 0.8,
  };

  return (
    <group ref={group} rotation={[-0.12, 0.34, -0.08]} scale={0.9}>
      <mesh geometry={seatGeometry} position={[0, -0.12, 0.08]} rotation={[-0.05, 0, 0]}>
        <meshStandardMaterial {...shellMaterial} />
      </mesh>

      <mesh geometry={backGeometry} position={[0, 0.98, -0.69]} rotation={[-0.18, 0, 0]}>
        <meshStandardMaterial {...shellMaterial} />
      </mesh>

      {frameGeometries.map((geometry, index) => (
        <mesh key={index} geometry={geometry}>
          <meshStandardMaterial {...frameMaterial} />
        </mesh>
      ))}

      <mesh geometry={crossbarGeometry} position={[0, -1.25, 0.9]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial {...frameMaterial} />
      </mesh>

      <mesh geometry={jointGeometry} position={[1.03, -0.1, -0.03]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial
          color="#ff4d00"
          emissive="#ff4d00"
          emissiveIntensity={0.18}
          roughness={0.34}
          metalness={0.18}
        />
      </mesh>

      <mesh geometry={jointGeometry} position={[-1.03, -0.1, -0.03]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial
          color="#ff4d00"
          emissive="#ff4d00"
          emissiveIntensity={0.18}
          roughness={0.34}
          metalness={0.18}
        />
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
        dpr={[1, 1.12]}
        camera={{ position: [0, 0.05, 6.8], fov: 30 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'low-power',
          precision: 'mediump',
        }}
      >
        <PointerWake />
        <ambientLight intensity={1.12} />
        <directionalLight position={[-4, 5, 6]} intensity={2.7} color="#fff8ee" />
        <directionalLight position={[4.5, -1, 4]} intensity={1.15} color="#dfe7ff" />
        <pointLight position={[1.8, -0.5, 3]} intensity={2.35} color="#ff4d00" distance={5.8} />
        <ProductObject reduced={reduced} />
      </Canvas>
    </div>
  );
}
