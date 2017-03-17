/* 
 * slide
 *
 *	调用点击轮播
 * 
 *  按钮功能
*/

function Slide(){//这是一个空惨构造


}
//初始化函数
Slide.prototype.init = function(option){

	this.wrap = option.wrap;
	this.pics = option.pics;
	this.lis = this.pics.getElementsByTagName("li");
	this.prev = option.prev || $("prev");
	this.next = option.next || $("next");
	this.ctrl = option.ctrl;
	this.spans = this.ctrl.getElementsByTagName("span");

	this.index = 0;
	this.last = this.lis[0];
	this.ctrlLast = this.spans[0];

	this.showBtns();//显示按钮
	this.nextPic();
	this.prevPic();
	this.ctrlHandle();
	this.autoChange();
}

// 鼠标移入 wrap ,按钮显示
Slide.prototype.showBtns = function(){

	var that = this;

	this.wrap.onmouseover = function(){

		that.prev.style.opacity = 1;
		that.next.style.opacity = 1;
	}

	this.wrap.onmouseleave = function(){

		that.prev.style.opacity = 0;
		that.next.style.opacity = 0;
	}
}


Slide.prototype.nextPic = function(){
//
	var that = this;

	this.next.onclick = function(){

		/*that.index++;
		if(that.index >= 4){
			that.index = 0;
		}*/

		that.index = that.index >= 3 ? 0 : ++that.index;
		that.change();
		that.autoChange();
	}
}

Slide.prototype.prevPic = function(){
	var that = this;

	this.prev.onclick = function(){

		that.index = that.index <= 0 ? 3 : --that.index;
		that.change();
		that.autoChange();
	}
}

Slide.prototype.change = function(){
	this.last.className = "";
	this.ctrlLast.className = "";

	this.lis[this.index].className = 'active';
	this.spans[this.index].className = 'active';

	this.last = this.lis[this.index];
	this.ctrlLast = this.spans[this.index];
}

Slide.prototype.ctrlHandle = function(){

	var len = this.spans.length;
	var that = this;

	for(var i = 0; i < len; i++ ){

		this.spans[i].current = i;//给这个span 添加一个自定义属性
		this.spans[i].onmouseover = function(){
			that.index = this.current;
			that.change();
			// that.autoChange();
		}
	}
}

Slide.prototype.autoChange = function(){
	var that = this;
	clearInterval(this.timer);
	this.timer = setInterval(function(){
		that.index = that.index >= 3 ? 0 : ++that.index;
		that.change();
	},2000);
}


