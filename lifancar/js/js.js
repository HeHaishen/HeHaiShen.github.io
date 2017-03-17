var leftimg= document.getElementsByClassName("leftimg")[0];
var rightimg =document.getElementsByClassName("rightimg")[0];
var imgs=document.getElementsByClassName("as_img")[0];



var a=1;
leftimg.onclick=function(){
	
	a--;
	if(a<=0){a=3}else 
		if(a>=4){a=1};
		imgs.src="images/banner0" + a+".jpg";
	}


rightimg.onclick=function(){
	a++;
	if(a<=0){a=3}
		else if(a>=4){a=1};
	imgs.src="images/banner0" +a+".jpg";
	}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

aa="../images/banner0"+a+".jpg";

var left_move_show=document.getElementsByClassName("left_movet_1");//获取所有所需要的元素的className
var seeshow =document.documentElement.clientHeight;
var right_change=document.getElementsByClassName("right_change");
var up_change =document.getElementsByClassName("up_change");

//console.log(seeshow);
//获取屏幕的可见高度
//页面加载时调用方法
//当滚动滚动条时调用方法
window.onscroll=function(){
	 moveall(left_move_show,"leftmoveshow");
	 moveall(right_change,"rightmoveshow")
	 moveall(up_change,"upmoveshow")
}

window.onload=function(){
	moveall(left_move_show,"leftmoveshow");
	 moveall(right_change,"rightmoveshow");
	 moveall(up_change,"upmoveshow");
}

//滚动页面动画
function moveall(elems,moves){
	var all=false;
	var index = 0;
	for(var x = 0 ;x<elems.length;x++){
		elems[x].index=x;
		//console.log(elems[x]);
		var tops =elems[x].getBoundingClientRect().top;
		//获取元素到到浏览器顶部的距离


		if(tops>0 && tops<seeshow){
			
			index++;
			// if(index>=2.5){index=1}
			elems[x].style.animationDelay = index * 0.5 + "s";
			elems[x].classList.add(moves);
			all=true;
		}else{
			
			index=0;
			console.log(index);
		}	
	}
}


//轮播图


var content_flashlist =document.getElementsByClassName("content_flashlist")[0];
var picLeft1 =content_flashlist.getElementsByTagName("li")[0];
console.log(content_flashlist);
console.log(picLeft1);
// var len =picLeft1.length;
var lisWith=picLeft1.offsetWidth;
var list_width=content_flashlist.offsetWidth;
console.log(list_width);
console.log(lisWith);
var speed=20;
var lefts=0;
var picnum=0;


// console.log(pic_width);

function hold(){
	var holdwait=setTimeout(function(){
		runPic();


	},3000)
}


function runPic(){//元素的数组长度
	var timmer=setInterval(function(){
		lefts--;
		console.log(lefts);
		if(lefts==-lisWith*picnum){
			picnum++;

			if(picnum==3||lefts==-1784){
				picnum=0;
				lefts=0;
				list_width.style.left=lefts+"px";
				clearInterval(timmers);
				runPic()
			}
			console.log(picnum);
			clearInterval(timmer);
			hold();
		}
		console.log(picnum);
		list_width.style.left=lefts+"px";
		
		

		
	},1000/60)}

	
	 hold();
	
	
		

  

