
function $Dom(id){
	return document.getElementById(id);
}


$("#phoneAId").mouseover(function(){
  $("#phoneAId").css({color:"#FFF",background:"#C8B49B",borderBottom:"3px solid #3c2314"});
});

$("#phoneAId").click(function(){
  $("#phoneAId").css({color:"#FFF",background:"#C8B49B",borderBottom:"3px solid #3c2314"});
});

$("#phoneAId").mouseout(function(){
  $("#phoneAId").css({color:"#3c2314",background:"none",borderBottom:"0"});
});

$("#accountAId").mouseover(function(){
  $("#accountAId").css({color:"#FFF",background:"#C8B49B",borderBottom:"3px solid #3c2314"});
});

$("#accountAId").mouseout(function(){
  $("#accountAId").css({color:"#3c2314",background:"none",borderBottom:"0"});
});

$("#weixinAId").mouseover(function(){
  $("#weixinAId").css({color:"#FFF",background:"#C8B49B",borderBottom:"3px solid #3c2314"});
});

$("#weixinAId").mouseout(function(){
  $("#weixinAId").css({color:"#3c2314",background:"none",borderBottom:"0"});
});



$(function(){
	$("#phoneAId").click(function(){
		$("#phoneLogBoxId").css("display","block");
		$("#accountLogBoxId").css("display","none");
		$("#weiXinBoxId").css("display","none");
		// $("#phoneAId").css({color:"#FFF",background:"#C8B49B",borderBottom:"3px solid #3c2314"});
	});
});

// $(function(){
// 	$("#phoneAId").click(function(){
// 		$("#phoneAId").css({color:"#FFF",background:"#C8B49B",borderBottom:"3px solid #3c2314"});
// 	});
// });






$(function(){
	$("#accountAId").click(function(){
		$("#phoneLogBoxId").css("display","none");
		$("#accountLogBoxId").css("display","block");
		$("#weiXinBoxId").css("display","none");
		$("#accountAId").css({color:"#FFF",background:"#C8B49B",borderBottom:"3px solid #3c2314"});
	});
});

$(function(){
	$("#weixinAId").click(function(){
		$("#phoneLogBoxId").css("display","none");
		$("#accountLogBoxId").css("display","none");
		$("#weiXinBoxId").css("display","block");
		$("#weixinAId").css({color:"#FFF",background:"#C8B49B",borderBottom:"3px solid #3c2314"});
	});
});	











// function initUI(){
// 	let lis=$Dom("logNavId").children;
// 	for(i=0; i<lis.length;i++){
// 		lis[i].style.color="#3c2314";
// 		lis[i].style.backgroundColor="#fff";
// 		lis[i].style.borderBottom="1px solid #fff";
// 	}
// }

// function change(){
// 	let lis=$Dom("logNavId").children;
// 	initUI();
// 	for(i=0; i<lis.length;i++){
// 		lis[i].onclick=function(){
// 			lis[i].style.color="#fff";
// 			lis[i].style.backgroundColor="#c8b49b";
// 			lis[i].style.borderBottom="3px solid #3c2314";
// 		}
// 	}
// }

// $Dom("phoneAId").onclick=function(){
// 	$Dom("phoneAId").style.color="#fff";
//     $Dom("phoneAId").style.backgroundColor="#c8b49b";
// 	$Dom("phoneAId").style.borderBottom="3px solid #3c2314";
// }





window.onload=function(){

}

