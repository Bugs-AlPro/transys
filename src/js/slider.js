var slider = tns({
  container: '.c-list',
  items: 1,
  loop: false,
  mouseDrag: true,
  controls: true,
  controlsText: '  ',
  prevButton: '.prevButton',
  nextButton: '.nextButton',
  navContainer: '.navContainer',
  navPosition: 'botoom',
  responsive: {
    200: {
      items: 1
    },
    577: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    }
  }
});