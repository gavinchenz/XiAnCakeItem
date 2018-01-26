function $Dom(id){
	return document.getElementById(id);
}

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

	},4000);
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

