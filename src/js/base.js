function setPanels () {
  const infoPanels = document.querySelectorAll('.slide__info');

  for (let i = 0; i < infoPanels.length; i++){
    setPanelHeight(infoPanels[i]);
  }
}

//set panel bottom height
function setPanelHeight(element) {
  const panelHeight = element.clientHeight;
  const panelLabel = element.firstElementChild;
  const labelHeight = panelLabel.clientHeight;
  const bottomMeasure = (panelHeight - labelHeight - 23) * -1;
  element.style.bottom = `${bottomMeasure}px`;
}

//add sliders to page
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
  }
}

//search
if (document.querySelector('.search-box')) {
  const searchForm = document.querySelector('.search-box');
  const resultNumber = document.querySelector('#search-number');

  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchStr = event.target[0].value.toLowerCase();

    const filteredSearch = searchArr.filter((page) => {
      return (page.title.toLowerCase().includes(searchStr) ||
      page.desc.toLowerCase().includes(searchStr) ||
      page.keywords.toLowerCase().includes(searchStr))
    })

    if (filteredSearch.length === 0) {
      resultNumber.innerText = "Your search returned no results.";
    } else if (filteredSearch.length === 1) {
      resultNumber.innerText = "Your search returned 1 result.";
    } else {
      resultNumber.innerText = `Your search returned ${filteredSearch.length} results.`
    }

    resultNumber.style.display = "block";

    renderSearch(filteredSearch);
  })
}

//render search results
function renderSearch(resultArr) {
  const htmlString = resultArr.map((result) => {
    return `
    <li class='search-results__list__item'>
      <a href='${result.url}'>
        <h4>${result.title}</h4>
        <p>${result.desc}</p>
      </a>
    </li>
    `;
  }).join('');

  document.querySelector(".search-results__list").innerHTML = htmlString;
}

//document load init
document.addEventListener('DOMContentLoaded', function(){
  if (document.querySelector('.splide')) {
    initSplide();
    initPanels();
  }
})

//resize window event
window.addEventListener('resize', function(){
  if (document.querySelector('.splide')) {
    setPanels();
  }
})

//Dropdown navigation
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
