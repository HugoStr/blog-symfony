$(window).scroll(function(){
    var fromTopPx = 1500; // distance to trigger
    var scrolledFromtop = $(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        $('html').addClass('scrolled').fadeOut();
        $('div').addClass('scrolled')
    }else{
        $('html').removeClass('scrolled');
    }
});