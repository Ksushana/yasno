(() => {
  const giftSlider = document.querySelector(`.gift__slider`);

  if (giftSlider) {
    if (!window.isDesktop()) {
      new Swiper(giftSlider, {
        slidesPerView: "auto",
        slidesPerColumn: 1,
        spaceBetween: 0,
        loop: false
      });
    } else {
      return;
    }
  }
})();
