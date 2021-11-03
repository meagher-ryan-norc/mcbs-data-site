//Scrolling from link list
const scrollLinks = document.querySelectorAll('.about__nav__list__link--scroll');

for(let i = 0; i < scrollLinks.length; i++){
  scrollLinks[i].addEventListener('click', function(event){
    event.preventDefault();
    const anchorText = event.target.href.split('#')[1];
    scrollToAnchor(anchorText);
  });
}

function scrollToAnchor(id){
  const anchor = document.getElementById(id);
  console.log('scrolL!');
  anchor.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

const aboutBtn = document.getElementById('about-btn');
const aboutList = document.querySelector('.about__nav__list');

function aboutDropdown() {
  aboutList.classList.toggle("about__nav__list--show");
}

window.onclick = function(e) {
  if (e.target.id != 'about-btn') {
    if (aboutList.classList.contains('about__nav__list--show')) {
      aboutList.classList.remove('about__nav__list--show');
    }
  }
}
