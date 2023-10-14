const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    // const q = req.params    //요청 들어온 것 중(req) params 데이터를 q 변수에 넣어라
    // console.log(q.id)

    const q = req.query
    console.log(q.q)
    console.log(q.name)

    res.json({'userid':q.name})

})

app.get('/cat', (req, res) => {
    res.json({'sound' : '야옹'})
})


app.listen(port, () => {
    console.log(`Example app listeing on port ${port}`)
})