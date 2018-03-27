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
	$Dom("eatFormId").style.display="block";
}
$Dom("exitZzcId").onclick=function(){
	$Dom("zzcId").style.display="none";
	$Dom("eatFormId").style.display="none";
}

$Dom("spanId2").onclick=function(){
	$Dom("zzcId").style.display="block";
	$Dom("procurementFormId").style.display="block";
}
$Dom("exitZzcId1").onclick=function(){
	$Dom("zzcId").style.display="none";
	$Dom("procurementFormId").style.display="none";
}

$Dom("spanId3").onclick=function(){
	$Dom("zzcId").style.display="block";
	$Dom("exchangeFormId").style.display="block";
}
$Dom("exitZzcId2").onclick=function(){
	$Dom("zzcId").style.display="none";
	$Dom("exchangeFormId").style.display="none";
}

$Dom("spanId4").onclick=function(){
	$Dom("zzcId").style.display="block";
	$Dom("customFormId").style.display="block";
}

$Dom("exitZzcId3").onclick=function(){
	$Dom("zzcId").style.display="none";
	$Dom("customFormId").style.display="none";
}

$Dom("spanId5").onclick=function(){
	$Dom("zzcId").style.display="block";
	$Dom("cooperationFormId").style.display="block";
}
$Dom("exitZzcId4").onclick=function(){
	$Dom("zzcId").style.display="none";
	$Dom("cooperationFormId").style.display="none";
}




window.onload=function(){



}