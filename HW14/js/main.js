var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var cube, cube2;
var modelObject;
var renderer, controls;

// create the first box
function createBox() {
    // create a box
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({
        color: 0x324ca8
    });
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(50, 0, 0);
    scene.add(cube);
    cube.scale.x = 15; // SCALE
    cube.scale.y = 15; // SCALE
    cube.scale.z = 15; // SCALE
    animate();
}

// animate the first box
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    createBox2();
    renderer.render(scene, camera);
}

// create the second box and add it as a child of the first box
function createBox2() {
    // create a box
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({
        color: 0x1234ee
    });
    cube2 = new THREE.Mesh(geometry, material);
    cube2.position.set(2, 0, 0); // Add missing z-coordinate
    cube.add(cube2);
    cube2.scale.x = 0.5; // SCALE
    cube2.scale.y = 0.5; // SCALE
    cube2.scale.z = 0.5; // SCALE
    animate2();
}

function animate2() {
    requestAnimationFrame(animate2);
    cube2.rotation.x += 0.05;
    cube2.rotation.y += 0.05;
}

/**
 * Generate a scene object with a background color
 **/
function getScene() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa12499);
    return scene;
}

/**
 * Generate the camera to be used in the scene.
 **/
function getCamera() {
    var aspectRatio = window.innerWidth / window.innerHeight;
    var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.set(0, 90, -10);
    return camera;
}

/**
 * Generate the light to be used in the scene.
 **/
function getLight(scene) {
    var light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(20, 50, 20);
    scene.add(light);
    var ambientLight = new THREE.AmbientLight(0x111111);
    scene.add(ambientLight);
    return light;
}

/**
 * Generate the renderer to be used in the scene
 **/
function getRenderer() {
    var renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    return renderer;
}

/**
 * Generate the controls to be used in the scene
 **/
function getControls(camera, renderer) {
    var controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.zoomSpeed = 0.4;
    controls.panSpeed = 0.4;
    return controls;
}

/**
 * Load Skull model
 **/
function loadModel() {
    loader = new THREE.OBJLoader();
    loader.load('models/Garfield.obj', function (object) {
        object.rotation.z = Math.PI;
        modelObject = object;
        scene.add(object);
        animateModel();
    });
}

function animateModel() {
    requestAnimationFrame(animateModel);
    modelObject.rotation.x += 0.05;
    modelObject.rotation.y += 0.05;
}

/**
 * Render!
 **/
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    controls.update();
};

scene = getScene();
camera = getCamera();
light = getLight(scene);
renderer = getRenderer();
controls = getControls(camera, renderer);
game1 = createBox();

loadModel()

render();
