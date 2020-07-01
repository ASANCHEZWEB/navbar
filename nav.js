//MOSTRAR MENÚ

let showList = () => {
  document.querySelector(".listProducts").classList.toggle("showList");
  if (
    document
      .querySelector("nav>div:nth-child(2)>button>img")
      .getAttribute("src") === "menu.svg"
  ) {
    document
      .querySelector("nav>div:nth-child(2)>button>img")
      .setAttribute("src", "closeMenu.png");
  } else {
    document
      .querySelector("nav>div:nth-child(2)>button>img")
      .setAttribute("src", "menu.svg");
  }
};

//MOSTRAR LISTA DE PRODUCTOS
let showProductsList = () => {
  if (document.querySelector(".ulProducts")) {
    document
      .querySelector(".ulProducts")
      .setAttribute("class", "showUlProducts");
  } else {
    document
      .querySelector(".showUlProducts")
      .setAttribute("class", "ulProducts");
  }
};

//MOSTRAR LISTA DE FRUTAS
let showFruitsList = () => {
  if (document.querySelector(".showVerduras")) {
    document.querySelector(".showVerduras").setAttribute("class", "ulVerduras");
  }
  if (document.querySelector(".ulFruits")) {
    document.querySelector(".ulFruits").setAttribute("class", "showfruits");
  } else {
    document.querySelector(".showfruits").setAttribute("class", "ulFruits");
  }
};

//MOSTRAR LISTA DE VERDURAS
let showVerduras = () => {
  if (document.querySelector(".showfruits")) {
    document.querySelector(".showfruits").setAttribute("class", "ulFruits");
  }
  if (document.querySelector(".ulVerduras")) {
    document.querySelector(".ulVerduras").setAttribute("class", "showVerduras");
  } else {
    document.querySelector(".showVerduras").setAttribute("class", "ulVerduras");
  }
};

//ocultar menu si se clickea un elemento del menu mobile
let arrayElements = [];
[...document.querySelectorAll(".listProducts>li")].forEach((element) => {
  if (!element.querySelector("button")) {
    arrayElements.push(element);
  }
});
[...document.querySelectorAll(".listProducts>li>ul>li")].forEach((element) => {
  if (!element.querySelector("button")) {
    arrayElements.push(element);
  }
});
[...document.querySelectorAll(".listProducts>li>ul>li>ul>li")].forEach(
  (element) => {
    if (!element.querySelector("button")) {
      arrayElements.push(element);
    }
  }
);

for (i = 0; i < arrayElements.length; i++) {
  arrayElements[i].onclick = function () {
    if (document.querySelector(".showList")) {
      showList();
    }
    if (document.querySelector(".showUlProducts")) {
      showProductsList();
    }
  };
}



