const toggle  = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

toggle.addEventListener('click', () => {
  navList.classList.add('animate');
  navList.classList.toggle('show');
});

navList.addEventListener('transitionend', () => {
  navList.classList.remove('animate');
});

const dropdownLabel = document.querySelector('.dropdown-label');
const dropdown = document.querySelector('.dropdown');
dropdownLabel.addEventListener('click', e => {
  e.preventDefault();
  dropdown.classList.toggle('show');
});

document.addEventListener('click', e => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});
