window.onresize = resize;
window.onload = resize;

function resize()
{
	
	var iphone = document.getElementById("iphoneImage");
	var body = document.body;
	
	iphone.style.top = Math.max(body.offsetHeight - iphone.offsetHeight, document.getElementById("textWrapper").offsetHeight) + "px";
	iphone.style.left = (body.offsetWidth - iphone.offsetWidth)/2 + "px";
}
