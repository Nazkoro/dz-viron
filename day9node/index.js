// const http = require('http')
// // const url = require('url')

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'application/json'
//     })
//     if(req.url === '/users') {
//         return res.end(JSON.stringify([
//             {id: 0, name: 'по route users храняться пользователи'},
//             {id: 1, name: 'Nazar'},
//             {id: 2, name: 'Zahar'}
//         ]))
//     }
//     if(req.url === '/soft') {
//         return res.end(JSON.stringify([
//             {id: 4, name: 'по route soft храняться soft'},
//             {id: 5, name: 'vscode'},
//             {id: 6, name: 'webshtorm'}
//         ]))
//     }

// })

// server.listen(3000)


const express = require("express");
   
const app = express();
let user = ''
console.log(user);
let age = 0
console.log(age);
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});
  
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});
app.get("/user", function (request, response) {
    response.send(`вас зовут ${user} `);
});
app.get("/age", function (request, response) {
    response.send(`вам ${age} лет`);
});
app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    user = request.body.userName 
    age = request.body.userAge
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});
   
app.listen(3000, ()=>console.log("Сервер запущен..."));