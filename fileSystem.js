const fs = require('fs');
const express= require('express');
const app = express();
app.listen(3000);

app.set("views",__dirname+'/frontend/html');

app.use(express.static("frontend"));

app.engine("html", require("ejs").renderFile);


// fs.readFile('text.txt','utf8',(err,data)=>{
// console.log(data);


// });


app.get('/here',(req,res)=>{
    fs.createReadStream("text.txt").pipe(res);
});
app.get('/video',(req,res)=>{


res.render("video.html");
})

app.get('/videoFile',(req,res)=>{
 // fs.createReadStream("./frontend/video/onemore2.mp4").pipe(res);
 const path = "./frontend/video/onemore2.mp4";
 const stat = fs.statSync(path)
 const fileSize = stat.size
 const range = req.headers.range
 if (range) {
   const parts = range.replace(/bytes=/, "").split("-")
   const start = parseInt(parts[0], 10)
   const end = parts[1] 
     ? parseInt(parts[1], 10)
     : fileSize-1
   const chunksize = (end-start)+1
   const file = fs.createReadStream(path, {start, end})
   const head = {
     'Content-Range': `bytes ${start}-${end}/${fileSize}`,
     'Accept-Ranges': 'bytes',
     'Content-Length': chunksize,
     'Content-Type': 'video/mp4',
   }
   res.writeHead(206, head);
   file.pipe(res);
 } else {
   const head = {
     'Content-Length': fileSize,
     'Content-Type': 'video/mp4',
   }
   res.writeHead(200, head)
   fs.createReadStream(path).pipe(res)
 }
  
    })