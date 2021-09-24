const darkModeSwitch = document.getElementById("moon");
const body = document.body;
const navbar = document.querySelector(".navbar");
const contactMe = document.querySelector(".contact-me");

let darkSwitch = false

darkModeSwitch.addEventListener("click", () => {
  if (navbar.classList.contains("navbar-light")) {
    navbar.classList.replace("navbar-light", "navbar-dark");
    navbar.classList.add("bg-dark");
    body.style.backgroundColor = "#212529";
    body.style.color = "#fff";
    contactMe.style.color = "#fff";
    darkSwitch = true
    darkModeSwitch.classList.replace("far", "fas")
    console.log(darkSwitch)
  } else {
    navbar.classList.replace("navbar-dark", "navbar-light");
    navbar.classList.remove("bg-dark");
    body.style.backgroundColor = "";
    body.style.color = "#000";
    contactMe.style.color = "#000";
    darkSwitch = false
    darkModeSwitch.classList.replace("fas", "far")
    console.log(darkSwitch)
  }
});

window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
  console.log(darkSwitch)
  if (navbar.classList.contains("sticky")) {
    navbar.classList.replace("navbar-light", "navbar-dark");
  }  
  else if( navbar.classList.contains("navbar-light") && darkSwitch == true){
    navbar.classList.replace("navbar-light", "navbar-dark")
  }
  else if(darkSwitch == false){
    navbar.classList.replace("navbar-dark", "navbar-light");
  }
});
