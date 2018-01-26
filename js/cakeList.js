function $Dom(id){
	return document.getElementById(id);
}


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
		$Dom("imgDowmId").style.display="none";
	}else{
		$Dom("couponFiexdId").style.right=2+"px";
		$Dom("couponFiexdId").style.bottom=2+"px";
		$Dom("backTopId").style.right=2+"px";
		$Dom("backTopId").style.bottom=-41+"px";
		$Dom("imgDowmId").style.display="block";
	}
}


$("#imgUp").click(function(){
	$("#imgDownPicId").animate({"height":0},2000,);
});



window.onload=function(){



}







