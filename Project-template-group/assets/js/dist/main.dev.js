"use strict";

//Show Menu Links
var showMenu = function showMenu(toggleId, navId) {
  var toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId); //validate that variable exist

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      //we add the show-menu class to the div tag wwith
      nav.classList.toggle('show-menu');
    });
  }
};

showMenu('nav-toggle', 'nav-menu'); //////////////////////////////////////////////////
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
});