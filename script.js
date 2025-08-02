const cardContainer = document.querySelector('.card-container');
const cards = Array.from(document.querySelectorAll('.card'));
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');

let currentIndex = 0;

function updateCards() {
  cards.forEach((card, index) => {
    card.style.zIndex = cards.length - index;

    if (index < currentIndex) {
      card.style.opacity = 0;
      card.style.transform = `translateX(-200%) scale(0.8)`;
    } else if (index === currentIndex) {
      card.style.opacity = 1;
      card.style.transform = `translateX(0) scale(1)`;
    } else {
      card.style.opacity = 1;
      card.style.transform = `translateY(${10 * (index - currentIndex)}px) scale(${1 - 0.05 * (index - currentIndex)})`;
    }
  });
}

btnRight.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCards();
  }
});

btnLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCards();
  }
});

updateCards();
