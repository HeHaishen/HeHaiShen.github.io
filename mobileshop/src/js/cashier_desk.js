(function(){
	var clicks =document.querySelectorAll(".clicks");
	var ul =document.querySelector("ul");
	console.log(clicks);
	var lastchange=null;
	var aaa=false;
	
	function change(){
	 		var e =event ||window.event;
		console.log(e);
		var tar=e.target||e.srcElement;
		console.log(tar);
		
		console.log(tar.classList.contains("clicks"));
			if(tar.classList.contains("clicks")&& aaa==false){
				tar.classList.toggle("active");
				lastchange=tar;
			// 	console.log(lastchange);
				aaa=true;
				return aaa;
			}else if(tar.classList.contains("clicks")&&aaa==true){
				lastchange.classList.toggle("active");
				tar.classList.toggle("active");
				lastchange=tar;
			 }
	 	}


	 	ul.addEventListener("touchstart",change);



	


}());