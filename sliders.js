//=============Función para desapilar las slides de los sliders.
function deStack(images, boxes) {
  function deStackImages(slideImagen) {
    slideImagen.forEach(function (slide, index) {
      slide.style.left = `${index * 100}%`;
    });
  }
  deStackImages(images);

  function deStackInfobox(infoBoxes) {
    infoBoxes.forEach(function (slide, index) {
      slide.style.left = `${index * 50}%`;
    });
  }
  deStackInfobox(boxes);
}

//=============Función del funcionamiento de los sliders.
function funcionamientoCompletoSliders(images, boxes, dots, btnPrev, btnNext) {
  let contadorPosicion = 0;

  //Las helper function.
  function contadorBoxesDots(e) {
    contadorPosicion = e.currentTarget.dataset.orden - 1;
  }

  function limiteContadorBotones() {
    if (contadorPosicion === images.length) {
      contadorPosicion = 0;
    }
    if (contadorPosicion < 0) {
      contadorPosicion = images.length - 1;
    }
  }

  function moverSlides(slides) {
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${contadorPosicion * 100}%)`;
    });
  }

  function estadoActivoBoxesDots(infoBoxes, slideDots) {
    function quitarYponerClase(elemento) {
      if (!(elemento.dataset.orden == contadorPosicion + 1)) {
        elemento.classList.remove("active");
      } else if (!elemento.classList.contains("active")) {
        elemento.classList.add("active");
      }
    }

    infoBoxes.forEach(function (elem) {
      quitarYponerClase(elem);
    });

    slideDots.forEach(function (elem) {
      quitarYponerClase(elem);
    });
  }

  function estadoActivoBtns() {
    btnPrev.classList.remove("active");
    btnNext.classList.remove("active");

    if (contadorPosicion === images.length - 1) {
      btnPrev.classList.add("active");
    } else {
      btnNext.classList.add("active");
    }
  }

  //Las main function (lo que se ejecuta al dar click).
  function clickDotsOBoxes(e) {
    contadorBoxesDots(e);
    estadoActivoBoxesDots(boxes, dots);
    estadoActivoBtns();
    moverSlides(images);
    moverSlides(boxes);
  }

  function clickBotonPrev() {
    contadorPosicion--;
    limiteContadorBotones();
    estadoActivoBoxesDots(boxes, dots);
    estadoActivoBtns();
    moverSlides(images);
    moverSlides(boxes);
  }

  function clickBotonNext() {
    contadorPosicion++;
    limiteContadorBotones();
    estadoActivoBoxesDots(boxes, dots);
    estadoActivoBtns();
    moverSlides(images);
    moverSlides(boxes);
  }

  //Los event listeners.
  boxes.forEach(function (elemento) {
    elemento.addEventListener("click", clickDotsOBoxes);
  });

  dots.forEach(function (elemento) {
    elemento.addEventListener("click", clickDotsOBoxes);
  });

  btnPrev.addEventListener("click", clickBotonPrev);
  btnNext.addEventListener("click", clickBotonNext);
  // setInterval(clickBotonNext, 8000); //Vuelve los sliders automáticos.
}

//=============ARTISTAS
//elementos Artistas
const slidesImagesArtistas = document.querySelectorAll(".artistas .slide");
const slidesBoxesArtistas = document.querySelectorAll(
  ".artistas .bottom-right__info-box"
);
const dotsArtistas = document.querySelectorAll(".artistas .dot");
const btnPrevArtistas = document.querySelector(".artistas .prevBtn");
const btnNextArtistas = document.querySelector(".artistas .nextBtn");

//deStack Artistas.
deStack(slidesImagesArtistas, slidesBoxesArtistas);

//Funcionamiento sliders Artistas.
funcionamientoCompletoSliders(
  slidesImagesArtistas,
  slidesBoxesArtistas,
  dotsArtistas,
  btnPrevArtistas,
  btnNextArtistas
);

//=============DESTACADO
//=============Función del funcionamiento de los sliders.
function funcionamientoCompletoSlidersDestacado(
  images,
  dots,
  btnPrev,
  btnNext
) {
  let contadorPosicion = 0;

  //Las helper function.
  function contadorBoxesDots(e) {
    contadorPosicion = e.currentTarget.dataset.orden - 1;
  }

  function limiteContadorBotones() {
    if (contadorPosicion === images.length) {
      contadorPosicion = 0;
    }
    if (contadorPosicion < 0) {
      contadorPosicion = images.length - 1;
    }
  }

  function moverSlides(slides) {
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${contadorPosicion * 100}%)`;
    });
  }

  function estadoActivoBoxesDots(slideDots) {
    function quitarYponerClase(elemento) {
      if (!(elemento.dataset.orden == contadorPosicion + 1)) {
        elemento.classList.remove("active");
      } else if (!elemento.classList.contains("active")) {
        elemento.classList.add("active");
      }
    }

    slideDots.forEach(function (elem) {
      quitarYponerClase(elem);
    });
  }

  function estadoActivoBtns() {
    btnPrev.classList.remove("active");
    btnNext.classList.remove("active");

    if (contadorPosicion === images.length - 1) {
      btnPrev.classList.add("active");
    } else {
      btnNext.classList.add("active");
    }
  }

  //Las main function (lo que se ejecuta al dar click).
  function clickDotsOBoxes(e) {
    contadorBoxesDots(e);
    estadoActivoBoxesDots(dots);
    estadoActivoBtns();
    moverSlides(images);
  }

  function clickBotonPrev() {
    contadorPosicion--;
    limiteContadorBotones();
    estadoActivoBoxesDots(dots);
    estadoActivoBtns();
    moverSlides(images);
  }

  function clickBotonNext() {
    contadorPosicion++;
    limiteContadorBotones();
    estadoActivoBoxesDots(dots);
    estadoActivoBtns();
    moverSlides(images);
  }

  //Los event listeners.

  dots.forEach(function (elemento) {
    elemento.addEventListener("click", clickDotsOBoxes);
  });

  btnPrev.addEventListener("click", clickBotonPrev);
  btnNext.addEventListener("click", clickBotonNext);
  setInterval(clickBotonNext, 5000); //Vuelve los sliders automáticos.
}
//elementos Destacado
const slidesImagesDestacado = document.querySelectorAll(".destacado .slide");
const slidesBoxesDestacado = document.querySelectorAll(
  ".destacado .bottom-right__info-box"
);
const dotsDestacado = document.querySelectorAll(".destacado .dot");
const btnPrevDestacado = document.querySelector(".destacado .prevBtn");
const btnNextDestacado = document.querySelector(".destacado .nextBtn");

//deStack Artistas.
deStack(slidesImagesDestacado, slidesBoxesDestacado);

//Funcionamiento sliders Artistas.
funcionamientoCompletoSlidersDestacado(
  slidesImagesDestacado,
  dotsDestacado,
  btnPrevDestacado,
  btnNextDestacado
);

//=============NOTICIAS
//elementos Noticias
const slidesImagesNoticias = document.querySelectorAll(".noticias .slide");
const slidesBoxesNoticias = document.querySelectorAll(
  ".noticias .bottom-right__info-box"
);
const dotsNoticias = document.querySelectorAll(".noticias .dot");
const btnPrevNoticias = document.querySelector(".noticias .prevBtn");
const btnNextNoticias = document.querySelector(".noticias .nextBtn");

//deStack Noticias.
deStack(slidesImagesNoticias, slidesBoxesNoticias);

//Funcionamiento sliders Noticias.
funcionamientoCompletoSliders(
  slidesImagesNoticias,
  slidesBoxesNoticias,
  dotsNoticias,
  btnPrevNoticias,
  btnNextNoticias
);

//=============RELEASES
//elementos Releases
const slidesImagesReleases = document.querySelectorAll(".releases .slide");
const slidesBoxesReleases = document.querySelectorAll(
  ".releases .bottom-right__info-box"
);
const dotsReleases = document.querySelectorAll(".releases .dot");
const btnPrevReleases = document.querySelector(".releases .prevBtn");
const btnNextReleases = document.querySelector(".releases .nextBtn");

//deStack Releases.
deStack(slidesImagesReleases, slidesBoxesReleases);

//Funcionamiento sliders Releases.
funcionamientoCompletoSliders(
  slidesImagesReleases,
  slidesBoxesReleases,
  dotsReleases,
  btnPrevReleases,
  btnNextReleases
);

//=============NOSOTROS
//elementos Nosotros
const slidesImagesNosotros = document.querySelectorAll(".nosotros .slide");
const slidesBoxesNosotros = document.querySelectorAll(
  ".nosotros .bottom-right__info-box"
);
const dotsNosotros = document.querySelectorAll(".nosotros .dot");
const btnPrevNosotros = document.querySelector(".nosotros .prevBtn");
const btnNextNosotros = document.querySelector(".nosotros .nextBtn");

//deStack Nosotros.
deStack(slidesImagesNosotros, slidesBoxesNosotros);

//Funcionamiento sliders Nosotros.
funcionamientoCompletoSliders(
  slidesImagesNosotros,
  slidesBoxesNosotros,
  dotsNosotros,
  btnPrevNosotros,
  btnNextNosotros
);

//=============CONTACTO
//elementos Contacto
const slidesImagesContacto = document.querySelectorAll(".contacto .slide");
const slidesBoxesContacto = document.querySelectorAll(
  ".contacto .bottom-right__info-box"
);
const dotsContacto = document.querySelectorAll(".contacto .dot");
const btnPrevContacto = document.querySelector(".contacto .prevBtn");
const btnNextContacto = document.querySelector(".contacto .nextBtn");

//deStack Contacto.
deStack(slidesImagesContacto, slidesBoxesContacto);

//Funcionamiento sliders Contacto.
funcionamientoCompletoSliders(
  slidesImagesContacto,
  slidesBoxesContacto,
  dotsContacto,
  btnPrevContacto,
  btnNextContacto
);
