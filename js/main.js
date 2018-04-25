 AOS.init({
  duration: 1200,
 });

  $('submit').click(function(){
    $('#feeback').append('<h2>will be in touch shortly</h2>');
  });

  $('#message button').click(function(){
    $('.navbar').hide();
  });
  $('#closer').click(function(){
    $('.navbar').show();
  });
  $.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

  $(window).on("resize scroll", function() {
      if($('#about').isInViewport()){
        console.log('fade in');
        $('#about p').fadeIn(2000,function(){
          $('#about h2').fadeIn(2000);
        });
      }else{
        console.log('fade out');
      }
});

  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
   
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  $('#carrot').click(function(){
      $('body,html').animate({
      scrollTop: $('#about').position().top
    },1000);
  });

  $('#aboutLink').click(function(){
      $('body,html').animate({
      scrollTop: $('#about').position().top
    },1000);
  });

  $('#workLink').click(function(){
      $('body,html').animate({
      scrollTop: $('#work').position().top
    },1000);
  });

  $('#messageLink').click(function(){
      $('body,html').animate({
      scrollTop: $('#message').position().top
    },1000);
  });


  $(window).scroll(function(){

    $(".bg").css("opacity", 1 - $(window).scrollTop() / 700);
  });