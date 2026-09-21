import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'node_modules/three/build/three.module.min.js');
const targetDir = resolve(root, 'public/vendor');
const target = resolve(targetDir, 'three.module.js');

await mkdir(targetDir, { recursive: true });
await copyFile(source, target);
