// SEARCH
// array searchArr is generated from searchData.liquid(js) on build by eleventy
if (document.querySelector('.search')) {
  const searchForm = document.querySelector('.search');
  const resultNumber = document.querySelector('#search-number');

  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchStr = event.target[0].value.toLowerCase();

    if (searchStr.length > 0){
      const filteredSearch = searchArr.filter((page) => {
        return (page.title.toLowerCase().includes(searchStr) ||
        page.desc.toLowerCase().includes(searchStr) ||
        page.keywords.toLowerCase().includes(searchStr))
      })
      if (filteredSearch.length === 0) {
        resultNumber.innerHTML = `<p>Sorry, no results could be found for your search. Please try another search, or explore the MCBS public use files, questionnaires, and data user documentation to see if MCBS data on the topic are available outside of the curated MCBS Interactives Data Tools.</p>
        <p><a href='https://www.norc.org/Research/Projects/Pages/the-medicare-current-beneficiary-survey-.aspx'>More on the MCBS</a></p>`;
      } else if (filteredSearch.length === 1) {
        resultNumber.innerHTML = "<p>Your search returned 1 result.</p>";
      } else {
        resultNumber.innerHTML = `<p>Your search returned ${filteredSearch.length} results.</p>`
      }
      resultNumber.style.display = "block";
      renderSearch(filteredSearch);
      searchContainer.classList.remove('active');
    }
  })
}

// render search results
function renderSearch(resultArr) {
  const htmlString = resultArr.map((result) => {
    return `
    <li class='search-results__list__item'>
      <a href='${result.url}' target='_blank'>
        <h4>${result.title}</h4>
        <p>${result.desc}</p>
      </a>
    </li>
    `;
  }).join('');

  document.querySelector(".search-results__list").innerHTML = htmlString;
}

// search autocomplete
const allKeywords = searchArr.reduce((acc, el) => {
  return acc.concat(el.keywords.split(', '));
}, []);
const uniqueKeywords = Array.from(new Set(allKeywords)).sort();

const searchContainer = document.querySelector(".search");
const inputBox = searchContainer.querySelector("input");
const autocompleteBox = searchContainer.querySelector(".search__autocomplete");

inputBox.onkeyup = (e) => {
  if (e.key != "Enter"){
    const userInput = e.target.value;
    let filteredArr = [];
    if (userInput) {
      filteredArr = uniqueKeywords.filter((keyword) => {
        return keyword.toLowerCase().startsWith(userInput.toLowerCase());
      }).map((keyword) => {
        const keywordEl = `<li>` + keyword + `</li>`;
        return keywordEl;
      });
      searchContainer.classList.add('active');
      renderAutocomplete(filteredArr, autocompleteBox);
      const autocompleteList = autocompleteBox.querySelectorAll('li');
      for (let i = 0; i < autocompleteList.length; i++){
        autocompleteList[i].setAttribute("onclick", "selectAutocomplete(this)");
      }
    } else {
      searchContainer.classList.remove('active');
    }
  }
}

function selectAutocomplete(element) {
  const selectData = element.textContent;
  inputBox.value = selectData;
  document.querySelector('.search').dispatchEvent(new Event('submit'));
  searchContainer.classList.remove('active');
}

function renderAutocomplete(list, container){
  let listData;
  if (!list.length){
    listData = `<li>` + inputBox.value + `</li>`
  } else {
    listData = list.join('');
  }
  container.innerHTML = listData;
}
