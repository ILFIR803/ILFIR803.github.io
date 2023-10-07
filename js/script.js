const humburger = document.querySelector('.humburger'),
      menu = document.querySelector('.menu'),
      closeMenu1 = document.querySelector('.menu__close'),
      closeMenu2 = document.querySelector('.menu__overlay');

humburger.addEventListener('click', () => {
   menu.classList.add('active');
});

closeMenu1.addEventListener('click', () => {
   menu.classList.remove('active');
});
closeMenu2.addEventListener('click', () => {
   menu.classList.remove('active');
});
const counters = document.querySelectorAll('.skills__progress-percent'),
      lines = document.querySelectorAll('.skills__progress-scale');

counters.forEach( (item, i) => {
   lines[i].style.width = item.innerHTML;
});