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
