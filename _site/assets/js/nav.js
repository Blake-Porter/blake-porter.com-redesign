const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');
const filterBtns = document.querySelectorAll('.filter-btn');
const guideCards = document.querySelectorAll('.guide-card');

burger.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
});

// Filter functionality for guides
filterBtns.forEach(button => {
  button.addEventListener('click', () => {
    const region = button.getAttribute('data-region');

    guideCards.forEach(card => {
      if (region === 'all' || card.getAttribute('data-region') === region) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
