 AOS.init({
  duration: 1200,
})

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

  var textOne ="I AM A DEVELOPER";
  var textTwo = "i make mobile apps";
  var i =0;
  var j =0;
  document.getElementById('typewriter').onload(writeitout());
 
  function writeitout(){
    var j = 0;
    if(i < textOne.length){
      document.getElementById('typewriter').innerHTML += textOne.charAt(i);
      ++i;
      setTimeout(writeitout,80);
    }
    if(i >= textOne.length){
      console.log('i: ', i);
      document.getElementById('typewriter').innerHTML ="";
      writeTwo();
    }
    
  }
  function writeTwo(){
    var i = 0;
    if(j < textTwo.length){
    
      document.getElementById('typewriter').innerHTML += textTwo.charAt(j);
      ++j;
      setTimeout(writeTwo,80);
    }
    if(j >= textTwo.length){
      console.log("GREATER J");
      document.getElementById('typewriter').innerHTML ="";
   
      
  
    }
  
  }