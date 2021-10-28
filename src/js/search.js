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
        resultNumber.innerText = "Sorry, no results could be found for your search. Please try another search, or explore the MCBS public use files, questionnaires, and data user documentation to see if MCBS data on the topic are available outside of the curated MCBS Interactives Data Tools.";
      } else if (filteredSearch.length === 1) {
        resultNumber.innerText = "Your search returned 1 result.";
      } else {
        resultNumber.innerText = `Your search returned ${filteredSearch.length} results.`
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
      <a href='${result.url}'>
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
    let userInput = e.target.value;
    let filteredArr = [];
    if (userInput) {
      filteredArr = uniqueKeywords.filter((keyword) => {
        return keyword.toLowerCase().startsWith(userInput.toLowerCase());
      }).map((keyword) => {
        const keywordEl = `<li>` + keyword + `</li>`;
        return keywordEl;
      });
      console.log(filteredArr);
      searchContainer.classList.add('active');
      renderAutocomplete(filteredArr, autocompleteBox);
      let autocompleteList = autocompleteBox.querySelectorAll('li');
      for (let i = 0; i < autocompleteList.length; i++){
        autocompleteList[i].setAttribute("onclick", "selectAutocomplete(this)");
      }
    } else {
      searchContainer.classList.remove('active');
    }
  }
}

function selectAutocomplete(element) {
  let selectData = element.textContent;
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
