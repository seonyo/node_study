const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params //한 번에 name이라는 키에 req.prams 값이 들어감

    if(name == "dog"){
        res.json({'sound' : '멍멍'})
    } else if(name == "cat"){
        res.json({'sound' : '야옹'})
    } else if(name == "pig"){
        res.json({'sound': '꿀꿀'})
    } else{
        res.json({'sound' : '알수없음'})
    }

})

app.get('/cat', (req, res) => {
    res.json({'sound' : '야옹'})
})


app.listen(port, () => {
    console.log(`Example app listeing on port ${port}`)
})