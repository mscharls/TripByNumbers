$( document ).ready(function() {

  console.log("js running");

  $(function() {

    var $window           = $(window),
        win_height_padded = $window.height() * 1.1,
        isTouch           = Modernizr.touch;

    if (isTouch) { $('.revealOnScroll').addClass('animated'); }

    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
      var scrolled = $window.scrollTop(),
          win_height_padded = $window.height() * 1.1;

      // Showed...
      $(".revealOnScroll:not(.animated)").each(function () {
        var $this     = $(this),
            offsetTop = $this.offset().top;

        if (scrolled + win_height_padded > offsetTop) {
          if ($this.data('timeout')) {
            window.setTimeout(function(){
              $this.addClass('animated ' + $this.data('animation'));
              $this.removeClass('hide');
            }, parseInt($this.data('timeout'),10));
          } else {
            $this.addClass('animated ' + $this.data('animation'));
          }
        }
      });
      // Hidden...
     $(".revealOnScroll.animated").each(function (index) {
        var $this     = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded < offsetTop) {
          $(this).removeClass('animated slideInRight slideInLeft');
          $(this).addClass('hide');
        }
      });
    }

    revealOnScroll();
  });







});
