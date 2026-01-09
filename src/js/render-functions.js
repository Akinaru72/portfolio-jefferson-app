const swiperWrapperRev = document.querySelector('.swiper-wrapper.reviews');

export const createSlideCard = cards => {
  if (!cards.length) {
    swiperWrapperRev.innerHTML = '<p class="reviews-empty">Not found</p>';
    return;
  }
  const cardHTML = cards

    .map(
      card =>
        `
      <div class="swiper-slide review">
      <img class="review-img" src="${card.avatar_url}" alt="${card.author}" />
      <h3 class="title-third">${card.author}</h3>
      <p class="main-text">${card.review}</p>
      </div>
      `
    )
    .join(' ');

  swiperWrapperRev.innerHTML = cardHTML;
};
