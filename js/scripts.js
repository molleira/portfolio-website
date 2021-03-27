// console.log('this works!');

// let toggle = document.querySelector(".toggle");
// let menu = document.querySelector(".menu");

// /* Toggle mobile menu */
// function toggleMenu() {
//     if (menu.classList.contains("active")) {
//         menu.classList.remove("active");

//         // adds the menu (hamburger) icon
//         toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
//     } else {
//         menu.classList.add("active");

//         // adds the close (x) icon
//         toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
//     }
// }

/* Event Listener */
// toggle.addEventListener("click", toggleMenu, false);

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

// go to top button
//Get the button:
// mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// ===== Scroll to Top ==== 
$(window).scroll(function () {
  if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 250px
    $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function () {      // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0                       // Scroll to top of body
  }, 500);
});

$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    $('#return-to-home').fadeIn(200);    // Fade in the arrow
  } else {
    $('#return-to-home').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-home').click(function () {      // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0                       // Scroll to top of body
  }, 500);
});
