/*Código para que aparezca el header con scroll*/
let viewportHeight = window.innerHeight;

window.onscroll = () => {
  if (window.pageYOffset > (viewportHeight / 5) * 4) {
    document.getElementById("header").classList.add("header-visible");
  } else {
    document.getElementById("header").classList.remove("header-visible");
  }

  if (window.pageYOffset >= viewportHeight) {
    document
      .getElementById("side-dot-navigation")
      .classList.add("side-dot-navigation-visible");
  } else {
    document
      .getElementById("side-dot-navigation")
      .classList.remove("side-dot-navigation-visible");
  }
};
