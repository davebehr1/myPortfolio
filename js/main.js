 AOS.init({
  duration: 1200,
 });


  $("#formMessage").submit(function(e) {
  e.preventDefault();
 // $('#feedback').append('<h3 style="color:white;text-align:center;">will be in contact soon</h3>');
  $('#feedback').empty();
  $('<h3 style="color:white;text-align:center;">will be in contact soon</h3>').hide().appendTo('#feedback').fadeIn(1000);

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Thank you!");
  });
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
      if($('.react').isInViewport()){
        console.log('in view port');
      }
      /*if($('#contact').isInViewport()){
        console.log('In view port');
      }*/
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