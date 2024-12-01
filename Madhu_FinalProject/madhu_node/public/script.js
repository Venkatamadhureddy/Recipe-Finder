function responsiveMenu() {
    var element = document.getElementById("navigation");
    if (element.className === "nav") {
        element.className += " responsive";
    } else {
        element.className = "nav";
    }
  }