$(document).ready(function(){
  console.log('yes');
   if($("#contact").width() < 890 ){
        $("#contact").height(800);
        console.log("set height");
    }else{
      $("#contact").height(500);
    }

  $(window).resize(function(){
    console.log("resized");
    if($("#contact").width() < 890){
        $("#contact").height(800);
        console.log("set height");
    }else{
      $("#contact").height(500);
    }

  });
});

 AOS.init({
  duration: 1200,
 });

 $('.information').hover(function(){
  //console.log('you are hovering');
  $(this).find('a').fadeIn(300);
  $(this).find('#carText').fadeIn(300);
 });

  $('.information').mouseleave(function(){
  //console.log('you are hovering');
  $(this).find('a').fadeOut(300);
  $(this).find('#carText').fadeOut(300);
 });

  $("#formMessage").submit(function(e) {
  e.preventDefault();
 // $('#feedback').append('<h3 style="color:white;text-align:center;">will be in contact soon</h3>');
  if( $('#email').val().length === 0 ) {
        $('<h3 style="color:white;text-align:center;">Please fill in an email address</h3>').hide().appendTo('#feedback').fadeIn(1000);
  }
  if( $('#textMessage').val().length === 0 ) {
        $('<h3 style="color:white;text-align:center;">Please add a message</h3>').hide().appendTo('#feedback').fadeIn(1000);
  }else{

  $('#feedback').empty();
  $('<h3 style="color:white;text-align:center;">will be in contact soon</h3>').hide().appendTo('#feedback').fadeIn(1000);

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Thank you!");
  });
  }
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
      var speed = 800;
      var flag = true;
      if($('.java').isInViewport() && flag){

        $(".meteor").animate({width: "10%"},speed);
        $(".react").animate({width: "20%"},speed);
        $(".java").animate({width: "60%"},speed);
        $(".node").animate({width: "50%"},speed);
        $(".devops").animate({width: "20%"},speed);
        //console.log('in view port');
        flag = false;
      }
      else{
        //console.log('not in view port');
      }
      /*if($('#contact').isInViewport()){
        console.log('In view port');
      }*/
});

  $('.right-arrow').click(function(){
    var currentSlide = $('.slide.active');
    var nextSlide =  currentSlide.next();

    currentSlide.fadeOut(300).removeClass('active');
    nextSlide.fadeIn(300).addClass('active');

    if ( $( ".slide:eq(1)" ).is( ".active" ) ) {
      console.log('dev is acive');
      //$("#contact").css({"height":130  + "% !important"});
      $(".dev").each(function(){
        $(this).animate({opacity:1},1000);
      })
    }else{
      $(".dev").css({opacity:0});
    }
    if(nextSlide.length == 0){
      $('.slide').first().fadeIn(300).addClass('active');
    }

  });

  $('.left-arrow').click(function(){
    var currentSlide = $('.slide.active');
    var prevSlide = currentSlide.prev();

    currentSlide.fadeOut(300).removeClass('active');
    prevSlide.fadeIn(300).addClass('active');

    if(prevSlide.length == 0){
      $('.slide').last().fadeIn(300).addClass('active');
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