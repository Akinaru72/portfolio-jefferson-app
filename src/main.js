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

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new Accordion('.accordion-container');
