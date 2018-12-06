$( document ).ready(function() {

  console.log("js running");

  $(function() {

    var $window           = $(window),
        win_height_padded = $window.height() * 1,
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
          $(this).removeClass('animated slideInRight slideInLeft fadeIn');
          $(this).addClass('hide');
        }
      });
    }

    revealOnScroll();
  });

  var typed = new Typed('.typed', {
    strings: ["Salesforce Solutions.","Business Process Design.", "Project Management.","Operations Consulting.","Web Development.","Content Creation.","Social Media Management."],
    loop: true,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1000,
    startDelay: 100,
    showCursor: false,
  });

  // $(".sfsol-text").hover(function(){
  //   consol.log("hover")
  //   $(".sfsol-box").removeClass("bump-left")
  //
  // });




});
