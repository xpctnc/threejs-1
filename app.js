let scene, camera, renderer;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, .1, 1000);

renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const colorLight = new THREE.Color('hsl(100, 100%, 100%)');
const colorPink = new THREE.Color('hsl(306, 100%, 60%)');
const colorYellow = new THREE.Color('hsl(50, 100%, 60%)');

const cubeMaterial = new THREE.MeshPhongMaterial({
    color: colorLight,
})

const light = new THREE.PointLight(colorPink, 2);
const light2 = new THREE.PointLight(colorYellow, 2);

camera.position.z = 15;

const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();

}


const createSphere = (s = 1, color = '0xFFFFFF') => {
    const sphereGeometry = new THREE.SphereGeometry(s, 20, 20);
    const sphereMaterial = new THREE.MeshPhongMaterial({
        color,
        shininess: 50,
    })

    return new THREE.Mesh(sphereGeometry, sphereMaterial);
}

const createPointLight = (i = 1, color = 0xFFFFFF) => new THREE.PointLight(color, i)

const nucleus = createSphere(3);
const l1 = createPointLight();
const l2 = createPointLight();

l1.position.set(30, 5 ,10)
l2.position.set(60, 0, 20)

scene.add(nucleus, l1, l2);

const loop = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(loop)
}

loop();
window.addEventListener('resize', handleResize);
