//Show Menu Links
const showMenu=(toggleId,navId)=>{
    const   toggle=document.getElementById(toggleId),
            nav=document.getElementById(navId)
    //validate that variable exist
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            //we add the show-menu class to the div tag wwith
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')
//////////////////////////////////////////////////
//remove list ul if click li
var navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  var navMenu = document.getElementById('nav-menu'); //when fucking click on each nav__link , we fucking remove the show-menu
   navMenu.classList.remove('show-menu');
}

navLink.forEach((link) =>{
    link.addEventListener('click', linkAction);
});

///////////////////////////////////////////////////
const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='bx-toggle-right'
//Previously selected topic (if user selected)
const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')
//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme=()=>document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme) ? 'box-toggle-left'  : 'bx-toggle-right'
if(selectedTheme){
    //if the validation is fulfilled , we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme==='dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon==='bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click',()=>{
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})
