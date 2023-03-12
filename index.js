const header = document.querySelector('.header');
const scroll = document.querySelector('.scrolle');
const navBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.closeModalBtn')
const contactModal = document.querySelector('.contact-model');
const overlay = document.querySelector('.overlay');
const navMobile = document.querySelector('.navbar-toggle-label');
const info = document.querySelector('.info');

// open and close model
navBtn.addEventListener('click', function() {
  contactModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
const closeModalFn = function () {
  // e.preventDefault();
  contactModal.classList.add('hidden');
  overlay.classList.add('hidden');
}
// the btn to close modal
closeBtn.addEventListener('click', closeModalFn);

navMobile.addEventListener('click', () => {
  info.classList.toggle('h1-nav');
})
// scrlle btn to the top
scroll.addEventListener('click', function (e) {
  const s1coords = header.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  // section1.scrollIntoView({ behavior: 'smooth' });
});

// scrolle in the page
document.querySelectorAll('.a-link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  });
});

// next slide
const slider = function () {
  const slides = document.querySelectorAll('.sliders');
  const btnLeft = document.querySelector('.slider-btn-left');
  const btnRight = document.querySelector('.slider-btn-right');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
};
slider();
// lazy load for the page
const allSections = document.querySelectorAll('.content');
const customeStories = document.querySelectorAll('.custome-stories')
const subscribe = document.querySelectorAll('.subscribe')

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});
customeStories.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});
subscribe.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});
