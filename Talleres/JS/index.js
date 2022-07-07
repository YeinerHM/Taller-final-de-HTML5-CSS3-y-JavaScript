function accordion() {
  var cja = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < cja.length; i++) {
    cja[i].addEventListener("click", function () {
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

  