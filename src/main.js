import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
const openBtn = document.querySelector('.header-open-button');
const closeBtn = document.querySelector('.close-modal-icon');
const menuBtn = document.querySelector('.header-menu-button');
const nav = document.querySelector('.header-nav');
const modWindow = document.querySelector('.modal-window');
const closeLinkWin = document.querySelectorAll('.modal-menu, .modal-menu-wtg');
const closeLinkNav = document.querySelector('.modal-menu-link');
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});
closeLinkNav.addEventListener('click', () => {
  nav.classList.remove('is-open');
});
openBtn.addEventListener('click', () => {
  modWindow.classList.add('is-open');
  document.body.classList.add('no-scroll');
});
closeBtn.addEventListener('click', () => {
  modWindow.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
});
closeLinkWin.forEach(link => {
  link.addEventListener('click', () => {
    modWindow.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });
});

new Accordion('.accordion-container.faq', {
  duration: 300,
  collapse: true,
  showMultiple: false,
});

new Accordion('.accordion-container.am', {
  duration: 500,
  openOnInit: [0],
  collapse: true,
  showMultiple: false,
});

new Swiper('.swiper.projects', {
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});

const amSwiper = new Swiper('.swiper.am', {
  loop: true,
  speed: 400,
  slidesPerGroup: 1,
  allowTouchMove: true,
  spaceBetween: 0,
  slidesPerView: 2,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },

    1440: {
      slidesPerView: 6,
    },
  },
});

function updateRedSlide() {
  amSwiper.slides.forEach(slide => slide.classList.remove('active-red'));
  const firstVisibleIndex = amSwiper.activeIndex;
  amSwiper.slides[firstVisibleIndex].classList.add('active-red');
}

updateRedSlide();
amSwiper.on('slideChange', updateRedSlide);

document.querySelector('.am-button-next').addEventListener('click', () => {
  amSwiper.slideNext();
});
