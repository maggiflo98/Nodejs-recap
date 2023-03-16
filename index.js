const http = require ('http');
const server=http.createServer((req,res)=>{
    res.end('this is my server response we are doing node!')
})



server.listen(process.env.PORT||3000);