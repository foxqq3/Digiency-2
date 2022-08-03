import './styles/style.scss';

//horicontal scroll
document
  .getElementById('horizontal-scroller')
  .addEventListener('wheel', function (event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
      var modifier = 1;
      // иные режимы возможны в Firefox
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
      var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
      var modifier = this.clientHeight;
    }
    if (event.deltaY != 0) {
      // замена вертикальной прокрутки горизонтальной
      this.scrollLeft += modifier * event.deltaY;
      event.preventDefault();
    }
  });

//theme switcher
let page = document.querySelector('body');
let themeButton = document.querySelector('.header__theme-switcher');

themeButton.onclick = function () {
  page.classList.toggle('dark-theme');
};

// footer form
const footerForm = document.querySelector('.email-sender');
footerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log('submit footer form');
});

const contactUsForm = document.querySelector(
  '.send-form-sample__forms-contaner'
);

function scrollToContactUsForm() {
  contactUsForm.scrollIntoView({ behavior: 'smooth' });
}

const contactUsButtons = document.querySelectorAll('.contact-us-button-js');

contactUsButtons.forEach((item) => {
  item.addEventListener('click', () => {
    scrollToContactUsForm();
  });
});
