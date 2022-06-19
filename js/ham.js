'strict';

const btn = $('#js-btn'); 
const nav = $('#js-wrap');
const overlay = $('#js-overlay');
btn.on('click', function () {
    btn.toggleClass('active');
    nav.toggleClass('active');
    overlay.toggleClass('active');
    console.log('dddd');
});

let modal = document.getElementById('js-overlay');

modal.addEventListener('click', (event) => {
  if(event.target.closest('#js-wrap') === null) {
    btn.removeClass('active');
    nav.removeClass('active');
    overlay.removeClass('active');
  }
});