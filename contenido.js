const artistas = [
  {
    id: 1,
    nombre: "Panela Sound",
    genero: "Electrónica latina / World music",
    descripcion:
      "Fam quinoa tattooed listicle, keytar distillery you probably haven't heard of them synth. Tofu wolf craft beer organic hell of paleo.",
    imagenes: [
      "https://revistaculturalsono.files.wordpress.com/2012/04/panela-sound.jpg?w=584",
      "https://i.ytimg.com/vi/VDmr9sVOcRg/maxresdefault.jpg",
      "https://i.ytimg.com/vi/SqCFuaHjxbY/maxresdefault.jpg",
    ],
    redes: {
      bandcamp: "https://bandcamp.com/",
      spotify: "https://open.spotify.com/artist/1B1XXPsLbeS7XEonrp4TCb",
      youtube: "https://www.youtube.com/user/panelasound",
      facebook: "https://www.facebook.com/panelasound/",
      instagram: "https://www.instagram.com/explore/tags/panelasound/",
    },
  },
  {
    id: 2,
    nombre: "La Lovo",
    genero: "Rock con música folclórica colombiana",
    descripcion:
      "Jean shorts mumblecore dreamcatcher migas la croix truffaut cornhole gochujang hot chicken. Cold-pressed kickstarter stumptown.",
    imagenes: [
      "https://f4.bcbits.com/img/0019676796_10.jpg",
      "https://i.ytimg.com/vi/SjhflRgnvJs/maxresdefault.jpg",
      "https://c8.alamy.com/compes/r1pe55/la-lovo-cantante-y-compositora-de-medellin-colombia-r1pe55.jpg",
    ],
    redes: {
      bandcamp: "https://lalovo.bandcamp.com/",
      spotify: "https://open.spotify.com/artist/4JSU9M75pTgMVttxSnFchH",
      youtube: "https://www.youtube.com/channel/UC6EqUB2voofLen4ph3uQFAA",
      facebook: "https://www.facebook.com/lalovomusic/",
      instagram: "https://www.instagram.com/lalovomusic",
    },
  },
  {
    id: 3,
    nombre: "Orquesta X",
    genero: "Folk",
    descripcion:
      "Art party taxidermy four dollar toast, lo-fi hashtag semiotics microdosing fanny pack photo booth. Polaroid drinking vinegar hell.",
    imagenes: [
      "https://images.unsplash.com/photo-1593167751520-95a058b903c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1560473472-9e90e4c92f01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    ],
    redes: {
      bandcamp: "https://bandcamp.com/",
      spotify: "https://open.spotify.com/",
      youtube: "https://www.youtube.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 4,
    nombre: "Solista Y",
    genero: "Afrobeat",
    descripcion:
      "Blog hexagon lyft ugh brunch taxidermy. Intelligentsia four loko chillwave, kale chips brooklyn yr pitchfork mixtape.",
    imagenes: [
      "https://images.unsplash.com/photo-1522863602463-afebb8886ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1502710655568-ee441b74b0b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    ],
    redes: {
      bandcamp: "https://bandcamp.com/",
      spotify: "https://open.spotify.com/",
      youtube: "https://www.youtube.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
];

const noticias = [
  {
    id: 1,
    nombre: "Circulart 2020",
    descripcion:
      "Fam quinoa tattooed listicle, keytar distillery you probably haven't heard of them synth. Tofu wolf craft beer organic hell of paleo.",
    imagenes: [
      "https://images.unsplash.com/photo-1463320697897-897fc554409a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ],
  },
  {
    id: 2,
    nombre: "Agenda 2021",
    descripcion:
      "Blog hexagon lyft ugh brunch taxidermy. Intelligentsia four loko chillwave, kale chips brooklyn yr pitchfork mixtape.",
    imagenes: [
      "https://images.unsplash.com/photo-1611426959571-9941542ea4a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ],
  },
  {
    id: 3,
    nombre: "Novedades",
    descripcion:
      "Art party taxidermy four dollar toast, lo-fi hashtag semiotics microdosing fanny pack photo booth. Polaroid drinking vinegar hell.",
    imagenes: [
      "https://images.unsplash.com/photo-1585435669168-f4cc3f5d1b8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
    ],
  },
];

const releases = [
  {
    id: 1,
    nombre: "Sereno",
    descripcion:
      "Jean shorts mumblecore dreamcatcher migas la croix truffaut cornhole gochujang hot chicken. Cold-pressed kickstarter stumptown.",
    imagenes: [
      "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/c9/d9/6e/c9d96eaa-5bff-e81d-673f-4c7c4365e819/195079999338.jpg/1200x630cw.png",
    ],
  },
  {
    id: 2,
    nombre: "Release",
    descripcion:
      "Jean shorts mumblecore dreamcatcher migas la croix truffaut cornhole gochujang hot chicken. Cold-pressed kickstarter stumptown.",
    imagenes: [
      "https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80",
    ],
  },
  {
    id: 3,
    nombre: "Sencillo",
    descripcion:
      "Fam quinoa tattooed listicle, keytar distillery you probably haven't heard of them synth. Tofu wolf craft beer organic hell of paleo.",
    imagenes: [
      "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ],
  },
  {
    id: 4,
    nombre: "EP",
    descripcion:
      "Art party taxidermy four dollar toast, lo-fi hashtag semiotics microdosing fanny pack photo booth. Polaroid drinking vinegar hell.",
    imagenes: [
      "https://images.unsplash.com/photo-1580656449278-e8381933522c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
    ],
  },
];

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
