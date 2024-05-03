const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-items');
const closeIcon = document.getElementById('close-icon');

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('d-none');
    hamburger.classList.add('d-none');
    closeIcon.classList.remove('d-none');
})
closeIcon.addEventListener("click", () => {
    navMenu.classList.add('d-none');
    hamburger.classList.remove('d-none');
    closeIcon.classList.add('d-none');
})

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





  