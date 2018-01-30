(function ($, Drupal, window, document) {
  
    Drupal.behaviors.yunokiaccountingSlickConfig = {
      attach: function (context, settings) {
  
        $(".view-slideshow .view-content").slick({
          dots: true,
          infinite: true,
          speed: 2000,
          arrows: false,
          fade: true,
          cssEase: 'linear',
          focusOnSelect: true,
          autoplay: true,
          autoplaySpeed: 5000
        });
      }
    };
  
  } (jQuery, Drupal, this, this.document));