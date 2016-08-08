$(document).ready(function() {  
  $("body").mousemove(function(e){  
        $(".boxes").css('top', e.pageY / 50 - 80).css('left', e.pageX / 50 - 30);
      });
});