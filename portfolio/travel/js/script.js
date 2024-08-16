// Mobile responsive naverbar sticky
const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});

// Naverbar open and close
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

};
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}


        // Get the current year
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
      
        // Find the element with the id "currentYear"
        let currentYearElement = document.getElementById("currentYear");
      
        // Update the content of the element with the current year
        currentYearElement.textContent = currentYear;