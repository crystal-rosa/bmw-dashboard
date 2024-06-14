"use strict";

function navIcon(elementId, destinationURL) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('click', function() {
            window.location.href = destinationURL;
        });
    } else {
        console.error('Element not found:', elementId);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    navIcon('toggle-to-night', 'home-darkmode.html');
    navIcon('toggle-to-light', 'home-lightmode.html');
    navIcon('play-icon', 'media.html');
    navIcon('home-icon', 'home-darkmode.html');
    navIcon('car-icon', 'specs.html');
});



document.addEventListener('DOMContentLoaded', function() {
    const controls = document.querySelectorAll('.control'); 

    controls.forEach(control => {
        control.addEventListener('click', function() {
            const currentSrc = this.src.split('/').pop();
            const activeSrc = this.getAttribute('data-active-src').split('/').pop();
            const inactiveSrc = this.getAttribute('data-inactive-src').split('/').pop();

            if (currentSrc === inactiveSrc) {
                this.src = this.getAttribute('data-active-src'); 
            } else {
                this.src = this.getAttribute('data-inactive-src');
            
               
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const tapUnlockElement = document.getElementById('tap-to-unlock');
    const welcomeScreenElement = document.getElementById('welcome-screen');
  
    tapUnlockElement.addEventListener('click', function() {
      
      welcomeScreenElement.classList.add('fade-out');
  
     
      setTimeout(function() {
        window.location.href = 'home-darkmode.html';
      }, 200); 
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
    const toggleTextElements = document.querySelectorAll('.toggle-text');
  
    toggleTextElements.forEach(function(toggleTextElement) {
      toggleTextElement.addEventListener('click', function() {
        if (toggleTextElement.classList.contains('ON')) {
          toggleTextElement.classList.remove('ON');
          toggleTextElement.classList.add('off');
          toggleTextElement.textContent = 'OFF';
        } else {
          toggleTextElement.classList.remove('off');
          toggleTextElement.classList.add('ON');
          toggleTextElement.textContent = 'ON';
        }
      });
    });
  });




  document.addEventListener('DOMContentLoaded', function(){
    const inclineControls = document.querySelectorAll('.incline-box');


    inclineControls.forEach(function(inclineControls){
        const upArrow = inclineControls.querySelector('.up-arrow');
        const downArrow = inclineControls.querySelector('.down-arrow');
        const inclineLevel = inclineControls.querySelector('.incline-level');


    let currentLevel = parseInt(inclineLevel.textContent);

    upArrow.addEventListener('click', function(){
        if (currentLevel < 5){
            currentLevel++;
            inclineLevel.textContent = currentLevel;
        } 
    });

    downArrow.addEventListener('click', function(){
        if (currentLevel > 1){
            currentLevel--;
            inclineLevel.textContent = currentLevel;
        }
    })


    })
  })






  
//   document.addEventListener('DOMContentLoaded', function() {
//     const inclineControls = document.querySelectorAll('.incline-box');
  
//     inclineControls.forEach(function(inclineControl) {
//       const upArrow = inclineControl.querySelector('.up-arrow');
//       const downArrow = inclineControl.querySelector('.down-arrow');
//       const inclineLevel = inclineControl.querySelector('.incline-level');
  
//       let currentLevel = parseInt(inclineLevel.textContent);
  
//       upArrow.addEventListener('click', function() {
//         if (currentLevel < 5) {
//           currentLevel++;
//           inclineLevel.textContent = currentLevel;
//         }
//       });
  
//       downArrow.addEventListener('click', function() {
//         if (currentLevel > 1) {
//           currentLevel--;
//           inclineLevel.textContent = currentLevel;
//         }
//       });
//     });
//   });
  