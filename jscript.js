function slide(item, element) {
	document.getElementsByClassName("selectedItem")[0].className = "sliderMenuItem";
	element.className += " selectedItem";
	var photos = document.getElementsByClassName("sliderPhoto")
	for (var i = 0; i < photos.length; i++) {
		if (i + 1 == item) photos[i].style.opacity = 1;
		else photos[i].style.opacity = 0;
	}
}