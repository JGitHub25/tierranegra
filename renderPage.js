import { artistas, noticias, releases } from "./contenido.js";

//Esta función inserta el contenido de los objetos de arriba en las distintas secciones de la página.
function insertarContenidoSeccion(array, nombreClase) {
  function crearDots(arr) {
    let dots = "";
    for (let i = 1; i < arr.length; i++) {
      dots += `<span class="dot" data-orden="${i + 1}"></span>`;
    }
    dots = `<span class="dot active" data-orden="1"></span>` + dots;
    return dots;
  }

  function crearSliderImagenes(arr) {
    let slidesImagenes = arr.map(function (item, index) {
      return `<img
              class="slide"
              src="${item.imagenes[0]}"
              alt="Imagen ${index + 1}"
            />`;
    });
    slidesImagenes = slidesImagenes.join("");
    return slidesImagenes;
  }

  function crearMainRight() {
    let sectionMainRight = `<div class="dots-container">
            ${crearDots(array)}
          </div>
          <div class="slider-container">
           ${crearSliderImagenes(array)}
          </div>
            <div class="btn-container ${nombreClase}">
            <button type="button" class="prevBtn">
              <span class="material-icons"> chevron_left </span>
            </button>
            <button type="button" class="nextBtn active">
              <span class="material-icons"> chevron_right </span>
            </button>
          </div>`;

    let targetMainRight = document.querySelector(
      `.section__main-right.${nombreClase}`
    );
    targetMainRight.innerHTML = sectionMainRight;
  }

  function crearBottomRight() {
    let sectionBottomRight = array.map(function (item) {
      return `<div class="bottom-right__info-box active landscape" data-orden="${item.id}">
            <div class="subtitle">
              <span class="subtitle__number">0${item.id}</span
              ><span class="subtitle__name">${item.nombre}</span>
            </div>
            <p class="box-description">
              ${item.descripcion}
            </p>
          </div>`;
    });
    sectionBottomRight = sectionBottomRight.join("");

    let sectionBottomRightResponsive = array.map(function (item) {
      return `<div class="bottom-right__info-box active portrait" data-orden="${item.id}">
            <div class="subtitle">
              <span class="subtitle__number">0${item.id}</span
              ><span class="subtitle__name">${item.nombre}</span>
            </div>
            <p class="box-description">
              ${item.descripcion}
            </p>
          </div>`;
    });
    sectionBottomRightResponsive = sectionBottomRightResponsive.join("");

    let targetBottomRight = document.querySelector(
      `.section__bottom-right.${nombreClase}`
    );
    targetBottomRight.innerHTML =
      sectionBottomRight + sectionBottomRightResponsive;
  }

  crearMainRight();
  crearBottomRight();
}
insertarContenidoSeccion(artistas, "artistas");
insertarContenidoSeccion(noticias, "noticias");
insertarContenidoSeccion(releases, "releases");

//==========Contenido DESTACADO
function insertarContenidoDestacado() {
  function azar() {
    return artistas[Math.floor(Math.random() * artistas.length)];
  }
  let artistaSelecionado = azar();

  function crearDots(obj) {
    let dots = "";
    for (let i = 1; i < obj.imagenes.length; i++) {
      dots += `<span class="dot" data-orden="${i + 1}"></span>`;
    }
    dots = `<span class="dot active" data-orden="1"></span>` + dots;
    return dots;
  }

  function crearSliderImagenes(obj) {
    let slidesImagenes = obj.imagenes.map(function (item, index) {
      return `<img
              class="slide"
              src="${item}"
              alt="Imagen ${index + 1}"
            />`;
    });
    slidesImagenes = slidesImagenes.join("");
    return slidesImagenes;
  }

  function crearMainLeft() {
    let sectionMainLeft = `<h2 class="section__title">Artistas</h2>
          <div class="line"><hr /></div>
          <h3 class="artist-name">${artistaSelecionado.nombre}</h3>
          <div class="genero">
            <span class="genero__icon material-icons"> album </span>
            <span class="genero__texto">${artistaSelecionado.genero}</span>
          </div>
          <p class="section__description">
            ${artistaSelecionado.descripcion}
          </p>`;

    let targetMainLeft = document.querySelector(
      `.section__main-left.destacado`
    );
    targetMainLeft.innerHTML = sectionMainLeft;
  }

  function crearMainRight() {
    let sectionMainRight = `<div class="dots-container">
            ${crearDots(artistaSelecionado)}
          </div>
          <div class="slider-container">
           ${crearSliderImagenes(artistaSelecionado)}
          </div>
            <div class="btn-container destacado">
            <button type="button" class="prevBtn">
              <span class="material-icons"> chevron_left </span>
            </button>
            <button type="button" class="nextBtn active">
              <span class="material-icons"> chevron_right </span>
            </button>
          </div>`;

    let targetMainRight = document.querySelector(
      `.section__main-right.destacado`
    );
    targetMainRight.innerHTML = sectionMainRight;
  }

  function crearBottomRight() {
    let sectionBottomRight = `<div class="bottom-right__info-box active">
            <div class="subtitle">
              <span class="subtitle__number">01</span
              ><span class="subtitle__name">${artistaSelecionado.nombre}</span>
            </div>
            <p class="box-description">
              ${artistaSelecionado.descripcion}
            </p>
          </div>
          <div class="bottom-right__info-box active">
            <div class="social-links">
              <a href="${artistaSelecionado.redes.spotify}" target="_blank"><i class="fab fa-spotify"></i></a>
              <a href="${artistaSelecionado.redes.instagram}" target="_blank"><i class="fab fa-instagram"></i></a
              ><a href="${artistaSelecionado.redes.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a
              ><a href="${artistaSelecionado.redes.youtube}" target="_blank"><i class="fab fa-youtube"></i></a
              ><a href="${artistaSelecionado.redes.bandcamp}" target="_blank"><i class="fab fa-bandcamp"></i></a>
            </div>
          </div>`;

    let targetBottomRight = document.querySelector(
      `.section__bottom-right.destacado`
    );
    targetBottomRight.innerHTML = sectionBottomRight;
  }

  crearMainLeft();
  crearMainRight();
  crearBottomRight();
}
insertarContenidoDestacado();
