/*1-Crear 3 temas de colores para toda su hoja de vida y permitir cambiar 
dichos temas por medio de alguna serie de botones o como usted lo crea pertinente,
lo importante es poder hacer que su hoja de vida tenga 3 temas de colores en el cual 
el usuario pueda seleccionar qué tema escoger. A continuación un ejemplo guía*/

/*tema principal o tema 1*/
function selecTema1() {
  var cambiar = "1tema";
  localStorage.setItem("tema", cambiar);
  var bg = document.getElementById("body");
  bg.style.backgroundColor = "#FFF7D6";
  if (document.getElementById("foto") != null) {
    document.getElementById("foto").style.borderColor = "#FFF7D6";
  }
  var path = window.location.pathname;
  var page = path.split("/").pop();
  document.getElementById("t1").style.color = "#FFF7D6";
  document.getElementById("t2").style.color = "#FFF7D6";
  if (page == "index.HTML") {
    document.getElementById("t3").style.color = "#FFF7D6";
    document.getElementById("t4").style.color = "#FFF7D6";
  } else {
    document.getElementById("tt2").style.color = "black";
    document.getElementById("tt2").style.backgroundColor = "#FFF7D6";
    document.getElementById("tt3").style.color = "black";
    document.getElementById("tt3").style.backgroundColor = "#FFF7D6";
  }
  if (document.getElementById("tt4") != null) {
    document.getElementById("tt4").style.color = "black";
    document.getElementById("tt4").style.backgroundColor = "#FFF7D6";
  }
  if (document.getElementById("tt5") != null) {
    document.getElementById("tt5").style.color = "black";
    document.getElementById("tt5").style.backgroundColor = "#FFF7D6";
  }
  if (document.getElementById("tt6") != null) {
    document.getElementById("tt6").style.color = "black";
    document.getElementById("tt6").style.backgroundColor = "#FFF7D6";
  }
  if (document.getElementById("tt7") != null) {
    document.getElementById("tt7").style.color = "black";
    document.getElementById("tt7").style.backgroundColor = "#FFF7D6";
  }
  if (document.getElementById("descarga") != null) {
    document.getElementById("descarga").style.color = "black";
    document.getElementById("descarga").style.backgroundColor = "#FFF7D6";
  }
}
/*tema2 el tema agregado*/
function selecTema2() {
  var bg = document.getElementById("body");
  bg.style.backgroundColor = "#7689F3";
  var cambiar = "2tema";
  localStorage.setItem("tema", cambiar);
  if (document.getElementById("foto") != null) {
    document.getElementById("foto").style.borderColor = "#7689F3";
  }
  var path = window.location.pathname;
  var page = path.split("/").pop();
  document.getElementById("t1").style.color = "#7689F3";
  document.getElementById("t2").style.color = "#7689F3";
  if (page == "index.HTML") {
    document.getElementById("t3").style.color = "#7689F3";
    document.getElementById("t4").style.color = "#7689F3";
  } else {
    document.getElementById("tt2").style.color = "white";
    document.getElementById("tt2").style.backgroundColor = "#7689F3";
    document.getElementById("tt3").style.color = "white";
    document.getElementById("tt3").style.backgroundColor = "#7689F3";
  }
  if (document.getElementById("tt4") != null) {
    document.getElementById("tt4").style.color = "white";
    document.getElementById("tt4").style.backgroundColor = "#7689F3";
  }
  if (document.getElementById("tt5") != null) {
    document.getElementById("tt5").style.color = "white";
    document.getElementById("tt5").style.backgroundColor = "#7689F3";
  }
  if (document.getElementById("tt6") != null) {
    document.getElementById("tt6").style.color = "white";
    document.getElementById("tt6").style.backgroundColor = "#7689F3";
  }
  if (document.getElementById("tt7") != null) {
    document.getElementById("tt7").style.color = "white";
    document.getElementById("tt7").style.backgroundColor = "#7689F3";
  }
  if (document.getElementById("descarga") != null) {
    document.getElementById("descarga").style.color = "white";
    document.getElementById("descarga").style.backgroundColor = "#7689F3";
  }
}
/*tema3 el tema agregado*/
function selecTema3() {
  var bg = document.getElementById("body");
  bg.style.backgroundColor = "#158582";
  var cambiar = "3tema";
  localStorage.setItem("tema", cambiar);
  if (document.getElementById("foto") != null) {
    document.getElementById("foto").style.borderColor = "#158582";
  }
  var path = window.location.pathname;
  var page = path.split("/").pop();
  document.getElementById("t1").style.color = "#158582";
  document.getElementById("t2").style.color = "#158582";
  if (page == "index.HTML") {
    document.getElementById("t3").style.color = "#158582";
    document.getElementById("t4").style.color = "#158582";
  } else {
    document.getElementById("tt2").style.color = "white";
    document.getElementById("tt2").style.backgroundColor = "#158582";
    document.getElementById("tt3").style.color = "white";
    document.getElementById("tt3").style.backgroundColor = "#158582";
  }
  if (document.getElementById("tt4") != null) {
    document.getElementById("tt4").style.color = "white";
    document.getElementById("tt4").style.backgroundColor = "#158582";
  }
  if (document.getElementById("tt5") != null) {
    document.getElementById("tt5").style.color = "white";
    document.getElementById("tt5").style.backgroundColor = "#158582";
  }
  if (document.getElementById("tt6") != null) {
    document.getElementById("tt6").style.color = "white";
    document.getElementById("tt6").style.backgroundColor = "#158582";
  }
  if (document.getElementById("tt7") != null) {
    document.getElementById("tt7").style.color = "white";
    document.getElementById("tt7").style.backgroundColor = "#158582";
  }
  if (document.getElementById("descarga") != null) {
    document.getElementById("descarga").style.color = "white";
    document.getElementById("descarga").style.backgroundColor = "#158582";
  }
}
/*tema4 el tema agregado*/
function selecTema4() {
  var bg = document.getElementById("body");
  bg.style.backgroundColor = "#F9F871";
  var cambiar = "4tema";
  localStorage.setItem("tema", cambiar);
  if (document.getElementById("foto") != null) {
    document.getElementById("foto").style.borderColor = "#F9F871";
  }
  var path = window.location.pathname;
  var page = path.split("/").pop();
  document.getElementById("t1").style.color = "#F9F871";
  document.getElementById("t2").style.color = "#F9F871";
  if (page == "index.HTML") {
    document.getElementById("t3").style.color = "#F9F871";
    document.getElementById("t4").style.color = "#F9F871";
  } else {
    document.getElementById("tt2").style.color = "black";
    document.getElementById("tt2").style.backgroundColor = "#F9F871";
    document.getElementById("tt3").style.color = "black";
    document.getElementById("tt3").style.backgroundColor = "#F9F871";
  }
  if (document.getElementById("tt4") != null) {
    document.getElementById("tt4").style.color = "black";
    document.getElementById("tt4").style.backgroundColor = "#F9F871";
  }
  if (document.getElementById("tt5") != null) {
    document.getElementById("tt5").style.color = "black";
    document.getElementById("tt5").style.backgroundColor = "#F9F871";
  }
  if (document.getElementById("tt6") != null) {
    document.getElementById("tt6").style.color = "black";
    document.getElementById("tt6").style.backgroundColor = "#F9F871";
  }
  if (document.getElementById("tt7") != null) {
    document.getElementById("tt7").style.color = "black";
    document.getElementById("tt7").style.backgroundColor = "#F9F871";
  }
  if (document.getElementById("descarga") != null) {
    document.getElementById("descarga").style.color = "black";
    document.getElementById("descarga").style.backgroundColor = "#F9F871";
  }
}
/*2-En su hoja de vida deberá crear algo parecido a lo que se llama un efecto de acordeón,
por favor tenga muy presente que no debe usar ninguna librería o framework externo para realizar este efecto, 
pues lo único que se solicita es que de alguna forma usted haga que cuando se le haga clic al titulo o botón 
que usted haya determinado para dicha situación, el contenido se le oculte sin necesidad de efectos de animación. 
Esto debe ser aplicado en las páginas */
function accordion() {
  var cja = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < cja.length; i++) {
    cja[i].addEventListener("click", function () {
      var panel = this.nextElementSibling;
      if (panel.style.display === "none") {
        panel.style.display = "block";
      } else {
        panel.style.display = "none";
      }
    });
  }
}
/*[OPCIONAL PLUS] Hacer que el tema de color seleccionado se mantenga por sobre todo el sistema de las 5 páginas de la hoja de vida, 
dado que al cumplir con el primer punto de este taller y al cambiar de página, el tema seleccionado se perderá volviendo al color 
inicial de cada página.*/
function temaPermanente() {
  var cambiar;
  if (
    localStorage.getItem("tema") != null &&
    localStorage.getItem("tema") == "1tema"
  ) {
    selecTema1();
  } else if (
    localStorage.getItem("tema") != null &&
    localStorage.getItem("tema") == "2tema"
  ) {
    selecTema2();
  } else if (
    localStorage.getItem("tema") != null &&
    localStorage.getItem("tema") == "3tema"
  ) {
    selecTema3();
  } else if (
    localStorage.getItem("tema") != null &&
    localStorage.getItem("tema") == "4tema"
  ) {
    selecTema4();
  }
}
