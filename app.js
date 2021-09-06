/*Para que aparezca el header con scroll*/
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

/*Para cambiar el color del header con scroll*/
let espacioDeTransicion = viewportHeight * 0.2;
let noticiasPosition =
  document.querySelector(".section.noticias").offsetTop - espacioDeTransicion;
let releasePosition =
  document.querySelector(".section.releases").offsetTop - espacioDeTransicion;
let nosotrosPosition =
  document.querySelector(".section.nosotros").offsetTop - espacioDeTransicion;

let colorHeaderNavInicio = document.querySelector(".header__nav-inicio").style;

function colorNav() {
  let posicion = window.pageYOffset;

  if (posicion < noticiasPosition) {
    colorHeaderNavInicio.backgroundColor = "var(--color-1)";
  } else if (posicion >= noticiasPosition && posicion < releasePosition) {
    colorHeaderNavInicio.backgroundColor = "var(--color-2)";
  } else if (posicion >= releasePosition && posicion < nosotrosPosition) {
    colorHeaderNavInicio.backgroundColor = "var(--color-3)";
  } else {
    colorHeaderNavInicio.backgroundColor = "var(--color-4)";
  }
}

window.addEventListener("scroll", colorNav);
