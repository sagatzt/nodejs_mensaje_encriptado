const express = require('express')
const rtMensajes = express.Router()
const Mensaje = require('../models/Mensaje')

rtMensajes.post('/procesar',(req,res)=>{
    let texto = req.body.texto
    let destinatario= req.body.destinatario
    let prioridad = req.body.prioridad
    let fechaEnvio=req.body.fechaEnvio
    let mensaje=new Mensaje(texto,destinatario,prioridad,fechaEnvio)
    mensaje.setDestinatario('pepe@gmail.com')
    let mensajeEncriptado=mensaje.encriptar()
    mensaje.setTexto(mensajeEncriptado)
    console.log(mensaje)
    res.json({mensaje: mensajeEncriptado})
})

module.exports=rtMensajes