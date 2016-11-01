   (function() {
       var container, stats;
       var camera, scene, renderer, controls;
       var mouseX = 0,
           mouseY = 0;

       var WIDTH = window.innerWidth;
       var HEIGHT = window.innerHeight;

       var windowHalfX = WIDTH / 2;
       var windowHalfY = HEIGHT / 2;

       var cube, stats, mutePlanet;

       var mouseX = 0,
           mouseY = 0;

       var FOV = 90,
           ASPECT = WIDTH / HEIGHT,
           NEAR = 0.01,
           FAR = 1000;

       var viewData;

       var landingView;

       $(document).ready(init);


       function init() {
           viewData = [{
               url: "views/landing_view.html",
               id: 0
           }, {
               url: "views/instructions_view.html",
               id: 1
           }];

           loadView(0);
       }

       function loadView(id) {
           console.info("View ID passed: ", id);
           console.info("View URL: ", viewData[id].url);
           console.info("Length is: ", $("#container_view").has("section").length);
           if ($("#container_view").has("section").length != 0) {
               console.info("HERE 1");
               $("#container_view").empty("section");
               $("#container_view").load(viewData[id].url, onFileCompleteHandler);
           } else {
                console.info("HERE 2");
               $("#container_view").load(viewData[id].url, initThreeJSWorld);
           }
       }

       function onFileCompleteHandler() {
           console.info("onFileCompleteHandler");

       }

       function initThreeJSWorld() {
           console.info("init();");

           container = document.getElementById("container");

           // THIS CREATES OUR SCENE 
           scene = new THREE.Scene();

           console.info("FOV: ", FOV, " , ASPECT: ", ASPECT, " NEAR: ", NEAR, " FAR: ", FAR);

           // THIS CREATES ARE CAMERA FOR OUR SCENE WITH THE FIRST PARAM FOR FIELD OF VIEW, FOLLOWED BY ASPECT RATIO WIDTH / HEIGHT.

           // ALSO NEAR PARAM IS HOW CLOSE THE CAMERA WILL BE IN ORDER FOR CLIPPING TO OCCUR ON A MESH OBJECT, AND ALSO HOW FAR FOR A MESH SHOULD BE 
           camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
           camera.position.z = 1.5;

           // CREATES A WEBGL RENDER THATS IF ONLY THE BROWSER SUPPORTS IT, WITH ANTI ALIAS TO THE MESH OBJECTS IN OUR 3D SCENE
           renderer = new THREE.WebGLRenderer({
               antialias: true
           });
           // SETS THE BACKGROUND COLOR OF THE RENDERER
           renderer.setClearColor(0x000000, 1);
           renderer.setPixelRatio(window.devicePixelRatio);
           // SETS THE WIDTH AND THE HEIGHT OF THE RENDERER
           renderer.setSize(WIDTH, HEIGHT);

           container.appendChild(renderer.domElement);

           controls = new THREE.OrbitControls(camera, renderer.domElement);
           controls.noZoom = true;
           controls.autoRotate = true;
           controls.noKeys = false;
           controls.autoRotateSpeed = 2;


           var al = new THREE.AmbientLight(0xffffff, 1); // soft white light
           scene.add(al);

           //            HemisphereLight(skyColorHex, groundColorHex, intensity)
           //
           //            skyColorHex — Numeric value of the RGB sky color.
           //            groundColorHex — Numeric value of the RGB ground color.
           //            intensity — Numeric value of the light's strength/intensity.

           var hl = new THREE.HemisphereLight(0xa8a8a8, 0xa8a8a8, 1);
           scene.add(hl);

           var geometry = new THREE.SphereGeometry(0.80, 90, 90);
           var material = new THREE.MeshPhongMaterial({
               color: 0x000000,
               emissive: 0x000000,
               specular: 0xffffff,
               shininess: 2.22,
               wireframe: true,
               shading: THREE.SmoothShading
           })
           mutePlanet = new THREE.Mesh(geometry, material);
           scene.add(mutePlanet);

           // var material = new THREE.MeshPhongMaterial();


           var starGeom = new THREE.SphereGeometry(90, 32, 32);
           var starMaterial = new THREE.MeshBasicMaterial();

           starMaterial.map = THREE.ImageUtils.loadTexture("images/galaxy_starfield_two.png");
           starMaterial.side = THREE.BackSide;

           var starField = new THREE.Mesh(starGeom, starMaterial)

           // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
           // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 });

           // cube = new THREE.Mesh( geometry, material );

           stats = new Stats();
           stats.domElement.style.position = 'absolute';
           stats.domElement.style.top = '0px';

           container.appendChild(stats.domElement);

           scene.add(starField);

           window.addEventListener('resize', onWindowResize, false);

           render();

           TweenMax.ticker.addEventListener("tick", animate);

           TweenMax.from(mutePlanet.position, 4, {
               y: -5,
               ease: Strong.easeOut,
               onComplete: initLandingPage
           });

           landingView = new LandingView();
           

       }
       function initLandingPage() {
           console.info("initLandingPage();");

           landingView.animateView();
       }

       function animate() {
           // Render our three.js scene and camera
           renderer.render(scene, camera);
       }

       function onWindowResize() {
           windowHalfX = window.innerWidth / 2;
           windowHalfY = window.innerHeight / 2;

           camera.aspect = window.innerWidth / window.innerHeight;
           camera.updateProjectionMatrix();

           renderer.setSize(window.innerWidth, window.innerHeight);
       }

       function initPanWorld() {
           console.info("initPanWorld();");
       }

       function render() {
           // THIS WILL RUN OUR LOOP EVERTIME 60 SECONDS TO ANIMATE OUR OBJECTS ON THE SCENE.
           requestAnimationFrame(render);

           camera.lookAt(scene.position);

           // THE RENDERER WILL THEN RENDER OUR OBJECT
           renderer.render(scene, camera);
           controls.update();
       }
   })();