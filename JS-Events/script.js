// 1 : afficher "clique" dans la console quand on clique sur le footer
// 1bis : afficher le nombre de clics
function f1(){
  footer = document.getElementsByTagName("footer");
  clicNb = 1;
  footer[0].addEventListener("click", function(){
    console.log("clique n° " + clicNb);
    clicNb++;
  });
}

// 2 : affichage du hamburger menu
function f2(){
  navbarMenu = document.getElementsByClassName("navbar-toggler");
  navbarMenu[0].addEventListener("click", function(){
    document.getElementById("navbarHeader").classList.toggle("collapse")
  });
}

// 3 : si on clique sur l'edit de la 1e card, le texte devient rouge et est irréversible
function f3(){
  edit1stCard = document.querySelectorAll(".btn-group")[0].getElementsByTagName("button")[1];
  edit1stCard.addEventListener("click", function(){
    document.getElementsByClassName("card-body")[0].style.color = "red";
  });
}

// 4 : si on clique sur l'edit de la 2e card, le texte devient vert et est réversible
function f4(){
  edit2ndCard = document.querySelectorAll(".btn-group")[1].getElementsByTagName("button")[1];
  edit2ndCard.addEventListener("click", function(){
    if (document.getElementsByClassName("card-body")[1].style.color === "green"){
      document.getElementsByClassName("card-body")[1].style.color = "";
    } else {
      document.getElementsByClassName("card-body")[1].style.color = "green";
    }
  });
}

//5 : si on double clique sur la navbar, Bootstrap disparaît
function f5(){
  navbar = document.getElementsByClassName("navbar")[0];
  navbar.addEventListener("dblclick", function(){
    if (document.getElementsByTagName("link")[0].attributes.href.nodeValue === ""){
      document.getElementsByTagName("link")[0].attributes.href.nodeValue = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    } else {
      document.getElementsByTagName("link")[0].attributes.href.nodeValue = "";
    }
  });
}

// 6 : si on survole le bouton view, le texte disparaît, l'image est réduite à 20% de sa taille originale et l'action est réversible
function f6(){
  // création d'un array hash contenant pour chaque indice des cards, si elles ont été survolées et le contenu du texte
  cardsHover = [];
  for (let i=0; i<6;i++){
    viewButton = document.querySelectorAll(".btn-group")[i].getElementsByTagName("button")[0];
    cardsHover[i] = {hover:false,text:document.getElementsByClassName("card-text")[i].textContent};
    viewButton.addEventListener("mouseover", function(){
      if (cardsHover[i].hover === false){
        document.getElementsByClassName("card-text")[i].textContent = "";
        document.getElementsByClassName("card-img-top")[i].style.width = "58px";
        document.getElementsByClassName("card-img-top")[i].style.height = "58px";
        cardsHover[i].hover = true;
      } else {
        document.getElementsByClassName("card-text")[i].textContent = cardsHover[i].text;
        document.getElementsByClassName("card-img-top")[i].style.width = "288px";
        document.getElementsByClassName("card-img-top")[i].style.height = "288px";
        cardsHover[i].hover = false;
      }
    });
  }
}

// 7 : si on appuie sur le bouton gris, on fait passer la dernière card en première
function f7(){
  greyButton = document.getElementsByClassName("btn btn-secondary my-2")[0];
  greyButton.addEventListener("click", function(){
    cards = document.querySelectorAll(".col-md-4");
    var parentElement = document.getElementsByClassName('row')[1];
    var firstCard = parentElement.firstChild;
    parentElement.insertBefore(cards[5], firstCard);

  });
}

// 8 : si on appuie sur le bouton bleu, on fait passer la première card en dernière
function f8(){
  blueButton = document.getElementsByClassName("btn btn-primary my-2")[0];
  blueButton.addEventListener("click", function(){
    event.preventDefault();
    cards = document.querySelectorAll(".col-md-4");
    var parentElement = document.getElementsByClassName('row')[1];
    var lastCard = cards[5].nextSibling;
    parentElement.insertBefore(cards[0], lastCard);
  });
}

// 9 : hardcore function
function f9(){

}

function main(){
  f1();
  f2();
  f3();
  f4();
  f5();
  f6();
  f7();
  f8();
  f9();
}

main();
