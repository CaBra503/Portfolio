// Window on load add event listener  event listener = scroll = top
var mainNav = $('.main-nav');
var mainNavScrolled = $('.main-nav-scrolled');
var heading = $('.headingWrapper');

(function ($, window) {
  $(window).scroll(function(){
  if ( $(this).scrollTop() > 250 ){
    mainNav.addClass('main-nav-scrolled');
    console.log('scrolledAdded');
  } else {
    mainNav.removeClass('main-nav-scrolled');
    console.log('scrolledRemoved');
  }
});
})($, window);

(function ($, window){
  $(function(){
    console.log('jquery is ready');
  });
})(jQuery, window);
