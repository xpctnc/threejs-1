let scene, camera, renderer;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, .1, 1000);

renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const colorLight = new THREE.Color('hsl(100, 100%, 100%)');
const colorPink = new THREE.Color('hsl(306, 100%, 60%)');
const colorCyan = new THREE.Color('hsl(180, 100%, 50%)');
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
    const sphereGeometry = new THREE.SphereGeometry(s, 50, 50);
    const sphereMaterial = new THREE.MeshPhongMaterial({
        color,
        shininess: 0,
    })

    return new THREE.Mesh(sphereGeometry, sphereMaterial);
}

const createPointLight = (i = 1, color = 0xffffff) => new THREE.PointLight(color, i)

const nucleus = createSphere(3);
scene.add(nucleus);
const createElectron = (s = .4, color = 0xffffff) => {
    const sphere = createSphere(s, color);
    const pivot = new THREE.Object3D();

    pivot.add(sphere);
    return {
        sphere, pivot
    }
}


const e1 = createElectron(.4)
const e2 = createElectron(.4)
const e3 = createElectron(.4)
const e4 = createElectron(.4)

e1.sphere.position.set(10, 5, 0);
e2.sphere.position.set(5, 5, 5);
e3.sphere.position.set(-5, -5, 0);
e4.sphere.position.set(-10, -10, 0);

e1.sphere.add(createPointLight(1, colorYellow));
e2.sphere.add(createPointLight(1, colorCyan));
e3.sphere.add(createPointLight(1, colorPink));
e4.sphere.add(createPointLight(1, colorLight));

e1.pivot.rotation.x += 90;
e2.pivot.rotation.y += 90
e3.pivot.rotation.y += 90
e4.pivot.rotation.y += 50

nucleus.add(e1.pivot, e2.pivot, e3.pivot, e4.pivot);


const loop = () => {
    e1.pivot.rotation.z += .01;
    e2.pivot.rotation.z += .01;
    e3.pivot.rotation.z += .01;
    e4.pivot.rotation.z += .01;
    renderer.render(scene, camera);
    requestAnimationFrame(loop)
}

loop();
window.addEventListener('resize', handleResize);
