$(document).ready(function(){
	$(".leftSideContentBottomMenu").children(".search").click(function(){
		$(".openedSearchMenu").addClass("opened");
    });
    $(".openedSearchMenu").children(".search").click(function(){
    	$(".openedSearchMenu").removeClass("opened");
    });
    $(".searchInput").keyup(function(event) {
		if(event.keyCode == 13) {
			window.location.href = "#q=" + $(".searchInput").val();
		}
	});
});