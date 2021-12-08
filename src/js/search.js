// SEARCH

// constants
const searchContainer = document.querySelector(".searchbox");
const inputBox = searchContainer.querySelector("input");
const autocompleteBox = searchContainer.querySelector(".searchbox__autocomplete");
const resultNumber = document.querySelector('#search-number');

// NOTE: const searchArr is generated from searchData.liquid(js) on build by eleventy

searchContainer.addEventListener('submit', event => {
  event.preventDefault();
  const searchStr = event.target[0].value.toLowerCase();
  const autocompleteFocus = autocompleteBox.querySelector('.ac-focused');

  if (autocompleteFocus) {
    runSearch((autocompleteFocus.innerText || autocompleteFocus.textContent).toLowerCase());
  } else {
    runSearch(searchStr);
  }
})

function runSearch(str) {
  if (str.length > 0){
    const filteredSearch = searchArr.filter((page) => {
      return (page.title.toLowerCase().includes(str) ||
      page.desc.toLowerCase().includes(str) ||
      page.keywords.toLowerCase().includes(str))
    })
    if (filteredSearch.length === 0) {
      resultNumber.innerHTML = `<p role='alert'>Sorry, no results could be found for your search. Please try another search, or explore the MCBS public use files, questionnaires, and data user documentation to see if MCBS data on the topic are available outside of the curated MCBS Interactives Data Tools.</p>
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
  else {
    resultNumber.innerHTML = `<p role='alert'>You must enter at least one character to search. Please try again.</p>`
    resultNumber.style.display = "block";
    renderSearch(undefined);
  }
}

// render search results
function renderSearch(resultArr) {
  if (resultArr === undefined) {
    document.querySelector(".search-results__list").innerHTML = "";
  } else {
    const htmlString = resultArr.map((result) => {
      return `
      <li class='search-results__list__item'>
        <a href='${result.url}' target='_blank'>
          <h3>${result.title}</h3>
          <p>${result.desc}</p>
        </a>
      </li>
      `;
    }).join('');

    document.querySelector(".search-results__list").innerHTML = htmlString;
  }
}

// search autocomplete
const allKeywords = searchArr.reduce((acc, el) => {
  return acc.concat(el.keywords.split(', '));
}, []);
const uniqueKeywords = Array.from(new Set(allKeywords)).sort();

inputBox.onkeyup = (e) => {
  const tempAutocompleteFocus = autocompleteBox.querySelector('.ac-focused');

  if (e.key !== "Enter" && e.key !== "ArrowDown" && e.key !== "ArrowUp"){
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
    }
  }

  if (e.key === "Enter") {
    searchContainer.classList.remove('active');
  }

  if (e.key === "ArrowDown") {
    if (tempAutocompleteFocus) {
      tempAutocompleteFocus.nextSibling.classList.add("ac-focused");
      tempAutocompleteFocus.classList.remove("ac-focused");
    } else {
      autocompleteBox.firstChild.classList.add("ac-focused");
    }
  }

  if (e.key === "ArrowUp") {
    if (tempAutocompleteFocus) {
      tempAutocompleteFocus.classList.remove("ac-focused");
      tempAutocompleteFocus.previousSibling.classList.add("ac-focused");
    }
  }
}

function selectAutocomplete(element) {
  const selectData = element.textContent;
  inputBox.value = selectData;
  document.querySelector('.ac-focused').classList.remove('ac-focused');
  document.querySelector('.searchbox').dispatchEvent(new Event('submit'));
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
