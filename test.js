//加载http
var http = require('http')
//加载fs
var fs = require('fs')
//创建服务器
var server = http.createServer()
//网址绝对地址
var wwwDir = 'D:/nodejs'
//监听服务器
server.on('request',function(req,res){
    var url = req.url
    //方法一：使用统一的返回情况
    var filePath = '/test.html'
    if(url !== '/'){
        filePath = url
    }

    console.log(url,wwwDir+filePath)
    
    fs.readFile(wwwDir+filePath,function(err,data){
        if(err){
            return res.end('404 NotFound.')
        }
        res.end(data)
    })
    //方法二：按不同情况分开处理
    // if(url === '/'){
    //     fs.readFile(wwwDir + '/test.html',function(err,data){
    //         if(err){
    //             return res.end('404 NotFound.')
    //         }
    //         res.end(data)
    //     })
    // } else if(url === '/txt/test.txt'){
    //     fs.readFile(wwwDir + '/txt/test.txt',function(err,data){
    //         if(err){
    //             return res.end('404 NotFound.')
    //         }
    //         res.setHeader('Content-Type','text/plain; charset=utf-8')
    //         res.end(data)
    //     })
    // } else if(url === '/mypage/HomePage.html'){
    //     fs.readFile(wwwDir + '/mypage/HomePage.html',function(err,data){
    //         if(err){
    //             return res.end('404 NotFound.')
    //         }
    //         res.end(data)
    //     })
    // }
})

//绑定端口号，启动服务
server.listen(3000,function(){
    console.log("服务器启动成功，可以访问...")
})
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');