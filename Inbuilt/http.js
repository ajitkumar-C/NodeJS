let http = require('http');

//req > what we send to server(params,queryParams,body)
//res > what server sends in return 

let server = http.createServer((req,res)=>{
    res.write('<h1>This is NodeJs App Server Code</h1>');
    res.end()
})

let server1=http.createServer((req,res)=>{
res.write('Test server 4700');
res.end();
})


server.listen(4600)
server1.listen(4700)