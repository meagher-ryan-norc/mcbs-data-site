// NAVBAR DROPDOWNS
function navDropdown(dropdown) {
  let dropdownID = dropdown + 'Dropdown';
  document. getElementById(dropdownID).classList.toggle("show");
}

window.onclick = function(e) {
  if (e.target.id != 'tools-btn') {
    let targetDropdown = document.getElementById("toolsDropdown");
    if (targetDropdown.classList.contains('show')) {
      targetDropdown.classList.remove('show');
    }
  }
  if (e.target.id != 'about-btn') {
    let targetDropdown = document.getElementById("aboutDropdown");
    if (targetDropdown.classList.contains('show')) {
      targetDropdown.classList.remove('show');
    }
  }
}
