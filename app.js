const darkMode = document.getElementById('dark-mode');
const currentColor = document.getElementById('current-color');
const copyIcon = document.getElementById('copy-icon');
const currentYear = document.querySelector('.current-year');
const body = document.body;

darkMode.addEventListener('click', () => {
  darkMode.classList.toggle('fa-sun');
  darkMode.classList.toggle('fa-moon');
  body.classList.toggle('dark-mode');
  currentColor.classList.toggle('text-white');
  copyIcon.classList.toggle('text-gray');
});

// Render current year in HTML
const date = new Date();
let year = date.getFullYear();
currentYear.innerHTML = year;
