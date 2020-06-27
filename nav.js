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
const sizeScreen = window.innerHeight;
 let sizeNavBar = document.querySelector('.listProducts').style.height = `${sizeScreen-(window.innerHeight*0.19)}px`;

if(window.innerHeight!==sizeScreen){
  document.querySelector('.listProducts').style.height = `${window.innerHeight-(window.innerHeight*0.19)}px`;
}
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
  if(document.querySelector(".showVerduras")){
    document.querySelector(".showVerduras").setAttribute("class", "ulVerduras");
  }
  if (document.querySelector(".ulFruits")) {
    document.querySelector(".ulFruits").setAttribute("class", "showfruits");
  } else {
    document.querySelector(".showfruits").setAttribute("class", "ulFruits");
  }
}

//MOSTRAR LISTA DE VERDURAS 
function showVerduras() {
  if(document.querySelector(".showfruits")){
    document.querySelector(".showfruits").setAttribute("class", "ulFruits");
  }
  if (document.querySelector(".ulVerduras")) {
    document.querySelector(".ulVerduras").setAttribute("class", "showVerduras");
  } else {
    document.querySelector(".showVerduras").setAttribute("class", "ulVerduras");
  }
}
