$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //slide-up Script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  /* toggle menu/navbar script */
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass(
      "active"
    ); /* menu button click korla ki hoba */
    $(".menu-btn i").toggleClass("active");
  });

  //Typing Animation Script
  var typed = new Typed(".typing", {
    strings: [
      "Software Engineer",
      "MERN developer",
      "Frontend developer",
      "Programmer",
      "Art Enthusiast",
      "Dreamer",
      "Learner",
      "Student",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Web designer",
      "Web developer",
      "Artist",
      "Wonderer",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  document.getElementById("currentYear").textContent = new Date().getFullYear();

  //Owl Carousel Script

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
