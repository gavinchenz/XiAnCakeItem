function $Dom(id){
	return document.getElementById(id);
}


// Carousel Map 轮播图

let arr=["3857.jpg","2848.jpg","2847.jpg","2846.jpg"];
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

// function Jump(count){
// 	$Dom("imgId").onclick=function(count){
// 		switch(count){
// 			case 0:window.open("forgetPassword.html");break;
// 			case 1:window.open("cakeList.html");break;
// 			case 2:window.open("cakeList.html");break;
// 			case 3:window.open("cakeList.html");break;
// 			default:'';break;
// 		}
// 	}
// }


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

	},3000);
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


// video
$Dom("momBoxId1").onclick=function(){
	let zzcBox=$Dom("zzcBoxId");
	let mp4Box=$Dom("mp4BoxId");
	zzcBox.style.display="block";
	mp4Box.style.autoplay="autoplay";
}

$Dom("exitZzcId").onclick=function(){
	let zzcBox=$Dom("zzcBoxId");
	zzcBox.style.display="none";
}


//购物车
$(".r_span").toggle(
  function () {
    $(".checkoutBox").css("display","block");
  },
  function () {
    $(".checkoutBox").css("display","none");
  }
);
$(".r_count").toggle(
  function () {
 	$(".checkoutBox").css("display","block");
  },
  function () {
    $(".checkoutBox").css("display","none");
  }
);

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

}

// Home ads 首页广告
$(function(){
	$(".imgDown").click(function(){
		$("#imgDownPicId").animate({"height":650},1000,function(){
			$("#imgUp").css("opacity",1);
			$("#imgDownPicId").animate({"height":650},1500,function(){
				$("#imgDownPicId").animate({"height":0},2000,);
			});
		});
	});
});

// $(function(){
// 	$("imgDownPicId").slideDown(1000,"linear").delay(2000).slideUp(1000,"linear");
// });

$("#imgUp").click(function(){
	$("#imgDownPicId").animate({"height":0},2000,);
});


//回到顶部
$Dom("backTopId").onclick=function(){
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
		$Dom("imgDowmId").style.display="none";
	}else{
		$Dom("couponFiexdId").style.right=2+"px";
		$Dom("couponFiexdId").style.bottom=2+"px";
		$Dom("backTopId").style.right=2+"px";
		$Dom("backTopId").style.bottom=-41+"px";
		$Dom("imgDowmId").style.display="block";
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



