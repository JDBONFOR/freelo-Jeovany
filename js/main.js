$(document).ready(function(){
  //SmoothScrolling
  $('nav li').on('click',function(){
    $('nav ul').children('.active').removeClass();
    var hash = $(this).children('a').attr('href');
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    }, 'slow');    
  });
  //Navbar fixed
  var headerSection = $('header'),
  headerSectionOffset = headerSection.height()/2,
  documentEl = $(document);
  
  documentEl.on('scroll', function(){
    if (documentEl.scrollTop() > headerSectionOffset){
      $('nav').addClass('navbar-default-scroll');
      $('.navbar-collapse').children('.hidden').removeClass('hidden');
    } else {
      $('nav').removeClass('navbar-default-scroll');
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
  
