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

function showProductsList() {

    if(document.querySelector(".ulProducts")){
        document.querySelector(".ulProducts").setAttribute('class', 'showUlProducts')
    }else{
        document.querySelector(".showUlProducts").setAttribute('class', 'ulProducts')
    }
  
}


function showFruitsList(){
    if(document.querySelector(".ulFruits")){
        document.querySelector(".ulFruits").setAttribute('class', 'showfruits')
    }else{
        document.querySelector(".showfruits").setAttribute('class', 'ulFruits')
    }
}