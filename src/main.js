import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import { getFetchReviews, postFetchRequest } from './js/api';
import { createSlideCard } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const openBtn = document.querySelector('.header-open-button');
const closeBtn = document.querySelector('.close-modal-icon');
const menuBtn = document.querySelector('.header-menu-button');
const nav = document.querySelector('.header-nav');
const modWindow = document.querySelector('.modal-window');
const closeLinkWin = document.querySelectorAll('.modal-menu, .modal-menu-wtg');
const closeLinkNav = document.querySelector('.modal-menu-link');
const formEl = document.querySelector('.wt-feedback-form');
const closeBtnWt = document.querySelector('.wt-modal-close-button');
const modalWT = document.querySelector('.wt-modal-backdrop');
const modalWTtitle = document.querySelector('.wt-modal-title');
const modalWTmessage = document.querySelector('.wt-modal-message');

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

closeBtnWt.addEventListener('click', closeModalWT);

function onEscClose(e) {
  if (e.key === 'Escape') {
    closeModalWT();
  }
}

modalWT.addEventListener('click', e => {
  if (e.target === modalWT) {
    closeModalWT();
  }
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

const revSwiper = new Swiper('.swiper.reviews', {
  loop: false,
  speed: 400,
  slidesPerGroup: 1,
  allowTouchMove: true,
  spaceBetween: 16,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1440: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const getInfoReviews = async () => {
  try {
    const response = await getFetchReviews();

    console.log(response.data);

    createSlideCard(response.data);
  } catch (err) {
    console.log(err);
  }
};

getInfoReviews();

function openModalWT(data) {
  modalWT.classList.add('is-open');
  document.body.classList.add('no-scroll');
  modalWTmessage.textContent = data.message;
  modalWTtitle.textContent = data.title;
  document.addEventListener('keydown', onEscClose);
}

function closeModalWT() {
  modalWT.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  modalWTmessage.textContent = '';
  modalWTtitle.textContent = '';
  document.removeEventListener('keydown', onEscClose);
}

const onSubmitForm = async event => {
  event.preventDefault();

  const form = event.target;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const email = event.target.email.value.trim();
  const comment = event.target.message.value.trim();

  const requestData = {
    email,
    comment,
  };

  if (comment.length < 5) {
    iziToast.error({
      message: `❌ comment is too short`,
      position: 'topRight',
      timeout: 4000,
    });
    return;
  }

  try {
    const response = await postFetchRequest(requestData);
    console.log(response.data.title);
    console.log(response.data.message);

    // alert('Заявка успішно відправлена!');

    openModalWT(response.data);
    formEl.reset();
  } catch (err) {
    console.log(err);
    iziToast.error({
      message: `❌ Error, try again`,
      position: 'topRight',
      timeout: 4000,
    });
  }
};

formEl.addEventListener('submit', onSubmitForm);

document.querySelector('.am-button-next').addEventListener('click', () => {
  amSwiper.slideNext();
});
