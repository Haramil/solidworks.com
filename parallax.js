$(document).ready(function() {  
  $("body").mousemove(function(e){  
        $(".boxes").css('top', e.pageY / 60 - 80).css('left', e.pageX / 60 - 30);
      });
});