const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(24, window.innerWidth / window.innerHeight, .1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


const cubeGeometry = new THREE.BoxGeometry({
    width: 10,
    height: 10,
    depth: 10,
});

const cubeMaterial = new THREE.MeshPhongMaterial({
    color: 0x0525F04,
    shininess: 80,
});

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

renderer.render(scene, camera);
