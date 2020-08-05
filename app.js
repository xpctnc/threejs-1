const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(24, window.innerWidth / window.innerHeight, .1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const colorPink = new THREE.Color('hsl(306, 100%, 60%)');
const colorYellow = new THREE.Color('hsl(40, 100%, 60%)');

const cubeGeometry = new THREE.BoxGeometry();

const cubeMaterial = new THREE.MeshPhongMaterial({
    color: colorYellow,
    shininess: 80,
})

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

const light = new THREE.PointLight(colorPink, 2);
light.position.z = 20;
light.position.y = -20;
light.position.x = -40;

scene.add(light);
scene.add(cube);

camera.position.z = 35;

renderer.render(scene, camera);
