import * as THREE from '../../libs/three/three.module.js';
import { OrbitControls } from '../../libs/three/jsm/OrbitControls.js';

class App {
  constructor() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.set(0, 0, 4);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.color(0xaaaa);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {}

  render() {}
}

export { App };
