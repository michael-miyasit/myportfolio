'use strict';


{// スライダー
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.getElementById('ul');
  const dots = [] // ボタン
  const slides = ul.children;

  let currentIndex = 0;

  function setupDots() {// ボタンを動的に生成する
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;// i にはボタンの番号が入っている
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('nav').appendChild(button);
    }
    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  function updateButtons() {// スライドボタンの有無
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }
  updateButtons();
  setupDots();

  function moveSlides() {
    ul.style.transform = `translateX(${-100 * currentIndex}%)`;// ←別の方法あり    
  }

  next.addEventListener('click', () => {
    currentIndex++;
    updateDots();    
    updateButtons();
    moveSlides();
  });
  prev.addEventListener('click', () => {
    currentIndex--;
    updateDots();
    updateButtons();
    moveSlides();
  });

}