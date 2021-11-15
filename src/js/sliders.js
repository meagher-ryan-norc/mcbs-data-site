// CAROUSEL SLIDERS (splide)

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
}

// DOCUMENT LOAD INIT
document.addEventListener('DOMContentLoaded', function(){
  if (document.querySelector('.splide')) {
    initSplide();
  }
});
