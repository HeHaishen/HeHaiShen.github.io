//取消按钮
(function(){
	var cancal =document.querySelector(".cansal");
	var search=document.querySelector(".search_put");

	cancal.addEventListener("touchstart",function(){
		search.value="";
	})

}());

//菜单按钮价格
(function(){
	 var price_more =document.getElementsByClassName("price_more")[0];
	var pricelist =document.querySelector(".pricelist");

		console.log(pricelist);
		price_more.addEventListener("touchstart",function(){
			
			pricelist.classList.toggle("pricelistshow");
		});



	
}());


//返回最顶端按钮
(function(){
	$(".totop").on("touchstart",function(){
		
		$("html,body").animate({scrollTop:0},500);
})


}());


(function(){

	var content=$(".content");
	var win_h=$(window).height();
	var ul =$(".content_list");
	

	function loadingdom(content){
		var html="";
		var wrap;
		html+='<div class="loading">';
		html+='<img src="img/icon_loading.png">';
		html+='<span>正在加载</span>';
		html+='</div>';
		wrap=$(html);
		$(content).append(wrap);
		return wrap;
	}

	var contentjoin =loadingdom(content)[0];
	var loadingtop = 0;
	var topheight =0;
	var clock=true;


	$(window).on("scroll",function(){
		
		var loadingtop  = contentjoin.getBoundingClientRect().top;
		//alert(contentjoin.getBoundingClientRect().top);
		//console.log(clock);
		console.log(11);
		//console.log(loadingtop,win_h);
		if(loadingtop<win_h&&clock==true){
			
			 ajaxload();
			clock=false;
		}
	})

	var num=0;

	function ajaxload(){
		
		$.ajax({
			type:"GET",
			url:"good.json"

		}).done(function(obj){
			var html="";
			console.log(333);
			for(var key in obj){
				html+='<li><img src="'+obj[key]["img"]+'"><p><a href="#">'+obj[key]["describe"]+'</a></p><span>￥'+obj[key]["price"]+'</span><s>￥'+obj[key]["s"] + '</s></li>';
			}

			setTimeout(function(){
					ul.append(html);
					clock=true;
				},2000);
		});
	}
	

	
}()); 


//筛选按钮事件
(function(){
	var select = $(".select");
	var select_more=$(".select_more");
	var enter =$(".enter");
	var aside =$(".aside");

	var selectW = select.width();
	var asideW=aside.width();
	var opacitpartW= selectW-asideW;

	var toucT;
	var moveM;
//点击筛选按钮
	select_more.on("touchstart",function(){
		select.css({left:0});
	})
//点击左边透明地方
	select.on("touchstart",function(e){
		var toucT=e.changedTouches[0].pageX;
		if(opacitpartW>toucT){selectHidden();}
		// select.on("touchend",function(e){
		// 	var moveM=e.changedTouches[0].pageX;
		// 	console.log(toucT,moveM);
		// })
		
	});

	var toucS,moveM;
//拖动缩回
aside.on("touchstart",function(e){
	toucS = e.changedTouches[0].pageX;
	aside.on("touchmove",function(e){
			moveM=e.changedTouches[0].pageX;
			console.log(toucS,moveM)
			if(moveM-toucS>100){
				
				selectHidden()
			}
		})
});

	

	
//点击确认按钮
	enter.on("touchstart",function(event){
		// event.preventDefault();
		selectHidden();
	});



	function selectHidden(){
		
			select.css({left:"100%"});
		

	}
}());




