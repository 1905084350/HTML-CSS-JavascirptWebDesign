/*  responsive  nav menu     */
const navMenu = () =>{

   const navBarToogler =document.querySelector(".navbar-toogle")
   const navList =document.querySelector(".nav-list")


   navBarToogler.addEventListener("click",() => {
      navList.classList.toggle("nav-active")
      navBarToogler.classList.toggle("toogle")

   })

};
navMenu();



/* services slider */
const ServiceChange = () =>{
    let firstChild,letChild;
    const arrowLeft =document.querySelector("#arrow-left");
    const arrowright=document.querySelector("#arrow-right");
    const ServicesAll=document.querySelector("#services-slider");

    document.addEventListener('click', function(){
        if(event.target === arrowLeft){
            lastChild=ServicesAll.lastElementChild;
            ServicesAll.insertAdjacentElement('afterbegin',lastChild)
        }
        else if(event.target ===arrowright){
            firstChild=ServicesAll.firstElementChild
            ServicesAll.insertAdjacentElement("beforeend",firstChild)
        }
    })
}
ServiceChange();






ScrollReveal().reveal('.ani-left', {

    origin: 'left',
    distance: '10rem',

    duration: 1000,
    easing: 'ease-in'

});


ScrollReveal().reveal('.ani-right', {

    origin: 'right',
    distance: '10rem',

    duration: 1000,
    easing: 'ease-in'

});

ScrollReveal().reveal('.ani-fed-up', {
    opacity: 0,
    easing: 'ease-in'

});

ScrollReveal().reveal('.ani-bottom', {

    origin: 'bottom',
    distance: '10rem',

    duration: 1000,
      easing: 'ease-in'

});


ScrollReveal().reveal('.ani-delay', {
    delay: 1000

});

ScrollReveal().reveal('.ani-delay-2', {
    delay: 1000

});