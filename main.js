//declare a var to allow toggle animation button
//let particlesInstance;
// Declare a variable to keep track of the state
let particlesPaused = false;

// Initialize your particles like this
particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ['#E57373', '#81C784', '#64B5F6', '#FFD54F', '#FF8A65','#FF0000', '#800080']  // Array of colors for random selection
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 15,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1
        }
      },
      line_linked: {
        enable: true, 
        distance: 100, /*change the linking */
        color: '#FFF',  // Color of the links/lines between particles
        //color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,/*change this true/false to turn on/off particle */
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
  // Retrieve the particles instance
const particlesInstance = window.pJSDom[0].pJS;
  // Set up your toggle button functionality
  document.getElementById('toggleParticles').addEventListener('click', function() {
      particlesPaused = !particlesPaused;
      
      if (particlesPaused) {
          // Pause particle animation
          particlesInstance.particles.move.enable = false;
      } else {
          // Resume particle animation
          particlesInstance.particles.move.enable = true;
      }

      // Refresh the particle system to apply changes
      particlesInstance.refresh();
  });

  
  //****************THE CODE BELOW ARE FOR ATTACHING THE BUTTON INTO THE MOUSE MOVE OR TOUCH SCREENS******************************************** */
  let dragItem = document.getElementById("toggleParticles");
  let container = document.body;
  
  let active = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;
  
  // Desktop Events
  container.addEventListener("mousedown", dragStart, false);
  container.addEventListener("mouseup", dragEnd, false);
  container.addEventListener("mousemove", drag, false);
  
  // Mobile Events
  container.addEventListener("touchstart", dragStart, false);
  container.addEventListener("touchend", dragEnd, false);
  container.addEventListener("touchmove", drag, false);
  
  function dragStart(e) {
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }
  
    //only activate hen mouse touch
    if (e.target.id === "toggleParticles") {
      active = true;
    }
    
    //if (e.target === dragItem) {
     //active = true;
    //}
  }
  
  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
  
    active = false;
  }
  
  function drag(e) {
    if (active) {
      
      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }
  
      xOffset = currentX;
      yOffset = currentY;
  
      setTranslate(currentX, currentY, dragItem);
    }
  }
  
  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
  

  //------------------------CODE FOR CAROUSEL DISPLAY CARDS FOR IMG -----------------------------
  
