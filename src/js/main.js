document.addEventListener('DOMContentLoaded', function () {

  new SimpleBar(document.querySelector('.header__bottom-hidden'));

  new Swiper('.hero__slider', {
    loop: true,
    speed: 600,
    effect: "fade",
    allowTouchMove: false,
    autoplay: {
      delay: 5000,
    },
  });

  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

})
