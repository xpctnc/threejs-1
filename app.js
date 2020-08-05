const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(24, window.innerWidth / window.innerHeight, .1, 1000);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const colorPink = new THREE.Color('hsl(306, 100%, 60%)');
const colorYellow = new THREE.Color('hsl(50, 100%, 60%)');
const colorLight = new THREE.Color('hsl(100, 100%, 100%)');

const cubeGeometry = new THREE.BoxGeometry(2, 1.5, 1.2);

const cubeMaterial = new THREE.MeshPhongMaterial({
    color: colorLight,
})

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

const light = new THREE.PointLight(colorPink, 2);
const light2 = new THREE.PointLight(colorYellow, 2);

light.position.set(-40, -20, 20);
light2.position.set(40, 20, 15);

scene.add(light);
scene.add(light2);
scene.add(cube);

camera.position.z = 15;

cube.rotation.x = 20;
cube.rotation.z = -20;

const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
}

animate();
