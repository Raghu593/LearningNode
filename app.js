// const http = require('http');

// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end('Youre on home page');
//     }
//     if(req.url==='/about'){
//         res.end("your on about page");
//     }
//     res.end(`<h1>Oops! This page your looking for doesn't exists</h1>
//             <a href='/'>Go Back to Home</a>`
//      )
// })

// server.listen(3000);
state={one:1,two:2,three:3}

console.log(...state)
