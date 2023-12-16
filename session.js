let express = require('express');
let session = require('express-session');
let app = express();
let port = 3000

app.use(session({
    secret: '1234322#@3wrwed',      //랜덤 값(쿠키 아이디) 넣기
    resave: false,              // 세션 아이디를 한 번 발급했으면 다시 발급하지 말아라
    saveUninitialized: true     // 세션 id를 사용하기 전까진 발급하지 말아라
}));

app.get('/count', function(req, res){
    if(req.session.count){
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send('count : ' + req.session.count);
});

app.listen(port, function(){
    console.log('connected port');
});
