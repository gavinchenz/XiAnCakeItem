//封装函数：
//把输入作为参数；
//把输出作为返回值；
//中间的逻辑部分作为函数体

function $Dom(id){
	return document.getElementById(id);
}


//功能：求一组数中的最大数
//参数：一组数
//返回值：最大数
function maxInArr(arr){
	//第一个数就是前一个数的最大数
	var max=arr[0];
	for(var i=0;i<arr.length;i++){
		if(arr[i]>max){
			max=arr[i];
		}
	}
	return max;
}

//功能：判断数组中是否存在某个元素
//参数：一组数
//返回值：true表示存在；false表示不存在
function has(arr,num){
	for(var i=0;i<=arr.length;i++){
		if(arr[i]==num){
			return true;
		}
	}
	return false;
}

//indexOf()方法
//功能：在数组（或字符串）中查找一个元素（或字符）所在的位置（下标）
//参数：一组数，一个数
//返回值：这个元素（或字符）在数组（或字符串）中的位置(下标)，找到返回下标，未找到返回-1
function myIndexOf(arr,num){
	for(var i=0;i<arr.length;i++){
		if(num==arr[i]){
			return i;
			break;
		}
	}
	return -1;
}

//编写函数norepeat(arr)将数组的重复元素去掉，并返回新数组
//功能：数组去重
//参数：原数组
//返回值：去掉重复的新数组
function norepeat(arr){
	
	//定义一个新的空数组
	var arr1=[];
	for(var i=0;i<arr.length;i++){
		if(has(arr1,arr[i])==false){
			arr1.push(arr[i]);
		}
	}
	return arr1;
}

//求一组数的平均值
//功能：求一组数的平均值
//参数：一组数
//返回值：平均值
function avgInArr(arr){
	var sum=0;
	for(var i=0;i<arr.length;i++){
		sum+=arr[i];
	}
	return sum/arr.length;
}

//map函数
//功能：将原数组经过某种处理后，返回（获得）一个新的数组
//参数：回调函数（该回调函数执行：“某种处理”）
//返回值：新的数组
function map(arr,callBack){
	var arrNew=[];
	for(var i=0;i<arr.length;i++){
		var arr1=callBack(arr[i]);
		arrNew.push(arr1);
	}
	return arrNew;
}

//冒泡排序
//功能：一组数组中每个元素进行冒泡排序
//参数：一组数（无序的）
//返回值：经过冒泡后的排序数组（有序的数组，从小到大）

function bubbleSort(arr){
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-i-1;j++){
			//1、比较相邻的两个数：大的在后，晓得在前
			if(arr[j]>arr[j+1]){
				var temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
	}
	return arr;
}

//选择排序
//功能：一组数组中每个元素进行选择排序
//参数：一组数（无序的）
//返回值：经过选择后的排序数组（有序的数组，从小到大）

function selectSort(arr){
	//逻辑运算（排序）:
	//循环（找最小数，交换）
	for(var i=0;i<arr.length-1;i++){
		//1、找最小数的下标
		var min=i;
		for(var j=i+1;j<arr.length;j++){
			if(arr[min]>arr[j]){
				min=j;
			}
		}

		//交换数组中的两个数
		var temp=arr[i];
		arr[i]=arr[min];
		arr[min]=temp;
	}
	//输出
	return arr[i];
}


//字符串

//concat() 方法
//功能：concat() 方法用于连接两个或多个字符串。
//参数：两个或多个字符串
//返回值：连接好后的新字符串
function myConcat(str1,str2){
	var str="";
	str+=str1;
	str+=str2;
	return str;
}

//lastIndexOf() 方法??????
//功能：lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
//参数：字符串
//返回值：这个数在数组中的位置(下标)，找到返回下标，未找到返回-1;lastIndexOf() 方法对大小写敏感！
// function lastIndexOf(str,num){
// 	for(var i=(arr.length-1);i<arr.length;i--){
// 		if(num==arr[i]){
// 			return i;
// 			break;
// 		}
// 	}
// 	return -1;
// }

//link() 方法
//功能：link() 方法用于把字符串显示为超链接。
//参数：字符串,url
//返回值：具有超链功能的字符串
function myLink(str,url){
	var str1="";
	str1+="<a href='"+url+"'>";
	str1+=str+"</a>";
	return str1;
}

 //封装敏感词过滤
//功能：过滤敏感词
//参数：字符串（待过滤的文字信息），一个数组（包含需要过滤的词汇）
//返回值：经过过滤后的字符串
function sensitiveWordFilter(str,arr){
	for(var i=0;i<arr.length;i++){
		str=str.replace(new RegExp(arr[i],"gi"),"*");
		}
	return str;
}


//表单验证（密码)
//功能：表单验证（密码）
//参数：字符串（待验证的密码信息）
//返回值：验证密码格式是否符合要求（必须包含字母、数字、特殊字符，长度6个字符以上）
function verifyPassword(str){

		//1、长度6个字符以上
		if(str.length<6){
			alert("密码必须是6位以上");
		return;
		}
		
		//2、包含字母
		var hasLetter=false;
		for(var i=0;i<str.length;i++){
			var ch=str.charCodeAt(i);
			if((ch>=65 && ch<=90)||(ch>=97 && ch<=122)){
				hasLetter=true;
				break;
			}
		}
		if(!hasLetter){
			alert("密码中必须包含字母");
			return;
		}

		//3、包含数字
		var hasNum=false;
		for(var i=0;i<str.length;i++){
			//法一
			// var ch=str.charCodeAt(i);
			// if((ch>=48 && ch<=57)){

			//法二	
			var ch=str.charAt(i);
			if(!isNaN(ch)){
				hasNum=true;
				break;
			}
		}
		if(!hasNum){
			alert("密码中必须包含数字");
			return;
		}

		//4、是否有特殊字符：!@#$%^*()_+?~=-,
		var specStr="!@#$%^*()_+?~=-";
		var hasSpecChar=false;
		for(var i=0;i<str.length;i++){
			var ch=str.charAt(i);
			if(specStr.indexOf(ch)>-1){
				hasSpecChar=true;
				break;
			}
		}
		if(!hasSpecChar){
			alert("密码中必须包含特殊字符，可以包含以下字符：!@#$%^&*()_+?<>~=-");
			return;
		}
}


//产生一组num位的的验证码（包含26位小写字母及数字）
//功能:产生一组验证码（数字字母混合验证码）
//参数：num(多少位的)
//返回值：num位的字符串str
function verificationCode(num){
	var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];

	var str="";
	for(var i=0;i<num;i++){
		//随机产生合法的下标
		var index=parseInt(Math.random()*arr.length);
		//根据下标从数组中取出对应的字符，拼接到str上
		str+=arr[index];
	}
	return str;
}

//随机生成一个颜色的值
//功能:产生一个颜色的值
//参数：无
//返回值：字符串（随机生成的颜色值）
function getColor(){
	var r=parseInt(Math.random()*256);
	var g=parseInt(Math.random()*256);
	var b=parseInt(Math.random()*256);
	var str="#"+r.toString(16)+g.toString(16)+b.toString(16);
	return str;
}

//碰撞检测
//功能：碰撞检测
//参数：Dom1(元素节点1) ,Dom2(元素节点1)
//返回值：布尔类型 true代表碰撞（重叠）；false代表未碰撞（未重叠）
function collisionDetection(a,b){
	if(
		 a.offsetLeft + a.offsetWidth  < b.offsetLeft
	  || a.offsetTop  + a.offsetHeight <   b.offsetTop
	  || b.offsetLeft + b.offsetWidth  < a.offsetLeft
	  || b.offsetTop  + b.offsetHeight <   a.offsetTop
		){
			return false;
		}else{
			return true;
	}
}

//输入数字得到对应的星期汉字
//功能：输入数字得到对应的星期汉字
// 参数：数字0-6
// 返回值：汉字的星期几（一到“日”）
function getWeek(num){
	switch(num){
		case 1:return "星期一";
		case 2:return "星期二";
		case 3:return "星期三";
		case 4:return "星期四";
		case 5:return "星期五";
		case 6:return "星期六";
		case 0:return "星期日";
		default:;
	}
}

//获取当前时间（年月日时分秒）
//功能：获取当前时间（年月日时分秒）
//参数：日期对象new Date
//返回值：字符串 str（年月日时分秒）
function getCurrentTime(){
	var d=new Date();

	var year =d.getFullYear();
	var month =d.getMonth()+1;//month 的取值范围是0-11，即1月份是0
	var date =d.getDate();
	var hours =d.getHours();
	var minutes =d.getMinutes();
	var seconds =d.getSeconds();

	//时分秒的数值小于10的时候，仍然显示2位数
	hours=hours<10?"0"+hours:hours;
	minutes=minutes<10?"0"+minutes:minutes;
	seconds=seconds<10?"0"+seconds:seconds;

	var str=year+"年"+month+"月"+date+"日 ("+getWeek(day)+")  "+hours+":"+minutes+":"+seconds;

	return str;
}

//根据本地时间格式，把 Date 对象转换为字符串。
//功能：获取本地当前时间
//参数：无
//返回值：字符串 str
function myLocaleTime(){
	var d=new Date;
	var str=d.toLocaleString();
	return str;
}

//功能;计算两个日期对象相差的天数
//参数：两个日期对象
//返回值：相差的天数
function differentDate(d1,d2){
	//计算两个日期对象相差的毫秒数
	var diffTime=d2.getTime()-d1.getTime();
	//毫秒数除以每天的毫秒数
	var diffDate=parseInt(diffTime/(24*3600*1000));

	return diffDate;
}

//功能：输出自己的日期格式（把日期对象转换为字符串）
//参数：日期对象，分隔符
// 返回值：指定格式的字符串
function toMyDateString(d,separator){//separator 用来定义分隔符
	var str=d.getFullYear()+separator+d.getMonth()+1+separator+d.getDate();
	return str;
}

//功能：计算两个日期的月份差
//参数：两个日期对象
//返回值：月份差（数字型）
function diffMonth(d1,d2){
	var num=(d1.getFullYear()-d2.getFullYear())*12+(d1.getMonth()-d2.getMonth());
	return num;
}

//节点过滤
// 功能：过滤节点（针对childNodes的不完整性，自己封装类children功能的节点过滤函数）
//参数：一个节点，节点类型（data）1元素\2属性\3文本
//返回值：节点数组
function filternode(node,data){
	var arr=[];
	for(var i=0;i<node.childNodes.length;i++){
		if(node.childNodes[i].nodeType==data){
			arr.push(node.childNodes[i]);
		}
	}
	return arr;
}

//获取样式的兼容性写法
//功能：获取Dom元素样式的兼容性写法
// 参数：Dom元素，样式属性名
// 返回值：属性值
function getStyle(domObj,attr){
	if(domObj.currentStyle){
		return domObj.currentStyle[attr];
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}

// 计算某个Dom元素四个边距离可视区域原点的坐标（类似于绝对定位）
// 功能：计算某个Dom元素四个边距离可视区域原点的坐标
// 参数：Dom元素
//返回值：数组（左，上，右，下）
function distanceFromVisibleArea(domObj){
	var arr=[];
	var rect=domObj.getBoundingClientRect();
	arr.push(rect.left);
	arr.push(rect.top);
	arr.push(rect.right);
	arr.push(rect.bottom);
	return arr;
} 

//Dom二级的事件绑定的兼容性写法
//功能:事件绑定的兼容性写法
//参数：事件源（DOM对象），事件类型（如："click" "mouseover"等），事件绑定函数
//返回值：
function addEventDom2Ji(domObj,eventType,fun){
	if(domObj.addEventListener){
		domObj.addEventListener(eventType,fun);
	}else if(domObj.attachEvent){
		domObj.attachEvent("on"+eventType,fun);
	}else{
		domObj["on"+eventType]=fun;
	}
}

//Dom二级的事件绑定的兼容性写法
//功能:事件绑定的兼容性写法
//参数：事件源（DOM对象），事件类型（如："click" "mouseover"等），事件绑定函数
//返回值：是否捕获
function addEventDom2Ji(domObj,eventType,fun,isBubble){
	if(domObj.addEventListener){
		domObj.addEventListener(eventType,fun,isBubble);
	}else if(domObj.attachEvent){
		domObj.attachEvent("on"+eventType,fun);
	}else{
		domObj["on"+eventType]=fun;
	}
}

//保存(多少天)的cookie
//功能：保存一段时间(多少天)的cookie
//参数：day：需要保存多少天
//返回值：格林威治时间的时间字符串
function getCookieForAWhile(day){
	var d=new Date;
	d.setDate(d.getDate()+day);
	return d.toGMTString();
}

//正则封装
//参数：
//1、正则规则（如：邮箱，身份证号，手机号，等等）
//2、要验证的字符串
//返回值：true：验证通过; false：验证不通过

function checkAll(type,str){
	switch(type){
		case "username":var reg=/^[_a-zA-Z]\w{5,15}$/;break;
		case "email":var reg=/^\w+@\w+(\.\w+)+/;break;
		case "post":var reg=/^\d[0-9]{5}$/;break;
		case "phoneNumber":var reg=/^1\d{10}$/;break;
		case "idCard":var reg=/^[1-9]\d{16}(\d|x|X)$/;break;
		case "date":var reg=/^[0-3]\d{3}(\/|\.|\-)(0[1-9]|1[0-2])(\/|\.|\-)(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;break;
		case "ip":var reg=/^((\d|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(\d|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;break;
	}
	if(reg){
		return reg.test(str);
	}else{
		return false;
	}	
}

//带有界面元素，并且不正确时显示"输入的内容不正确或不合法"，正确时显示"√"
//参数：
//1、正则规则（如：邮箱，身份证号，手机号，等等）
//2、要验证的字符串
//3、显示对错的元素（即提示信息显示在那个元素上）
//返回值：true：验证通过; false：验证不通过
function checkAllAndUi(type,str,domObj){
	if(checkAll(type,str)){
		domObj.style.color="green";
		domObj.innerHTML="√";
	}else{
		domObj.style.color="red";
		domObj.innerHTML="输入的内容不合法或不正确";		
	}
}