//MOSTRAR MENÚ

function showList() {
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
}
//AJUSTAR TAMAÑO DE LA VENTANA OVERFLOW DEL MENÚ
document.querySelector('.listProducts').style.height = `${screen.height-(screen.height*0.15)}px`;

//MOSTRAR LISTA DE PRODUCTOS
function showProductsList() {
  if (document.querySelector(".ulProducts")) {
    document
      .querySelector(".ulProducts")
      .setAttribute("class", "showUlProducts");
  } else {
    document
      .querySelector(".showUlProducts")
      .setAttribute("class", "ulProducts");
  }
}

//MOSTRAR LISTA DE FRUTAS 
function showFruitsList() {
  if (document.querySelector(".ulFruits")) {
    document.querySelector(".ulFruits").setAttribute("class", "showfruits");
  } else {
    document.querySelector(".showfruits").setAttribute("class", "ulFruits");
  }
}

//MOSTRAR LISTA DE VERDURAS 
function showVerduras() {
  if (document.querySelector(".ulVerduras")) {
    document.querySelector(".ulVerduras").setAttribute("class", "showVerduras");
  } else {
    document.querySelector(".showVerduras").setAttribute("class", "ulVerduras");
  }
}
