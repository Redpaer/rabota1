const http = require('http'); // Модуль

const server = http.createServer(); //Метод создания сервера 

server.on('request',(req,res) => {   //Запросы
     res.end('Informatika');

});

server.listen(8888, () => console.log('Сервер работает'));