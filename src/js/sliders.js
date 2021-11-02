// CAROUSEL SLIDERS (splide)
function setPanels () {
  const infoPanels = document.querySelectorAll('.slide__info');

  for (let i = 0; i < infoPanels.length; i++){
    setPanelHeight(infoPanels[i]);
  }
}

// set panel bottom height
function setPanelHeight(element) {
  const panelHeight = element.clientHeight;
  const panelLabel = element.firstElementChild;
  const labelHeight = panelLabel.clientHeight;
  const bottomMeasure = (panelHeight - labelHeight - 23) * -1;
  element.style.bottom = `${bottomMeasure}px`;
}

// add sliders to page
function initSplide() {
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

//add mouseover events to panels
function initPanels() {
  const panelLinks = document.querySelectorAll('.slide__link');
  for (let i = 0; i < panelLinks.length; i++){
    const panel = panelLinks[i].firstElementChild;
    panelLinks[i].onmouseover = function(){
      panel.style.bottom = '0px';
    };
    panelLinks[i].onmouseout = function(){
      setPanelHeight(panel);
    };
    panelLinks[i].onfocus = function(){
      panel.style.bottom = '0px';
    }
    panelLinks[i].onblur = function(){
      setPanelHeight(panel);
    };
  }
}

// DOCUMENT LOAD INIT
document.addEventListener('DOMContentLoaded', function(){
  if (document.querySelector('.splide')) {
    initSplide();
    initPanels();
  }
})

// RESIZE WINDOW EVENT
window.addEventListener('resize', function(){
  if (document.querySelector('.splide')) {
    setPanels();
  }
})
