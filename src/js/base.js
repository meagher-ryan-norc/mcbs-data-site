function setPanels () {
  const infoPanels = document.querySelectorAll('.slide__info');

  for (let i = 0; i < infoPanels.length; i++){
    setHeight(infoPanels[i]);
  }
}

function setHeight(element) {
  const panelHeight = element.clientHeight;
  const panelLabel = element.firstElementChild;
  const labelHeight = panelLabel.clientHeight;
  const bottomMeasure = (panelHeight - labelHeight - 23) * -1;
  element.style.bottom = `${bottomMeasure}px`;
}

document.addEventListener('DOMContentLoaded', function(){
  if (document.querySelector('.splide')) {
    const sliders = document.getElementsByClassName('splide');
    for (let i = 0; i < sliders.length; i++) {
      new Splide(sliders[i], {
        type: 'loop',
        padding: { left: 0, right: '2rem' },
        perPage: 3,
        perMove: 1,
        pagination: false,
        autoWidth: true,
        gap: '2rem',
      }).mount();
    }
    setPanels();
  }

  const panelLinks = document.querySelectorAll('.slide__link');
  for (let i = 0; i < panelLinks.length; i++){
    const panel = panelLinks[i].firstElementChild;
    panelLinks[i].onmouseover = function(){
      panel.style.bottom = '0px';
    };
    panelLinks[i].onmouseout = function(){
      setHeight(panel);
    };
  }
})

window.addEventListener('resize', function(){
  setPanels();
})

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
