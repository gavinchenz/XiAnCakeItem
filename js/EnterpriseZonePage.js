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
		// $Dom("imgDowmId").style.display="none";
	}else{
		$Dom("couponFiexdId").style.right=2+"px";
		$Dom("couponFiexdId").style.bottom=2+"px";
		$Dom("backTopId").style.right=2+"px";
		$Dom("backTopId").style.bottom=-41+"px";
		// $Dom("imgDowmId").style.display="block";
	}
}


//预约及兑换
$Dom("spanId1").onclick=function(){
	$Dom("zzcId").style.display="block";
}

$Dom("spanId2").onclick=function(){
	$Dom("zzcId").style.display="block";
}

$Dom("spanId3").onclick=function(){
	$Dom("zzcId").style.display="block";
}

$Dom("spanId4").onclick=function(){
	$Dom("zzcId").style.display="block";
}

$Dom("spanId5").onclick=function(){
	$Dom("zzcId").style.display="block";
}

window.onload=function(){



}