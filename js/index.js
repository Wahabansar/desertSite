const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-items");
const closeIcon = document.getElementById("close-icon");

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("d-none");
  hamburger.classList.add("d-none");
  closeIcon.classList.remove("d-none");
});
closeIcon.addEventListener("click", () => {
  navMenu.classList.add("d-none");
  hamburger.classList.remove("d-none");
  closeIcon.classList.add("d-none");
});

// search bar auto type start

const placeholderText = "Search anything what you want...";
const textbox = document.getElementById("textbox");
let index = 0;

function typePlaceholder() {
  textbox.setAttribute("placeholder", placeholderText.slice(0, index + 1));
  index = (index + 1) % placeholderText.length;
}

setInterval(typePlaceholder, 300); // Typing effect repeats every half-second

// search bar auto type end

// Swiper Js start

// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//     },

// });

// Swiper Js end

// popup form start
function openContactForm() {
  // Show the popup contact form with smooth animation
  document.getElementById("contactForm").style.display = "block";
}

function closeContactForm() {
  // Hide the popup contact form with smooth animation
  document.getElementById("contactForm").style.display = "none";
}





// Optional: Submit form data using AJAX
document
  .getElementById("contactFormContent")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Submit form data using AJAX or perform any other actions here
    // Example AJAX submission:
    // const formData = new FormData(this);
    // fetch('your-server-endpoint', {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    //   // Handle success or display a success message to the user
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    //   // Handle errors or display an error message to the user
    // });
  });

// popup form end




      // Add an event listener for scroll
      window.addEventListener('scroll', function() {
        // Get the nav-main-div element
        const navMainDiv = document.querySelector('.nav-main-div');
        
        // Check the scroll position
        if (window.scrollY > 0) {
          // Add the 'scrolled' class if scrolled down
          navMainDiv.classList.add('scrolled');
        } else {
          // Remove the 'scrolled' class if at the top
          navMainDiv.classList.remove('scrolled');
        }
      });