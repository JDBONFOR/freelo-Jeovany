$(document).ready(function(){
  //SmoothScrolling
  $('nav li').on('click',function(){
    $('nav ul').children('.active').removeClass();
    var hash = $(this).children('a').attr('href');
    $(this).addClass('active');
    if ($(window).width() > 768) {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 'slow');
    } if ($(window).width() > 414) {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 150
      }, 'slow');
    } else {
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 'slow');
    }        
  });
  //Navbar fixed
  var headerSection = $('header'),
  headerSectionOffset = headerSection.height()/2,
  documentEl = $(document);
  
  documentEl.on('scroll', function(){
    if (documentEl.scrollTop() > headerSectionOffset){
      if ($(window).width() > 414) {
        $('nav').addClass('navbar-default-scroll');
        $('.ion-chevron-up').removeClass('hidden');
        $('.navbar-collapse').children('.hidden').removeClass('hidden');
      } else {
        $('.ion-chevron-up').removeClass('hidden');
      }
    } else {
          $('nav').removeClass('navbar-default-scroll');
          $('.ion-chevron-up').addClass('hidden');
          $('.navbar-collapse').children('a').addClass('hidden');
        }
  });
  // Slide menu function
  $('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });
  $('.info-viewer').on('click', function(e){
    if ($('.info').is(":hidden")){
      $('.info').stop(true, true).slideDown();
    } else {
      $('.info').stop(true, true).slideUp();
    }    
  });
});
  
