(() => {
  const slider = document.querySelector(`.howitworks__slider`);
  // const sliderCaption = slider.querySelector(".slider__caption");

  if (slider) {
    if (!window.isDesktop()) {
      new Swiper(slider, {
        slidesPerView: "auto",
        slidesPerColumn: 1,
        spaceBetween: 0,
        loop: true
      });
    } else {
      return;
    }
  }
})();