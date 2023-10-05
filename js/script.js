const humburger = document.querySelector('.humburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
   menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
   menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__progress-percent'),
      lines = document.querySelectorAll('.skills__progress-scale');

counters.forEach( (item, i) => {
   lines[i].style.width = item.innerHTML;
});