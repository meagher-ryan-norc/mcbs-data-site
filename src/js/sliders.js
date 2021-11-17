// CAROUSEL SLIDERS (splide)

// add sliders to page
function initSplide() {
  const sliders = document.getElementsByClassName('splide');
  for (let i = 0; i < sliders.length; i++) {
    new Splide(sliders[i], {
      type: 'loop',
      pagination: false,
      keyboard: 'focused',
      breakpoints: {
        2400: {
          padding: { left: 0, right: '2rem' },
          autoWidth: true,
          perPage: 3,
          perMove: 1
        },
        999: {
          padding: { left: 0, right: 0},
          perPage: 2,
          perMove: 1,
          mediaQuery: 'max'
        },
        740: {
          perPage: 1,
          perMove: 1,
          autoWidth: true,
          padding: '4rem',
          focus: 'center',
        }
      }
    }).mount();
  }
}

// DOCUMENT LOAD INIT
document.addEventListener('DOMContentLoaded', function(){
  if (document.querySelector('.splide')) {
    initSplide();
  }
});
