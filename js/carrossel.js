  let currentSlide = 0;

  function moveSlide(direction) {
    const track = document.getElementById('carouselTrack');
    const slides = track.querySelectorAll('img');
    const slideWidth = slides[0].clientWidth + 20; // inclui margem
    const maxSlide = slides.length - 1;

    currentSlide += direction;

    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide > maxSlide) currentSlide = maxSlide;

    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }