const express = require('express')
const rtMain = express.Router()

//aqui te creas las rutas get, post, etc.. que necesies

rtMain.get('/', function (req, res) {
    res.render('home')
})

module.exports=rtMain