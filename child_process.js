const { spawn } = require('child_process');
// child_process provides ability to spawn process
const ls = spawn('ls', ['-lh', '/usr']);
// require('child_process'.spwan() can be written in destruction {des}=obj)
// spawn having .stdout stderr events
// spawn().stdout.on('data',(data)=>{
//method spawns the child process asynchronously, without blocking the Node.js event loop.
// })

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
  
  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  