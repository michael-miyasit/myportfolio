'strict';


{
  {// スライダー
    $('.worksWrapper_slider').slick({
      arrows: true,
      slidesToShow:3,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,

      prevArrow:'<div class="prev"><i class="fa-solid fa-chevron-left"></i></div>',
      nextArrow:'<div class="next"><i class="fa-solid fa-chevron-right"></i></div>'
    }); 
  };

  {// ヘッダー
    window.addEventListener("scroll", function () {
      // ヘッダーを変数の中に格納する
      const header = document.getElementById("header");
      // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
      header.classList.toggle("scroll-nav", window.scrollY > 500);
    });
  };

}; 