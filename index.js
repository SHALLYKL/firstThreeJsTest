/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: kl
 * @Date: 2020-04-14 23:50:06
 * @LastEditors: kl
 * @LastEditTime: 2020-04-15 00:16:07
 */
// import { Scene } from 'three';
import * as THREE from './node_modules/three/src/three.js';
// import { Scene } from './node_modules/three';
// const THREE = require('three');
// const scene = new Scene();
        // Our Javascript will go here.
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();