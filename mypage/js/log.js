//获取节点
const logInput = document.querySelector('.logtext');
const addBtn = document.querySelector('.addBtn');
const logContent = document.querySelector('.collection');

//加载所有事件监听
loadEventListeners();

//加载所有事件监听函数
function loadEventListeners(){
	//DOM内容加载完毕执行
	document.addEventListener('DOMContentLoaded',getLog);
	//添加日志事件
	addBtn.addEventListener('click',addLog);
}

//getlog
function getLog(){
	let logs;
	if(localStorage.getItem('logs') == null){
		logs = [];
	}else{
		logs = JSON.parse(localStorage.getItem('logs'));
	}
	logs.forEach(function(log){
		//创建p
		const p = document.createElement('p');
		//创建文本节点,插入p中
		p.appendChild(document.createTextNode(log));
		//将p插入div中
		logContent.appendChild(p);
	});
}

//addLog
function addLog(e){
	if(logInput.value === ''){
		alert('Add a log');
	}else{
		//创建p
		const p = document.createElement('p');
		//创建文本节点,插入p中
		p.appendChild(document.createTextNode(logInput.value));
		//将p插入div中
		logContent.appendChild(p);
		//将log进行本地存储
		storeLogInLocalSorage(logInput.value);
		//清除logInput
		logInput.value = '';
	}
	e.preventDefault();
};

//storeLogInLocalSorage
function storeLogInLocalSorage(log){
	let logs;
	if(localStorage.getItem('logs') == null){
		logs = [];
	}else{
		logs = JSON.parse(localStorage.getItem('logs'));
	}
	
	logs.push(log);
	localStorage.setItem('logs',JSON.stringify(logs));
}