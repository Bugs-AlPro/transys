var slider = tns({
  container: '.g-preview',
  // items: 1,
  // loop: true,
  mouseDrag: true,
  controls: false,
  nav: false,
  fixedWidth: 285,
  autoplay: true,
  // autoplayTimeout: 2000,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
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
      fixedWidth: 360
    }
  }
});
var slider = tns({
  container: '.r-b-slide__list',
  // items: 1,
  loop: true,
  mouseDrag: true,
  controls: false,
  nav: false,
  edgePadding: 30,
  autoplay: true,
  // autoplayTimeout: 2000,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  responsive: {
    200: {
      items: 2
    },
    470: {
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 5
    },
    1440: {
      items: 6
    },
    1800: {
      items: 7
    }
  }
});
var slider = tns({
  container: '.r-t-slide__list',
  mouseDrag: true,
  controls: false,
  nav: false,
  items: 1,
  center: true,
  fixedWidth: 285,
  startIndex: 1,
  loop: true,
  responsive: {
    1440: {
      fixedWidth: 350
    },
    1800: {
      fixedWidth: 392
    }
  }
});