const express = require('express')
const router = express.Router();

router.get('/',(req, res)=>{
    res.send("나는 api폴더에 있는 navi.js입니다.")
})

router.get('/sub',(req, res)=>{
    res.send("나는 하위 라우터입니다.")
})

module.exports = router ;