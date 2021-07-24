var slider = tns({
  container: '.g-preview',
  // items: 1,
  // loop: true,
  mouseDrag: true,
  controls: false,
  nav: false,
  fixedWidth: 285,
  responsive: {
    200: {
      fixedWidth: 183
    },
    768: {
      fixedWidth: 244
    },
    992: {
      fixedWidth: 285
    },
    1800: {
      fixedWidth: 'auto'
    }
  }
});