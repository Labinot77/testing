  const track = document.querySelector('.carousel-track');
  const cards = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-btn.next');
  const prevButton = document.querySelector('.carousel-btn.prev');

  let index = 0;
  const cardsPerView = 3;

  function updateCarousel() {
    const offset = index * (track.children[0].getBoundingClientRect().width + 24); // 24px gap
    track.style.transform = `translateX(-${offset}px)`;
  }

  nextButton.addEventListener('click', () => {
    if (index < cards.length - cardsPerView) {
      index++;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
