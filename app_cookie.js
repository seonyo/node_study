const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 3000

app.use(cookieParser());

app.get('/count', function(req, res){
    if(req.cookies.count){
        var count = parseInt(req.cookies.count);
    } else {
        var count = 0;
    }
    count = count+1;
    res.cookie('count', count);     //cookieParser 안의 cookie라는 메소드를 사용하여 cookie 넘겨주기
    res.send('count : ' + count);   // 전송하는 쿠키의 값
});

app.listen(port, function(){
    console.log('Connected Success');
});
