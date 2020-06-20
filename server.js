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
    else if( req.url==="/login"){
        res.end("loginpage")
    }
    else if( req.url==="/search"){
        res.end("searchpage")
    }
    else if( req.url==="/menu"){
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