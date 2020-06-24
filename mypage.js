//加载http
var http = require('http')
//加载fs
var fs = require('fs')
//创建服务器
var server = http.createServer()
//网址绝对地址
var wwwDir = 'D:/mypage'
//监听服务器
server.on('request',function(req,res){
    var url = req.url
    if(url === '/'){
        fs.readFile(wwwDir + '/HomePage.html',function(err,data){
            if(err){
                return res.end('404 NotFound.')
            }
            res.end(data)
        })
    } else if(url === '/PhotoWall.html'){
        fs.readFile(wwwDir + '/PhotoWall.html',function(err,data){
            if(err){
                return res.end('404 NotFound.')
            }
            res.end(data)
        })
    } else if(url === '/Log.html'){
        fs.readFile(wwwDir + '/Log.html',function(err,data){
            if(err){
                return res.end('404 NotFound.')
            }
            res.end(data)
        })
    } else if(url === '/MessageBoard.html'){
        fs.readFile(wwwDir + '/MessageBoard.html',function(err,data){
            if(err){
                return res.end('404 NotFound.')
            }
            res.end(data)
        })
    } 
})

//绑定端口号，启动服务
server.listen(3000,function(){
    console.log("服务器启动成功，可以访问...")
})
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');