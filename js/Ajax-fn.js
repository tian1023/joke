function getAjax(Url,fn) {
	//创建xhr对象
	var xhr = new XMLHttpRequest();
	//设置请求方法和路径
	xhr.open("GET", Url);
	//发送请求
	xhr.send()
	//监听后台是否返回数据
	xhr.onreadystatechange = function() {
		if(xhr.status == 200 && xhr.readyState == 4) {
			console.log("成功获取数据")
			//处理数据
			fn(xhr);
		}
	}
}