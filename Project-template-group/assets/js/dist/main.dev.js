"use strict";

//Show Menu Links
////////////////////////////////////////
var toggle = document.getElementById('nav-toggle');
var nav = document.getElementById('nav-menu');
toggle.addEventListener('click', function () {
  nav.classList.toggle('show-menu');
}); //////////////////////////////////////////////////
//remove list ul if click li

var navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  var navMenu = document.getElementById('nav-menu'); //when fucking click on each nav__link , we fucking remove the show-menu

  navMenu.classList.remove('show-menu');
}

navLink.forEach(function (link) {
  link.addEventListener('click', linkAction);
}); ///////////////////////////////////////////////////

var themeButton = document.getElementById('theme-button');
var darkTheme = 'dark-theme';
var iconTheme = 'bx-toggle-right'; //Previously selected topic (if user selected)

var selectedTheme = localStorage.getItem('selected-theme');
var selectedIcon = localStorage.getItem('selected-icon'); //we obtain the current theme that the interface has by validating the dark-theme class

var getCurrentTheme = function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};

var getCurrentIcon = function getCurrentIcon() {
  return themeButton.classList.contains(iconTheme) ? 'box-toggle-left' : 'bx-toggle-right';
};

if (selectedTheme) {
  //if the validation is fulfilled , we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', function () {
  //Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme); //we save the theme and the current icon that the user chose

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
}); //change scroll header
//=====Change Background Header ======================

function scrollHeader() {
  var header = document.getElementById('header'); //when the scroll is grather than 200 viewport height

  if (this.scrollY >= 80) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader); //--------------------------------------------------

/*============Show Scroll Top==============*/

function scrollUp() {
  var scrollTop = document.getElementById('scroll-up');

  if (this.scrollY >= 560) {
    scrollTop.classList.add('show-scroll');
  } else {
    scrollTop.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp); //-----------------------------------------------------
//Links scrolling 

var sections = document.querySelectorAll('section[id]');

function scrollActive() {
  var scrollY = window.pageYOffset;
  console.log(scrollY);
  sections.forEach(function (current) {
    var sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);