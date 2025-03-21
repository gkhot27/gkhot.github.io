// aos 
AOS.init();


// navigation 
function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('menuToggle');

    // Check if the screen width is 767px or less
    const isMobile = window.matchMedia("(max-width: 800px)").matches;

    if (!isMobile) {
        // If the screen width is greater than 767px, do nothing
        return;
    }

    // Determine if the menu is open or closed
    const isMenuOpen = window.getComputedStyle(menu).display === 'flex';

    if (isMenuOpen) {
        // Close menu with GSAP animation
        gsap.to(menu, { 
            duration: 0.5, 
            height: 0, 
            ease: 'power2.in',  // Smooth ease-in effect when closing
            onComplete: () => {
                menu.style.display = 'none'; // Hide menu after animation completes
            } 
        });
        menuToggle.innerHTML = '☰';
    } else {
        // Open menu with GSAP animation
        menu.style.display = 'flex'; // Make sure it's visible before animating
        gsap.fromTo(menu, 
            { height: 0 }, 
            { 
                duration: 0.8, 
                height: 'auto', 
                ease: 'elastic.out(1, 0.5)', // Bouncy opening effect
            }
        );
        menuToggle.innerHTML = '✖';
    }
}

function closeNav() {
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('menuToggle');

    // Check if the screen width is 767px or less
    const isMobile = window.matchMedia("(max-width: 800px)").matches;

    if (!isMobile) {
        // If the screen width is greater than 767px, do nothing
        return;
    }

    const isMenuOpen = window.getComputedStyle(menu).display === 'flex';

    if (isMenuOpen) {
        // Close menu with GSAP animation
        gsap.to(menu, { 
            duration: 0.5, 
            height: 0, 
            ease: 'power2.in', // Smooth ease-in effect when closing
            onComplete: () => {
                menu.style.display = 'none'; // Hide menu after animation completes
            } 
        });
        menuToggle.innerHTML = '☰';
    }
}



// timeline 
(function() {

    'use strict';
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();
  



// portfolio 
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    if (!card.hasAttribute('active')) {
      updateActiveCard(card);
    }
  });
});

function updateActiveCard(activeCard) {
  cards.forEach((card) => {
    if (card === activeCard) {
      card.setAttribute('active', '');
    } else {
      card.removeAttribute('active');
    }
  })
}




// skills 

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { selector: ".python", width: "95%" },
  { selector: ".cplus", width: "95%" },
  { selector: ".java", width: "75%" },
  { selector: ".sql", width: "60%" },
  { selector: ".react", width: "85%" },
  { selector: ".js", width: "80%" },
  { selector: ".node", width: "90%" }
];

skills.forEach(skill => {
  gsap.fromTo(
    skill.selector, 
    { width: "0%" }, 
    {
      width: skill.width, 
      duration: 3, 
      scrollTrigger: {
        trigger: skill.selector, 
        start: "top 80%", 
        toggleActions: "play none none reverse", 
      }
    }
  );
});

  