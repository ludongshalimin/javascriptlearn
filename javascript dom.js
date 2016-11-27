/*
使用实例：getElementByClassName(shopping,"sale")
*/
function getElementByClassName(node,classname){
	if(node.getElementByClassName){
		//有这种方法
		return node.getElementByClassName(classname);
	}
	else{
		var results=new Array();
		var elems=node.getElementsByTagName("*");
		for(var i=0;i<elems.length;i++){
			//index of检查某个字符串出现的位置
			if(elems[i].className.indexOf(classname)!=-1){
				results[results.length]=elems[i];
			}
		}
		return results;
	}
}
/*
如果这个函数还没有绑定任何函数，把新函数添加给他
如果这个函数已经绑定了一些函数，就把新函数追加到现有指令的末尾
*/
function addLoadEvent(func){
	var oldonload=window.onload;
	if (typeof window.onload != 'function') {
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}



