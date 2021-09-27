const darkModeSwitch = document.getElementById("moon");
const body = document.body;
const navbar = document.querySelector(".navbar");
const welcomeTitle = document.getElementById("about")
const welcomeText = document.querySelector(".welcome-text");
const projectTitle = document.querySelector(".projects-title")
const contactMe = document.getElementById("contact");
const contactMeTitle = document.querySelector(".contact-me");

const darkMode = () => {
  navbar.classList.replace("navbar-light", "navbar-dark");
  navbar.classList.add("bg-dark");
  body.style.backgroundColor = "#212529";
  welcomeTitle.style.color = "#fff";
  welcomeText.style.color = "#fff";
  projectTitle.style.color = "#fff";
  contactMe.style.backgroundColor = "#fff";
  darkModeSwitch.classList.replace("far", "fas");
  localStorage.setItem("dark-mode", "true");
};
const lightMode = () => {
  navbar.classList.replace("navbar-dark", "navbar-light");
  navbar.classList.remove("bg-dark");
  body.style.backgroundColor = "";
  welcomeTitle.style.color = "#000";
  welcomeText.style.color = "#000";
  contactMeTitle.style.color = "#000";
  projectTitle.style.color = "#000";
  darkModeSwitch.classList.replace("fas", "far");
  localStorage.setItem("dark-mode", "true");
  localStorage.setItem("dark-mode", "false");
};

darkModeSwitch.addEventListener("click", () => {
  if (navbar.classList.contains("navbar-light")) {
    darkMode();
  } else {
    lightMode();
  }
});

if (localStorage.getItem("dark-mode") === "true") {
  darkMode();
} else {
  lightMode();
}

window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
  navbar.classList.toggle("bg-light", window.scrollY > 0);
});
