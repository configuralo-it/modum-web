import * as THREE from './vendor/three.module.js';

function roundedRectShape(width, height, radius) {
  const x = -width / 2;
  const y = -height / 2;
  const w = width;
  const h = height;
  const r = Math.min(radius, width / 2, height / 2);
  const shape = new THREE.Shape();

  shape.moveTo(x + r, y);
  shape.lineTo(x + w - r, y);
  shape.quadraticCurveTo(x + w, y, x + w, y + r);
  shape.lineTo(x + w, y + h - r);
  shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  shape.lineTo(x + r, y + h);
  shape.quadraticCurveTo(x, y + h, x, y + h - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);

  return shape;
}

function roundedExtrusion(width, height, depth, radius, segments = 5) {
  const geometry = new THREE.ExtrudeGeometry(
    roundedRectShape(width, height, radius),
    {
      depth,
      bevelEnabled: true,
      bevelSegments: segments,
      steps: 1,
      bevelSize: Math.min(radius * 0.48, depth * 0.44),
      bevelThickness: Math.min(radius * 0.42, depth * 0.36),
      curveSegments: 18,
    },
  );
  geometry.center();
  geometry.computeVertexNormals();
  return geometry;
}

function createProductStudy() {
  const group = new THREE.Group();

  const shellMaterial = new THREE.MeshStandardMaterial({
    color: '#d8d2c9',
    roughness: 0.42,
    metalness: 0.08,
    envMapIntensity: 0.72,
  });

  const frameMaterial = new THREE.MeshStandardMaterial({
    color: '#3c3f45',
    roughness: 0.26,
    metalness: 0.68,
    envMapIntensity: 0.8,
  });

  const jointMaterial = new THREE.MeshStandardMaterial({
    color: '#ff4d00',
    emissive: '#ff4d00',
    emissiveIntensity: 0.18,
    roughness: 0.34,
    metalness: 0.18,
  });

  const seatGeometry = roundedExtrusion(2.45, 1.6, 0.34, 0.18);
  seatGeometry.rotateX(Math.PI / 2);
  const seat = new THREE.Mesh(seatGeometry, shellMaterial);
  seat.position.set(0, -0.12, 0.08);
  seat.rotation.x = -0.05;
  group.add(seat);

  const back = new THREE.Mesh(
    roundedExtrusion(2.35, 1.5, 0.3, 0.17),
    shellMaterial,
  );
  back.position.set(0, 0.98, -0.69);
  back.rotation.x = -0.18;
  group.add(back);

  const makeFrame = (x) => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(x, 1.18, -0.76),
      new THREE.Vector3(x, 0.48, -0.56),
      new THREE.Vector3(x, -0.16, -0.1),
      new THREE.Vector3(x, -1.18, 0.2),
      new THREE.Vector3(x, -1.28, 0.9),
    ]);
    return new THREE.Mesh(
      new THREE.TubeGeometry(curve, 44, 0.055, 10, false),
      frameMaterial,
    );
  };

  group.add(makeFrame(-0.88), makeFrame(0.88));

  const crossbar = new THREE.Mesh(
    new THREE.CylinderGeometry(0.055, 0.055, 1.76, 14),
    frameMaterial,
  );
  crossbar.position.set(0, -1.25, 0.9);
  crossbar.rotation.z = Math.PI / 2;
  group.add(crossbar);

  const jointGeometry = new THREE.CylinderGeometry(0.13, 0.13, 0.24, 28);
  for (const x of [-1.03, 1.03]) {
    const joint = new THREE.Mesh(jointGeometry, jointMaterial);
    joint.position.set(x, -0.1, -0.03);
    joint.rotation.z = Math.PI / 2;
    group.add(joint);
  }

  group.rotation.set(-0.12, 0.34, -0.08);
  group.scale.setScalar(0.9);

  return group;
}

function supportsWebGL() {
  try {
    const test = document.createElement('canvas');
    return Boolean(test.getContext('webgl2') || test.getContext('webgl'));
  } catch {
    return false;
  }
}

export function mountHero(shell) {
  if (!shell || shell.dataset.webgl === 'true' || !supportsWebGL()) return;

  const canvas = shell.querySelector('[data-hero-canvas]');
  if (!(canvas instanceof HTMLCanvasElement)) return;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'low-power',
    precision: 'mediump',
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.12));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0.05, 6.8);

  scene.add(new THREE.AmbientLight(0xffffff, 1.12));

  const key = new THREE.DirectionalLight('#fff8ee', 2.7);
  key.position.set(-4, 5, 6);
  scene.add(key);

  const fill = new THREE.DirectionalLight('#dfe7ff', 1.15);
  fill.position.set(4.5, -1, 4);
  scene.add(fill);

  const signal = new THREE.PointLight('#ff4d00', 2.35, 5.8);
  signal.position.set(1.8, -0.5, 3);
  scene.add(signal);

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(1, 64),
    new THREE.MeshBasicMaterial({
      color: '#3c3f45',
      transparent: true,
      opacity: 0.055,
      depthWrite: false,
    }),
  );
  shadow.position.set(0.12, -1.42, 0.52);
  shadow.rotation.set(-Math.PI / 2, 0, -0.04);
  shadow.scale.set(1.5, 0.5, 1);
  scene.add(shadow);

  const product = createProductStudy();
  scene.add(product);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let frame = 0;

  const resize = () => {
    const width = Math.max(1, Math.round(canvas.clientWidth));
    const height = Math.max(1, Math.round(canvas.clientHeight));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  };

  const render = () => {
    frame = 0;
    renderer.render(scene, camera);
  };

  const queueRender = () => {
    if (frame) return;
    frame = requestAnimationFrame(render);
  };

  const onPointer = (event) => {
    if (reduced) return;
    const rect = shell.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
    const y = -(((event.clientY - rect.top) / Math.max(rect.height, 1)) * 2 - 1);

    product.rotation.x = -0.12 + y * 0.07;
    product.rotation.y = 0.34 + x * 0.11;
    product.rotation.z = -0.08 + x * 0.025;
    product.position.y = -0.03 + y * 0.035;
    queueRender();
  };

  shell.addEventListener('pointermove', onPointer, { passive: true });

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(shell);

  resize();
  shell.dataset.webgl = 'true';

  return () => {
    shell.removeEventListener('pointermove', onPointer);
    resizeObserver.disconnect();
    if (frame) cancelAnimationFrame(frame);

    scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      object.geometry?.dispose();
      if (Array.isArray(object.material)) {
        object.material.forEach((material) => material.dispose());
      } else {
        object.material?.dispose();
      }
    });
    renderer.dispose();
  };
}
