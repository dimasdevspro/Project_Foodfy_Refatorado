const express = require('express');

const server = express()

server.get("/", function(req, res){
   return res.send("Hi! Estou funcionando!")
})

server.listen(3333, function(){
    console.log('Server is running!')
})