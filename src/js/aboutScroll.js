//Scrolling from link list
const scrollLinks = document.querySelectorAll('.about__nav__link--scroll');

for(let i = 0; i < scrollLinks.length; i++){
  scrollLinks[i].addEventListener('click', function(event){
    event.preventDefault();
    const anchorText = event.target.href.split('#')[1];
    scrollToAnchor(anchorText);
  });
}

function scrollToAnchor(id){
  const anchor = document.getElementById(id);
  anchor.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
