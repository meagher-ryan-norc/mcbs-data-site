const chartDropdownButton = document.querySelector('.chart-dropdown__title');
const chartDropdownContent = document.querySelector('.chart-dropdown__content');


chartDropdownButton.addEventListener('click', e => {
  chartDropdownContent.classList.toggle("show");
  chartDropdownButton.classList.toggle("active");
});

window.addEventListener('click', e => {
  if (e.target !== chartDropdownButton && e.target !== chartDropdownContent && !chartDropdownContent.contains(e.target)) {
    chartDropdownContent.classList.remove("show");
    chartDropdownButton.classList.remove("active");
  }
})
