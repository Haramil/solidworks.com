function slide(item, element) {
	document.getElementsByClassName("selectedItem")[0].className = "sliderMenuItem";
	element.className += " selectedItem";
	document.getElementsByClassName("sliderPhoto")[0].style["background-image"] = "url(img/slide" + item + ".png)";
}