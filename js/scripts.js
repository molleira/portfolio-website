// selects hamburger and nav links and assigns to variable
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

// opens nav when click
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// closes nav when click on nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

// scroll to top
$(window).scroll(function () {
  // if page is scrolled more than 250px
  if ($(this).scrollTop() >= 250) {
    // fade in the arrow
    $('#back-to-top').fadeIn(200);
  } else {
    // else fade out the arrow
    $('#back-to-top').fadeOut(200);
  }
});

// when arrow is clicked
$('#back-to-top').click(function () {
  // scroll to top of body
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});

// go back to home
$(window).scroll(function () {
  // if page is scrolled more than 50px
  if ($(this).scrollTop() >= 50) {
    // fade in the arrow
    $('#return-to-home').fadeIn(200);
  } else {
    // else fade out the arrow
    $('#return-to-home').fadeOut(200);
  }
});

// when arrow is clicked
$('#return-to-home').click(function () {
  // scroll to top of body
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});
