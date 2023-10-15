   
        
   let animateID = null;//declarea var to store the animation ID to pause animation when it's not visible
   let shouldAnimate = true; // flag for keep track of animation
   // Create a scene
   const scene = new THREE.Scene();

   // Create a camera
   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
   camera.position.z = 10;

   // Create a renderer
   const renderer = new THREE.WebGLRenderer();
   //renderer.setSize(window.innerWidth, window.innerHeight);
   //document.body.appendChild(renderer.domElement);
   const threeContainer = document.getElementById('threeContainer');
   renderer.setSize(threeContainer.clientWidth, threeContainer.clientHeight);

   document.getElementById('threeContainer').appendChild(renderer.domElement);

  

   // Function to handle window resizing
   function onWindowResize() {
       //const width = window.innerWidth;
       //const height = window.innerHeight;
       const width = threeContainer.clientWidth;
       const height = threeContainer.clientHeight;
       // Update camera
       camera.aspect = width / height;
       camera.updateProjectionMatrix();

       // Update renderer
       renderer.setSize(width, height);
   }

   // Listen for window resize events
   window.addEventListener('resize', onWindowResize);

   // Load a texture (image) for one of the cubes
   const textureLoader = new THREE.TextureLoader();
   const texture = textureLoader.load('IMG/RS4.jpg');

   // Create 3 cubes with different materials
   const cubes = [];
   const materials = [
       new THREE.MeshBasicMaterial({ map: texture }),
       new THREE.MeshBasicMaterial({ color: 0xff0000 }),
       new THREE.MeshBasicMaterial({ color: 0x00ff00 })
   ];

   for (let i = 0; i < 3; i++) {
       const geometry = new THREE.BoxGeometry(2, 2, 2);
       const cube = new THREE.Mesh(geometry, materials[i]);
       cube.position.x = i * 3 - 3;
       cubes.push(cube);
       scene.add(cube);
   }

   // Noel colors: red, green, gold, and white
   //const noelColors = [0xff0000, 0x00ff00, 0xffd700, 0xffffff];
   const noelColors = [0xff0000, 0x00ff00, 0xffd700, 0xffffff, 0x0000ff, 0x800080];

   let colorIndices = [0, 1]; // Initial indices for each cube

   // Animate the cubes
   const animate = () => {
       if (!shouldAnimate) {
           return; // Stop the function here
       }
       
       animateID = requestAnimationFrame(animate); // Store the animation ID
       
       cubes.forEach((cube, i) => {
           cube.rotation.x += 0.01;
           cube.rotation.y += 0.01;
   
           if (i > 0) {
               cube.material.color.setHex(noelColors[colorIndices[i-1]]);
           } else {
               // The debug log here is not actually needed
           }
       });
   
       renderer.render(scene, camera);
   };
   
   
   //animate(); //call the animation func
   
   

   // Change colors every 1 second
   setInterval(() => {
       // Update the color indices for cubes at index 1 and 2
       colorIndices = colorIndices.map(idx => (idx + 1) % noelColors.length);
   }, 1000);

   animate();
   // Add this right here:
   document.getElementById('toggleAnimation').addEventListener('click', function() {
   shouldAnimate = !shouldAnimate;  // Toggle the value of shouldAnimate
   if (shouldAnimate) {
       animate();
   }
});


