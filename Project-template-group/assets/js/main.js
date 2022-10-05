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