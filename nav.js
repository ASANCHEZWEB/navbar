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
  if (document.querySelector(".showVerduras")) {
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
  if (document.querySelector(".showfruits")) {
    document.querySelector(".showfruits").setAttribute("class", "ulFruits");
  }
  if (document.querySelector(".ulVerduras")) {
    document.querySelector(".ulVerduras").setAttribute("class", "showVerduras");
  } else {
    document.querySelector(".showVerduras").setAttribute("class", "ulVerduras");
  }
}


//ocultar menu si se hace click fuera
let arraybuttons= [...document.querySelector('nav>div:nth-child(2)').getElementsByTagName('button')]
let arrayElements=[]

arraybuttons.forEach(element=>{
  arrayElements.push(element)
});
[...document.querySelector('nav>div:nth-child(2)').getElementsByTagName('ul')].forEach(element=>{
  arrayElements.push(element)
})
arrayElements.push(arraybuttons[0].querySelector('img'))



window.onclick = function(event) {
  if(!arrayElements.includes(event.target)){
    showList()
  
    document.querySelector('nav>div:nth-child(2)').querySelector('ul>li>ul').setAttribute('class','ulProducts')
  }

}

