        $(window).scroll(function(){
            var offset = 50;
            var scrollDocument = $(window).scrollTop();
            if(scrollDocument > offset){
                $('.menu').addClass('menuAtivo');
            }else{
                $('.menu').removeClass('menuAtivo');
            }
        });
    jQuery(document).ready(function($){
        $('.sroll').click(function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
        });
    });