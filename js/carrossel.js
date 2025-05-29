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
  
  // Galeria Modal
  document.querySelectorAll('#carouselTrack img').forEach(img => {
    img.addEventListener('click', function() {
      const modal = document.getElementById('modalGaleria');
      const mainImg = modal.querySelector('.modal-img');
      const thumbs = modal.querySelector('#modal-thumbs');
      const gallery = this.dataset.gallery ? this.dataset.gallery.split(',') : [this.src];
  
      modal.style.display = 'flex';
      mainImg.src = this.src;
      mainImg.alt = this.alt;
      modal.querySelector('#modal-title').textContent = this.dataset.title || '';
      modal.querySelector('#modal-desc').textContent = this.dataset.desc || '';
  
      // Limpa miniaturas
      thumbs.innerHTML = '';
      gallery.forEach(src => {
        const thumb = document.createElement('img');
        thumb.src = src.trim();
        thumb.style.height = '60px';
        thumb.style.cursor = 'pointer';
        thumb.style.borderRadius = '6px';
        thumb.style.border = '2px solid #fff';
        thumb.onclick = () => {
          mainImg.src = src.trim();
        };
        thumbs.appendChild(thumb);
      });
    });
  });
  document.querySelector('.close-modal').onclick = function() {
    document.getElementById('modalGaleria').style.display = 'none';
  };
  document.getElementById('modalGaleria').onclick = function(e) {
    if (e.target === this) this.style.display = 'none';
  };