

(function(){
	var selector =document.querySelector(".selector");

	selector.addEventListener("touchstart",function(){
		console.log(selector);
		selector.classList.toggle("btn_active");
	})


}())