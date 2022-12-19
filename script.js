const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function switchStyle() {
  var style = document.getElementById("mycss").getAttribute("href")
  if (style == "styleJour.css") {
    document.getElementById("mycss").setAttribute("href", "styleNuit.css");
  }
  else {
    document.getElementById("mycss").setAttribute("href", "styleJour.css");

  }
}

