const express = require('express');
const app = express();
const http = require('http');
//There is one more difference of using the app and listening 
//to http server is when you want to setup for https server

const server = http.createServer(app);
server.listen(8000);

app.get('/',(req,res)=>{
    console.log('op');
    res.send('okok');
});



