function $Dom(id){
	return document.getElementById(id);
}


// Carousel Map 轮播图

let arr=["3629.jpg","3630.jpg","3631.jpg"];
let ord=0;
let myTimer=null;

//初始化界面
function initUI(){
	let lis = $Dom("fixedBoxId").children;
	for(i=0;i<lis.length;i++){
		lis[i].style.float="left";
		lis[i].style.width="28px";
		lis[i].style.height="28px";
		lis[i].style.textAlign="center";
		lis[i].style.lineHeight="28px";
		lis[i].style.border="1px solid #3c2314";
		lis[i].style.borderRadius="50%";
		lis[i].style.fontWeight="bold";
		lis[i].style.color=" #3c2314";
		lis[i].style.marginRight="24px";
	}
	
}

//1、自动变换图片
function autoChange(){
	let count=0;
	myTimer=setInterval(function(){
		//1.改变序号
		ord++;
		count++;
		//2.处理边界
		if(ord>arr.length-1){
			ord=0;
			count=0;
		}	
		// console.log(count);
		// Jump(count);
		//3.改变外观
		changeUI(ord);

	},2000);
}

//2、停止变换
function stopChange(){
	window.clearInterval(myTimer);
}

//3、跳转到指定的图片上
function goImg(transOrd){
	//1、改变序号（把当前图片序号ord的值改为跳转的图片序号）
	ord=transOrd;
	//2、改变外观
	changeUI(ord);
}

function changeUI(ord){
	//3、改变外观
	//1）、改变图片的src
	$Dom("imgId").src="img/"+arr[ord];	
	//2）、改变豆豆的颜色和样式
	let lis=$Dom("fixedBoxId").children;
	//把所有的按钮变成初始样式
	for(let i=0;i<lis.length;i++){
		lis[i].style.float="left";
		lis[i].style.width="28px";
		lis[i].style.height="28px";
		lis[i].style.textAlign="center";
		lis[i].style.lineHeight="28px";
		lis[i].style.border="1px solid #3c2314";
		lis[i].style.borderRadius="50%";
		lis[i].style.fontWeight="bold";
		lis[i].style.color=" #3c2314";
		lis[i].style.marginRight="24px";
		lis[i].style.backgroundColor="transparent";
	}
	//把当前的按钮样式改变
	lis[ord].style.backgroundColor="#3c2314";
	lis[ord].style.color="#fff";
}

//moreList

function changeTxt(){
	let sLiDom=$Dom("moreList");
	sLiDom.innerHTML="29厘米";
}

function moreList(){
	let ulsSize=$Dom("moreList").parentNode.children;
	for(var i=4;i<ulsSize.length;i++){
		ulsSize[i].style.display="block";
	}
}

function changeHeight(){
	let detailMsg=$Dom("detailMsg");
	let sizeBox=$Dom("sizeBox");
	detailMsg.style.height="600px";
	sizeBox.style.height="85px";
}


var sLiDom=$Dom("moreList");
sLiDom.addEventListener("click",changeTxt,false);
sLiDom.addEventListener("click",moreList,false);
sLiDom.addEventListener("click",changeHeight,false);

//sizeBox
function moreSize(ord){

	var lisDom=$Dom("sizeBox").children;
	for(var i=0;i<lisDom.length;i++){
		//把所有的按钮变成初始样式
		lisDom[i].style.border="1px solid #C8B49B";
		lisDom[i].style.color="#3C2314";
		lisDom[i].style.background="none";

		//划过所有按钮时改变字体颜色
		lisDom[i].onmouseover=function(){
			this.style.color="#C8B49B";
		};

		lisDom[i].onmouseout=function(){
			this.style.color="#3C2314";
		};

		//把当前的按钮样式改变
		lisDom[ord]=lisDom[i];	

		lisDom[ord].style.border="1px solid #3C2314";
		lisDom[ord].style.color="#C8B49B";
		lisDom[ord].style.background="url(img/selected.png) no-repeat right bottom";
	};				
}


function changeSize(ord){
	var cakeWeight  =$Dom("cakeWeight");
	var tableware   =$Dom("tableware");
	var eatCount    =$Dom("eatCount");
	var deliveryTime=$Dom("deliveryTime");
	var pirce       =$Dom("pirce");
	var cakeLength  =$Dom("cakeLength");
	var sizeMsg=[
		{
			cakeWeight:"1.7磅",
			tableware:"+6套餐具",
			eatCount:"适合3-6人食用",
			deliveryTime:"最早21:00配送",
			pirce:"￥355/",
			cakeLength:"16cm"
		},{
			cakeWeight:"3磅",
			tableware:"+12套餐具",
			eatCount:"适合7~12人食用",
			deliveryTime:"最早21:30配送",
			pirce:"￥635/",
			cakeLength:"21cm"		
		},{
			cakeWeight:"5.2磅",
			tableware:"+18套餐具",
			eatCount:"适合13-18人食用",
			deliveryTime:"最早明日08:30配送",
			pirce:"￥915/",
			cakeLength:"26cm"
		},{
			cakeWeight:"6磅",
			tableware:"+30套餐具",
			eatCount:"适合20~30人食用",
			deliveryTime:"最早明日08:30配送",
			pirce:"￥1420/",
			cakeLength:"29cm"  
		},{
			cakeWeight:"7.5磅",
			tableware:"+50套餐具",
			eatCount:"适合40-50人食用",
			deliveryTime:"最早明日08:30配送",
			pirce:"￥1775/",
			cakeLength:"33cm"  
		},{
			cakeWeight:"9.5磅",
			tableware:"+70套餐具",
			eatCount:"适合50-70人食用",
			deliveryTime:"最早明日08:30配送",
			pirce:"￥2130/",
			cakeLength:"47cm"  
		},{
			cakeWeight:"11磅",
			tableware:"+90套餐具",
			eatCount:"适合70-90人食用",
			deliveryTime:"最早明日08:30配送",
			pirce:"￥2485/",
			cakeLength:"51cm"  
		},{
			cakeWeight:"15磅",
			tableware:"+150套餐具",
			eatCount:"适合130-150人食用",
			deliveryTime:"最早明日08:30配送",
			pirce:"￥3550/",
			cakeLength:"62cm"  
		}];
		for(var i=ord;i<sizeMsg.length;i++){
			cakeWeight.innerHTML=sizeMsg[i].cakeWeight;    
			tableware.innerHTML=sizeMsg[i].tableware;     
			eatCount.innerHTML=sizeMsg[i].eatCount;        
			deliveryTime.innerHTML=sizeMsg[i].deliveryTime;
			pirce.innerHTML=sizeMsg[i].pirce;              
			cakeLength.innerHTML=sizeMsg[i].cakeLength;    
		}
}

function goSizeImg(transOrd){//1
	//1、改变序号（把当前图片序号ord的值改为跳转的图片序号）
	ord=transOrd;
	//2、改变外观
	moreSize(ord);
	//3、改变sizeImg图片
	var arr=["f16.png","f21.png","f26.png","f29.png","f33.png","f47.png","f51.png","f62.png",];
		$Dom("sizeImg").src="img/"+arr[ord];
	changeSize(ord);
}


window.onload=function(){

	//1、初始化界面
	initUI();
	//2、自动变换图片；
	autoChange();
	//鼠标进入盒子的区域，停止变换
	$Dom("bannerId").onmouseover = stopChange;
	
	$Dom("bannerId").onmouseout = autoChange;
	
	let lis = $Dom("fixedBoxId").children;
	for(let i=0;i<lis.length;i++){
		//赋值语句。
		lis[i].onclick = function(){//此函数的执行必须点击li。
			goImg(i);
		}
	}

	//sizeBox
	let lisDom = $Dom("sizeBox").children;
	for(let i=0;i<lisDom.length;i++){
		lisDom[i].onclick = function(){
			goSizeImg(i);
		}
	}
}



$("#imgUp").click(function(){
	$("#imgDownPicId").animate({"height":0},2000,);
});


//回到顶部
document.getElementById("backTopId").onclick=function(){
	document.documentElement.scrollTop = document.body.scrollTop=0;	
}

//scroll
window.onscroll=function(){
	let scroll=document.documentElement.scrollTop||document.body.scrollTop;
	if(scroll>=694){
		$Dom("couponFiexdId").style.right=2+"px";
		$Dom("couponFiexdId").style.bottom=43+"px";
		$Dom("backTopId").style.right=2+"px";
		$Dom("backTopId").style.bottom=2+"px";
	}else{
		$Dom("couponFiexdId").style.right=2+"px";
		$Dom("couponFiexdId").style.bottom=2+"px";
		$Dom("backTopId").style.right=2+"px";
		$Dom("backTopId").style.bottom=-41+"px";
	}
}


//cake animation 列表动画

// $(function(){
// 	$("#cakeBoxId").mouseover(function(){
// 		$("#boxUpId").css("opacity",1);
// 		});
// 	});

// $(function(){
// 	$("#cakeBoxId").mouseout(function(){
// 		$("#boxUpId").css("opacity",0);
// 		});
// 	});
	
// $(function(){
// 	$("#cakeBoxId").mouseover(function(){
// 		$("#cakeImgId1").css("transform","scale(1.3)");
// 		});
// 	});

// $(function(){
// 	$("#cakeBoxId").mouseout(function(){
// 		$("#cakeImgId1").css("transform","scale(1)");
// 		});
// 	});



