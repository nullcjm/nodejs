//加载http
var http = require("http");

//创建服务器
var server = http.createServer()

//数据
var menu = [
    {
        name: "麻婆豆腐",
        price: 10
    },
    {
        name: "青椒肉丝",
        price: 11
    },
    {
        name: "鱼香肉丝",
        price: 11
    },
    {
        name: "咸鱼茄仔煲",
        price: 12
    }
]

//监听服务器
server.on("request",function(req,res){
    console.log("收到请求，请求路径是" + req.url)
//根据请求路径返回对应内容    
    if( req.url==="/"){
        res.end("hello nodejs")
        //加载a.js
        var aExports = require("./a.js")
        //与a.js通信
        console.log("与a.js通信，并获得数据" + aExports.msg)
    }
    else if( req.url==="/search"){
        //浏览器当作html执行，node当作字符串发送
        res.end("<h1>search<h1/>")
    }
    else if( req.url==="/login"){
        //text/plain发送的是普通文本，浏览器当作字符串输出
        res.setHeader('Content-Type','text/plain; charset=utf-8')
        res.end("<h1>search<h1/>")
    }
    else if( req.url==="/news"){
        //要想正确地让浏览器识别成HTML，要使用'text/html'
        res.setHeader('Content-Type','text/html; charset=utf-8')
        res.end("<p>hello html<a>click on</a></p>")
    }
    else if( req.url==="/menu"){
        //服务器默认发送utf8编码内容，中文操作系统默认解析是gbk
        //在http协议中，Content-Type就是用来告知对方发送的数据内容是什么类型
        res.setHeader('Content-Type','text/plain; charset=utf-8')
        //只能返回字符串与二进制数，将数组转换成字符串输出
        res.end(JSON.stringify(menu))
    }
    else {
        res.end("404Not Found")
    }

})

//绑定端口号，启动服务
server.listen(3000,function(){
    console.log("服务器启动成功，可以访问...")
})
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');