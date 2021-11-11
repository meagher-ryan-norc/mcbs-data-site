var exports = {};

// NAVBAR DROPDOWNS
const navDropdowns = document.querySelectorAll('.drop-btn');

for(let i = 0; i < navDropdowns.length; i++){
  navDropdowns[i].addEventListener("click",  e => {
    navDropdown(e.target.id);
  });
}

function navDropdown(dropdown) {
  let dropdownID = dropdown + '-dropdown';
  document.getElementById(dropdownID).classList.toggle("show");
}

window.onclick = function(e) {
  if (e.target.id != 'tools-btn') {
    let targetDropdown = document.getElementById("tools-btn-dropdown");
    if (targetDropdown.classList.contains('show')) {
      targetDropdown.classList.remove('show');
    }
  }
  if (e.target.id != 'about-btn') {
    let targetDropdown = document.getElementById("about-btn-dropdown");
    if (targetDropdown.classList.contains('show')) {
      targetDropdown.classList.remove('show');
    }
  }
}


// HAMBURGER MENU
const hamburgerButton = document.querySelector('.hamburger');
const hamburgerContent = document.querySelector('.hamburger-content');

hamburgerButton.addEventListener("click", e => {
  hamburgerContent.classList.toggle("show");
})

window.addEventListener('resize', function(){
  if (hamburgerContent.classList.contains("show")){
    hamburgerContent.classList.toggle("show");
  }
});
