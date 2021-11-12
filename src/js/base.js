var exports = {}; // needed for splide

// NAVBAR DROPDOWNS
const navDropdowns = document.querySelectorAll('.drop-btn');

// add event listener to nav dropdowns
for(let i = 0; i < navDropdowns.length; i++){
  navDropdowns[i].addEventListener("click",  e => {
    navDropdown(e.target.id);
  });
}

function navDropdown(dropdown) {
  const button = document.getElementById(dropdown);
  let dropdownID = dropdown + '-dropdown';
  document.getElementById(dropdownID).classList.toggle("show");
  button.classList.toggle("active");
}

// when clicking away from dropdown content it hides the menu
window.addEventListener('click', e => {
  if (e.target.id != 'tools-btn') {
    let targetDropdown = document.getElementById("tools-btn-dropdown");
    let targetButton = document.getElementById('tools-btn');
    if (targetDropdown.classList.contains('show')) {
      targetDropdown.classList.remove('show');
    }
    if (targetButton.classList.contains('active')) {
      targetButton.classList.remove('active');
    }
  }
  if (e.target.id != 'about-btn') {
    let targetDropdown = document.getElementById("about-btn-dropdown");
    let targetButton = document.getElementById('about-btn');
    if (targetDropdown.classList.contains('show')) {
      targetDropdown.classList.remove('show');
    }
    if (targetButton.classList.contains('active')) {
      targetButton.classList.remove('active');
    }
  }
});


// HAMBURGER MENU
const hamburgerButton = document.querySelector('.hamburger');
const hamburgerContent = document.querySelector('#hamburger-content');

//click hamburger button
hamburgerButton.addEventListener("click", e => {
  hamburgerContent.classList.toggle("show");
  hamburgerButton.classList.toggle("active");
})

//clicking away from hamburger menu hides the menu
window.addEventListener('click', e => {
  if (e.target !== hamburgerButton && e.target !== hamburgerContent && !hamburgerContent.contains(e.target)) {
    hamburgerContent.classList.remove("show");
    hamburgerButton.classList.remove("active");
  }
})

//resizing the window hides the menu
window.addEventListener('resize', function(){
  if (hamburgerContent.classList.contains("show")){
    hamburgerContent.classList.remove("show");
  }
  if (hamburgerButton.classList.contains("active")){
    hamburgerButton.classList.remove("active");
  }
});
