//toogle class active
const navbarBav = document.querySelector(".navbarBav");

//ketika ... di klik
document.querySelector("#about").onclick = () => {
  navbarBav.classList.toggle("active");
};
