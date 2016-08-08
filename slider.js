$(document).ready(function(){
	function sliderItemClick(sliderItem) {
		$(".selectedItem").removeClass("selectedItem");
    	$(".visiblePhoto").removeClass("visiblePhoto");
    	$(sliderItem).addClass("selectedItem");
    	$("#p" + sliderItem.id[1]).addClass("visiblePhoto");
	}
	var itemId = 0;
	var interval = setInterval(function() {
		if (itemId < $(".sliderMenuItem").length - 1) 
			itemId++;
		else 
			itemId = 0;
		sliderItemClick($("#i" + (itemId + 1)).get(0));
	}, 5000);
    $(".sliderMenuItem").click(function(){
    	clearInterval(interval);
    	sliderItemClick(this);
    });
});