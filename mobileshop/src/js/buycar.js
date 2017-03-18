(function(){

	var shop_list =document.querySelectorAll(".shop_list");
	var select_em =document.querySelectorAll(".select_em");
	var select_shop =document.querySelectorAll(".select_shop");
	var delete_btn =document.querySelectorAll(".delete_btn");

	var numdown=document.querySelectorAll(".numdown");
	var numup =document.querySelectorAll(".numup");
	var nummore=document.querySelectorAll(".nummore");//加减

	var economize=document.querySelectorAll(".economize");//节省价格
	var price =document.querySelectorAll(".price");//价格

	var the_all_sum=document.querySelector(".the_all_sum");

	console.log(economize);
	
	
	

		var bbb=0;//存储已经点击的数量；
	var nummore_inner=0;
	
	var news_economizemoney=0;//用于存储每个li计算后的节省后的价格
	var sum_pricemoney=0;//用于存储每个计算后的价格

	var economizemoney=0;//用于存储节省单价
	var pricemoney=0;//用于存储单价

	var lisum=0;
    var sumnum=0//存储合算最后价格

	var numberof=0;//存储加或减的内容

	// console.log(numdown);
	// console.log(numup);
	// console.log(nummore);
    
	

	var list_em=true;
	var list_all=true;


	var classNHas=[];//存储

	var hasadd={};

	var fArry=[];

	var listarr=[];//存储存在时的数；

	var priceArray=[];
	var economizeArray=[];
	var nummoreArray=[];

	//获取单价
	function getPrice(){
		for(var p =0 ;p<price.length;p++){
			price[p].index=p;
			priceArray.push(parseInt(price[p].innerHTML.slice(1)));
			economizeArray.push(parseInt(economize[p].innerHTML.slice(1)));
			//nummoreArray.push(parseInt(nummore[p].innerHTML));
				// console.log(priceArray);
				console.log(economizeArray);
				// console.log(nummoreArray);
		}
	}
	
getPrice();
		//总结按钮
	var num_all=document.querySelector(".num_all"); 
	num_all.innerHTML=0;

		//获取所有店铺的父类

		for(var y = 0 ;y<shop_list.length;y++){
			shop_list[y].index=y;
			fArry.push(shop_list[y].children.length-1);
			classNHas.push(0);
			// console.log(fArry);
			// console.log(fArry);
			shop_list[y].firstElementChild.firstElementChild.addEventListener("touchstart",function(){
				this.classList.toggle("activeselect");
				var selct_thisshop=this.parentNode.parentNode.children;
					selectorbrother(selct_thisshop,this);//调用selectorbrother（）；
				if(this.classList.contains("activeselect")==false){
					this.parentNode.classList.remove("addsum");
					selector_all.classList.remove("activeselect");
					bbb-=(this.parentNode.parentNode.children.length-1);
					num_all.innerHTML=bbb;
				}else{
					this.parentNode.classList.add("addsum");
					bbb+=this.parentNode.parentNode.children.length-1;
					num_all.innerHTML=bbb;
				}
			
			})
		}


		//选中所有兄弟节点的em,
		
		function selectorbrother(selct_thisshop,thiselements){
			if(thiselements.classList.contains("activeselect")){
						// console.log(this.parentNode.parentNode.children);
						
						for(var ss=0;ss<selct_thisshop.length;ss++){
							selct_thisshop[ss].firstElementChild.classList.add("activeselect");
							classNHas[ss]=selct_thisshop[ss].children-1;

							//合计

							// var this_num=sumnum;
							// sumnum -= priceArray[this.parentNode.index]*parseInt(nummore[this.parentNode.index].innerHTML);
			 			// 	the_all_sum.innerHTML=sumnum;
						}
				}else{
					for(var ss=0;ss<selct_thisshop.length;ss++){
						selct_thisshop[ss].firstElementChild.classList.remove("activeselect");
						classNHas[ss]=0;
						selector_all.classList.remove("activeselect");
					}
					
				}
		}



	

	//选择所有按钮
	var selector_all=document.querySelector(".select_all");
	// console.log(select_all);
	selector_all.addEventListener("touchstart",function(){
		this.classList.toggle("activeselect");
		sumnum =0;
		if(this.classList.contains("activeselect")==true){
					bbb=0;

				for(var allli=0;allli<shop_list.length;allli++){
					
					var alllis=shop_list[allli].children;
					
					 bbb+=alllis.length-1;
					 num_all.innerHTML=bbb;
					 

					 the_all_sum.innerHTML=sumnum;
					for(var i =0;i<alllis.length;i++){
						alllis[i].firstElementChild.classList.add("activeselect");
						classNHas[i]=alllis[i].length-1;
						//合计
						if(i>0){
							console.log(nummore[alllis[i].index].innerHTML);
							sumnum =sumnum+ priceArray[alllis[i].index]*parseInt(nummore[alllis[i].index].innerHTML);
							
						}
						


					}
				}
			
		}else{
			for(var allli=0;allli<shop_list.length;allli++){
					var alllis=shop_list[allli].children;
					bbb-=alllis.length-1;
					num_all.innerHTML=bbb;
					
					for(var i =0;i<alllis.length;i++){
						alllis[i].firstElementChild.classList.remove("activeselect");
						classNHas[i]=0;
						the_all_sum.innerHTML=sumnum;
					}
				}
		}
	});


//判断子元素是否所有都含有此属性；
	// function gethasclassName(thisElements){

	// 	// for(var y =0;y<shop_list.length;y++){
	// 		var childlis=thisElements.parentNode.parentNode.children;//获取点击的的父子点的子节点的数组；
	// 		// console.log(childlis);
	// 		for(var j=1;j<childlis.length;j++){
	// 				if(childlis[j].classList.contains("addone")==true){
	// 					console.log(childlis[j].parentNode.index);
	// 					classNHas[childlis[j].parentNode.index]+=1;
	// 					console.log(classNHas[childlis[j].parentNode.index]);
	// 					 // classNHas++;
	// 					 // console.log(classNHas); 
	// 					 return classNHas[childlis[j].parentNode.index]; 

	// 				}
	// 		}
	// 	// }
	// }
	


	//给点击的添加一个背景
		
	for(var i =0 ;i<select_em.length;i++){
		select_em[i].index=i;
		select_em[i].parentNode.index=i;
		nummore[i].index=i;
		numup[i].index=i;
		numdown[i].index=i;

		
		console.log(nummore[0].parentNode);
		select_em[i].addEventListener("touchstart",function(){
			
			this.classList.toggle("activeselect");//给当前的
			this.parentNode.classList.toggle("addone");
			console.log(this.parentNode.index);
			// console.log(this.classList.contains("activeselect"));
			if(this.classList.contains("activeselect")==false){
				classNHas[this.parentNode.parentNode.index]-=1;
				// console.log(classNHas[this.parentNode.parentNode.index]);
				selector_all.classList.remove("activeselect");
				bbb--;
			 	num_all.innerHTML=bbb;


			 	
			 	//合计内容
			 	sumnum -= priceArray[this.parentNode.index]*parseInt(nummore[this.parentNode.index].innerHTML);
			 	the_all_sum.innerHTML=sumnum;
			}else{
				classNHas[this.parentNode.parentNode.index]+=1;
				bbb++;
				num_all.innerHTML=bbb;//设置结算的内容
				//合计内容
				sumnum += priceArray[this.parentNode.index]*parseInt(nummore[this.parentNode.index].innerHTML);
			 	the_all_sum.innerHTML=sumnum;
				
			}


			//this.parentNode.parentNode.childElementCount)-1
			// console.log(classNHas[this.parentNode.parentNode.index]);
			// console.log(fArry[this.parentNode.parentNode.index]-1);

			 if( classNHas[this.parentNode.parentNode.index]>=((this.parentNode.parentNode.children.length)-1)){

			 	this.parentNode.parentNode.firstElementChild.getElementsByTagName("em")[0].classList.add("activeselect");

			 }else{
			 	// console.log(this.parentNode.parentNode.firstElementChild.getElementsByTagName("em")[0]);
			 	this.parentNode.parentNode.firstElementChild.getElementsByTagName("em")[0].classList.remove("activeselect");
			 	// console.log();
			 	
			 	
			 	// classNHas--;
			 	// if(classNHas<0){
			 	// 	classNHas=0;

			 	// }
			 }
			

		})

	//删除按钮
	
		delete_btn[i].addEventListener("touchstart",function(){
			this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);

		})



	 //加按钮
	 numup[i].addEventListener("touchstart",function(){

	 	console.log(this.index);
	 	var economizemoney=economize[this.index].innerHTML.slice(1);
		var pricemoney=price[this.index].innerHTML.slice(1);
	 	
	 	nummore_inner=nummore[this.index].innerHTML;
	 	nummore_inner=nummore[this.index].innerHTML;
	 	nummore_inner++;
	 	if(nummore_inner>200){nummore_inner=200;alert("最大数量为200")}
	 	
	 	nummore[this.index].innerHTML=nummore_inner;
	 	//合计
	 	if(this.parentNode.parentNode.parentNode.classList.contains("addsum")){
	 		sumnum += priceArray[this.parentNode.parentNode.index]*parseInt(nummore[this.parentNode.index].innerHTML);
			 	the_all_sum.innerHTML=sumnum;
	 	}
	 	
	 	
	 })

	 //减按钮
	 numdown[i].addEventListener("touchstart",function(){
	 	
	 	nummore_inner=nummore[this.index].innerHTML;
	 	var economizemoney=economize[this.index].innerHTML.slice(1);
		var pricemoney=price[this.index].innerHTML.slice(1);

	 	nummore_inner--;
	 	if(nummore_inner<0){nummore_inner=0;alert("最大数量为0")}
	 	
	 	news_pricemoney=(+pricemoney)*(+nummore_inner);
	 	// console.log(+pricemoney,+nummore_inner);
	 	//合计
	 	if(this.parentNode.parentNode.parentNode.classList.contains("addsum")){
	 		sumnum -= priceArray[this.parentNode.parentNode.index]*parseInt(nummore[this.parentNode.parent.index].innerHTML);
			 	the_all_sum.innerHTML=sumnum;
	 		
	 	}
	 	
	 	nummore[this.index].innerHTML=nummore_inner;
	 	
	 })
		
	 }


}());



