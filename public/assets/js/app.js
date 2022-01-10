(function($) {
    "use strict";
    /*  Preloader */
  $(window).on('load',function(){
    var preLoder = $(".preloader");         
    preLoder.fadeOut(1500);
  });  
  /*  Fixed Header*/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $(".header-area").addClass("header-sticky");
    } else {
        $(".header-area").removeClass("header-sticky");  
    }
  });   
   /*  Mobile Menu */
   $(".mobile-toggle").on("click", function () {
    $(this).toggleClass("open");
    $(".mobile-menu").slideToggle();     
  }); 
  $(".toggle").on("click", function () { 
    if ($(this).text().includes("-")) { 
      $(this).text("+")
    } else { $(this).text("-")}  
    $(this).parent().siblings(".submenu").slideToggle();          
  });                                              
  /*  Hero Slider */

  if ($('.swiper-container .swiper-slide').length > 1) {
    var swiper = new Swiper(".hero-slider", {
      slidesPerView: 1,
      spaceBetween: 40, 
      speed: 1000, 
      zoom : true, 
      watchOverflow: true,
      autoplayDisableOnInteraction: false,
      paginationClickable: true,
      keyboardControl: true,
      mousewheelControl: true, 
      autoplay:true, 
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    }); 
  }
  /* Product Slider */
  var swiper = new Swiper(".product-slider", {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 1000,  
    zoom : true,  
    watchOverflow: true,
    autoplayDisableOnInteraction: false,
    paginationClickable: true,
    keyboardControl: true,
    mousewheelControl: true, 
    autoplay:true, 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, 
      breakpoints: {
      0: {
        slidesPerView: 1, 
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3, 
      },
      1280: {  
        slidesPerView: 4,  
      }
    }
  });
   /* Cursor Js */
  var cursor = $(".cursor-direction");
  $(document).mousemove(function(e) {
      cursor.css({
          top: e.clientY - cursor.height() / 2,
          left: e.clientX - cursor.width() / 2
      });
  });
  $(document).mouseleave(function() {
          cursor.css({
              opacity: "0"
          });
      }).mouseenter(function() {
          cursor.css({
              opacity: "1"
          });
    });
    $(document).mousedown(function() {
      cursor.css({
          transform: "scale(.2)"
      });
  }).mouseup(function() { 
      cursor.css({
          transform: "scale(1)" 
      });
  }); 
  $("a,button,input").mouseenter(function() {
          cursor.css({
              transform: "scale(3.2)"
          });
      }).mouseleave(function() {
          cursor.css({
              transform: "scale(1)"
          });
  });
  /*  Append Shop  */
  $('.product-infinite').infiniteScroll({
    path: function() {
      if ( this.loadCount < 4 ) { 
        let nextIndex = this.loadCount + 2;
        return `product/product-${nextIndex}.html`;
      }
    }, 
    append: '.product-box',
    button: '.load-more-btn',  
    checkLastPage: false, 
    scrollThreshold: false,
    status: '.page-load-status',  
    history: false,
  }); 
  $('.blog-infinite').infiniteScroll({
    path: function() {
      if ( this.loadCount < 4 ) { 
        let nextIndex = this.loadCount + 2;
        return `blog/blog-${nextIndex}.html`;
      }
    }, 
    append: '.blog-box',
    button: '.load-more-btn',  
    checkLastPage: false, 
    scrollThreshold: false,
    status: '.page-load-status',  
    history: false,
  }); 
 /* Fitvids Js */
 fitvids('.container'); 
/*  current date show  */
$('#spanYear').html(new Date().getFullYear()); 
/*  Tabs nav  */
$('.tabs-nav a').click(function() {
  $('.tabs-nav li').removeClass('active');
  $(this).parent().addClass('active');
  let currentTab = $(this).attr('href');
  $('.tabs-content > .tabs-item').hide();
  $(currentTab).show();
  return false; 
});
/*  Modal-popup  */
$('.popup-modal').magnificPopup({
  type: 'inline',
  closeBtnInside: true,
  preloader: false,
  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-zoom-in'
});
/*  Image-popup  */
$('.image-popup').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true   
  }, 
  closeOnContentClick: true,
  image: { 
    verticalFit: true
  },
  zoom: {
    enabled: true,
    duration: 300 
  }
});
  /* Aos Js */
  AOS.init({
    offset: 0, 
    delay: 0,  
    duration: 1000,             
    easing: 'ease', 
    once: true,
    mirror: true,
    anchorPlacement: 'top-center',
});
/*  Video-popup  */
$('.video-popup').magnificPopup({
  type: 'iframe',
  iframe: {
      patterns: {
          youtube: {
              index: 'youtube.com/',
              id: 'v=',
              src: 'http://www.youtube.com/embed/%id%?autoplay=1'
          },
      },
      srcAction: 'iframe_src',
  }
});
/*  js countdown  */     
$('.countdown-time').countdown('2023/2/10', function(event) { 
  var $this = $(this).html(event.strftime(''
    + '<p class="text-white leading-4 font-opens font-medium"><span>%d</span><br><span class="text-sm">Days</span></p>'
    + '<p class="text-white leading-4 font-opens font-medium"><span>%H</span><br><span class="text-sm">Hrs</span></p> '
    + '<p class="text-white leading-4 font-opens font-medium"><span>%M</span><br><span class="text-sm">Min</span></p> '
    + '<p class="text-white leading-4 font-opens font-medium"><span>%S</span><br><span class="text-sm">Sec</span></p>'));
}); 
$('.countdown-time2').countdown('2023/7/10', function(event) { 
  var $this = $(this).html(event.strftime(''
    + '<p class="text-white leading-4 font-opens font-medium"><span>%d</span><br><span class="text-sm">Days</span></p>'
    + '<p class="text-white leading-4 font-opens font-medium"><span>%H</span><br><span class="text-sm">Hrs</span></p> '
    + '<p class="text-white leading-4 font-opens font-medium"><span>%M</span><br><span class="text-sm">Min</span></p> '
    + '<p class="text-white leading-4 font-opens font-medium"><span>%S</span><br><span class="text-sm">Sec</span></p>'));
}); 
$('.countdown-time3').countdown('2023/5/10', function(event) { 
  var $this = $(this).html(event.strftime(''
    + '<p class="text-white leading-4 font-opens font-medium"><span>%d</span><br><span class="text-sm">Days</span></p>'
    + '<p class="text-white leading-4 font-opens font-medium"><span>%H</span><br><span class="text-sm">Hrs</span></p> '
    + '<p class="text-white leading-4 font-opens font-medium"><span>%M</span><br><span class="text-sm">Min</span></p> '
    + '<p class="text-white leading-4 font-opens font-medium"><span>%S</span><br><span class="text-sm">Sec</span></p>'));
}); 
$('.countdown-time4').countdown('2023/9/10', function(event) { 
  var $this = $(this).html(event.strftime(''
    + '<p class="text-white leading-4 font-opens font-medium"><span>%d</span><br><span class="text-sm">Days</span></p>'
    + '<p class="text-white leading-4 font-opens font-medium"><span>%H</span><br><span class="text-sm">Hrs</span></p> '
    + '<p class="text-white leading-4 font-opens font-medium"><span>%M</span><br><span class="text-sm">Min</span></p> '
    + '<p class="text-white leading-4 font-opens font-medium"><span>%S</span><br><span class="text-sm">Sec</span></p>'));
}); 
 
$('.countdown-time5').countdown('2023/9/10', function(event) { 
  var $this = $(this).html(event.strftime(''
    + '<p class="text-white leading-4 font-opens font-medium"><span>%d</span><br><span class="text-sm">Days</span></p>'
    + '<p class="text-white leading-4 font-opens font-medium"><span>%H</span><br><span class="text-sm">Hrs</span></p> '
    + '<p class="text-white leading-4 font-opens font-medium"><span>%M</span><br><span class="text-sm">Min</span></p> '
    + '<p class="text-white leading-4 font-opens font-medium"><span>%S</span><br><span class="text-sm">Sec</span></p>'));
}); 
 
$('.countdown-time6').countdown('2023/9/10', function(event) { 
  var $this = $(this).html(event.strftime(''
    + '<p class="text-white leading-4 font-opens font-medium"><span>%d</span><br><span class="text-sm">Days</span></p>'
    + '<p class="text-white leading-4 font-opens font-medium"><span>%H</span><br><span class="text-sm">Hrs</span></p> '
    + '<p class="text-white leading-4 font-opens font-medium"><span>%M</span><br><span class="text-sm">Min</span></p> '
    + '<p class="text-white leading-4 font-opens font-medium"><span>%S</span><br><span class="text-sm">Sec</span></p>'));
}); 

$('.countdown-time7').countdown('2022/12/10', function(event) { 
  var $this = $(this).html(event.strftime(''
  + '<div class="p-3 flex items-center justify-center border-gradient"><p class="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500"><span class="font-bold text-blueGray-900">%d</span><br><span class="text-sm font-light">Days</span></p></div>'
  + '<div class="p-3 flex items-center justify-center border-gradient"><p class="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500"><span class="font-bold text-blueGray-900">%H</span><br><span class="text-sm font-light">Hrs</span></p></div> '
  + '<div class="p-3 flex items-center justify-center border-gradient"><p class="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500"><span class="font-bold text-blueGray-900">%M</span><br><span class="text-sm font-light">Min</span></p></div> '
  + '<div class="p-3 flex items-center justify-center border-gradient"><p class="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500"><span class="font-bold text-blueGray-900">%S</span><br><span class="text-sm font-light">Sec</span></p></div>'));
});  
$('.countdown-time8').countdown('2022/12/10', function(event) { 
  var $this = $(this).html(event.strftime('' 
    + '<div class="p-3 flex items-center justify-center border-gradient"><p class="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500"><span class="font-bold text-blueGray-900">%d</span><br><span class="text-sm font-light">Days</span></p></div>'
    + '<div class="p-3 flex items-center justify-center border-gradient"><p class="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500"><span class="font-bold text-blueGray-900">%H</span><br><span class="text-sm font-light">Hrs</span></p></div> '
    + '<div class="p-3 flex items-center justify-center border-gradient"><p class="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500"><span class="font-bold text-blueGray-900">%M</span><br><span class="text-sm font-light">Min</span></p></div> '
    + '<div class="p-3 flex items-center justify-center border-gradient"><p class="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500"><span class="font-bold text-blueGray-900">%S</span><br><span class="text-sm font-light">Sec</span></p></div>'));
});  
$('.countdown-time9').countdown('2022/12/10', function(event) { 
  var $this = $(this).html(event.strftime(''
    + '<span class="ml-2">%d</span><span class="mr-2">d</span>'
    + '<span>%H</span><span class="mr-2">h</span>'
    + '<span>%M</span><span class="mr-2">m</span>'
    + '<span>%S</span><span class="mr-2">s</span>'));
});   
  /*  Nice results */
   $(document).ready(function() {
    $('.multiple-select').niceSelect();   
  });
   $(document).ready(function() {
    $('.multiple-select2').niceSelect();  
  });
  /*  Scrolltop  */
  function scrolltop(){   
    var wind = $(window);
    wind.on("scroll" ,function(){ 
        var scrollTop = wind.scrollTop();
        if(scrollTop >=500) {
            $(".footer-back").addClass("show");
        } else {
            $(".footer-back").removeClass("show");
        } 
        
  });
  $(".footer-back").on("click", function(){
    var bodyTop =  $("html, body"); 
      bodyTop.animate({scrollTop: 0},1000,"easeOutCubic");
  }); 
  }  
  scrolltop();
 
  
}(jQuery));  