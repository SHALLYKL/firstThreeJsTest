/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: kl
 * @Date: 2020-04-14 23:50:06
 * @LastEditors: kl
 * @LastEditTime: 2020-04-15 20:40:48
 */
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var material = new THREE.LineBasicMaterial({ color: 0x0000ff });

var points = [];
points.push(new THREE.Vector3(- 10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
var geometry = new THREE.BufferGeometry().setFromPoints(points);

var line = new THREE.Line(geometry, material);

scene.add(line);
function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();