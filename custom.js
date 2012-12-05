$(document).ready(function(){	
	$('#mainBlock').fadeIn(2000);

});

//~~~~~Slideshow~~~~~~~~
$(document).ready(function() {
    $(function(){
        $('.fadein img:gt(0)').hide();
        $('div.txt_content p').html($('div.fadein img:first-child'));
        setInterval(function(){
 
          $('.fadein :first-child').fadeOut()
             .next('img').fadeIn()
             .end().appendTo('.fadein');
          $('div.txt_content p').html($('div.fadein img:first-child'));
             }, 2000);
    });
});

