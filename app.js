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

camera.position.z = 30;

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
        shininess: 30,
    })

    return new THREE.Mesh(sphereGeometry, sphereMaterial);
}

const createPointLight = (i = 1, color = 0xffffff) => new THREE.PointLight(color, i)

const nucleus = createSphere(3);
const l1= createPointLight(.5);
const l2 = createPointLight(.2);

l1.position.set(120, 20 ,60)
l2.position.set(-60, 0, 20)

scene.add(nucleus, l1, l2);

const e1 = createSphere(.4)
const e2 = createSphere(.4)
const e3 = createSphere(.4)
const e4 = createSphere(.4)

e1.position.set(10, 0, 0);
e2.position.set(5, 0, 0);
e3.position.set(-5, 0, 0);
e4.position.set(-10, 0, 0);

scene.add(e1, e2, e3, e4);

const loop = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(loop)
}

loop();
window.addEventListener('resize', handleResize);
