function myFunction() {
    var x = document.getElementById("mynav");
    if (x.className === "Navbar") {
      x.className += " responsive";
    } else {
      x.className = "Navbar";
    }
  }