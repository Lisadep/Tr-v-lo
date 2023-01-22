const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const btnVisiter = document.querySelector(".hp-btn");
const hpTitle = document.querySelector(".hp-title")


menu.addEventListener('click', () => {

  navLinks.classList.toggle('mobile-menu');

  if (btnVisiter.style.display != "none") {
    btnVisiter.style.display = "none";
  } else {
    btnVisiter.style.display = "block";
  }

  if (hpTitle.style.display != "none") {
    hpTitle.style.display = "none";
  } else {
    hpTitle.style.display = "block";
  };

})

