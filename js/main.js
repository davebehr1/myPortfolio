$(document).ready(function(){
  var $content = $('#jsonContent');
  var data = {
    rss_url: 'https://medium.com/feed/@davebehr1'
  };
  $.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40davebehr1', data, function (response) {
    if (response.status == 'ok') {
      var output = '<div class="col-sm-2 col-md-2"></div>';
      $.each(response.items, function (k, item) {
        console.log("K:" + k);
        var visileSm;
        if(k < 4){
          visibleSm = '';
         } else {
           visibleSm = ' visible-sm';
         }
        output += '<div class="col-sm-2 col-md-2' + visibleSm + '">';
        output += '<div class="blog-post" style="padding:10px;"><header>';
        //output += '<h4 class="date">' + $.format.date(item.pubDate, "dd<br>MMM") + "</h4>";
        var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
        var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
        var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
        var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
        var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
        output += '<div class="blog-element"><img class="img-responsive" src="' + src + '" width="200px" height="100px"></div></header>';
        output += '<div class="blog-content"><h4><a style="text-decoration:none;color:black;font-weight:bold;" href="'+ item.link + '">' + item.title + '</a></h4>';
        output += '<div class="post-meta"><span>By ' + item.author + '</span></div>';
        var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
        var maxLength = 120 // maximum number of characters to extract
        //trim the string to the maximum length
        var trimmedString = yourString.substr(0, maxLength);
        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        output += '<p>' + trimmedString + '...</p>';
        output += '</div></div></div>';
        return k < 3;
      });
      $content.html(output);
    }
  });

});





 AOS.init({
  duration: 1200,
 });
 $(".left").click(function(){
  console.log('clicked left');
 });
 $(".right").click(function(){
  console.log('clicked right');
 });

 $('#myCarousel').on('slide',function(e){
    var slideFrom = $(this).find('.active').index();
    var slideTo = $(e.relatedTarget).index();
    console.log(slideFrom+' => '+slideTo);
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
    var nextSlide =  currentSlide.next('.slide');

    currentSlide.fadeOut(300).removeClass('active');
    currentSLide.addClass('inactive');
    $('.slide:eq(1)').removeClass('inactive');
    nextSlide.fadeIn(300).addClass('active');

    /*if ( $( ".slide:eq(1)" ).is( ".active" ) ) {
      console.log('dev is acive');
      //$("#contact").css({"height":130  + "% !important"});
      $(".dev").each(function(){
        $(this).animate({opacity:1},1000);
      })
    }else{
      $(".dev").css({opacity:0});
    }*/
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