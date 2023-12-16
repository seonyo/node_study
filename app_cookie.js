const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 3000

app.use(cookieParser());

app.get('/count', function(req, res){
    res.cookie('count', 1);     //cookieParser 안의 cookie라는 메소드를 사용하여 cookie 넘겨주기
    res.send('count : ');
});

app.listen(port, function(){
    console.log('Connected Success');
});
