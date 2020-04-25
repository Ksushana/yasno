(() => {
  const slider = document.querySelector(`.howitworks__slider`);

  if (slider) {
    if (!window.isDesktop()) {
      new Swiper(slider, {
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