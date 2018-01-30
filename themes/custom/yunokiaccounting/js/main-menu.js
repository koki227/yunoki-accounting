(function ($, Drupal, window, document) {
  
    Drupal.behaviors.yunokiaccountingMainMenu = {
      attach: function (context, settings) {
        $(window).on('scroll.mainmenu', function() {
          let $menuBar = $('.js-main-menu');
          let $menuBarOffset = $menuBar.offset().top;
          $menuBar.toggleClass('is-main-menu-fixed', $(window).scrollTop() > $menuBarOffset);
        });

        var toggleMenu = function() {
          $('.js-main-menu .menu--main').toggleClass('is-menu-open');
          $('.layout-main').toggleClass('is-blur');
        };

        $('.js-menu-button').on('click', toggleMenu);

        $('.js-main-menu .menu--main').on('click', toggleMenu);
      }
    };
  
  } (jQuery, Drupal, this, this.document));