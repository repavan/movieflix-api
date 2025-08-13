//const http = `require('http')`; -> dessa forma como tá na aula, não foi aceito
import * as http from 'http';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/'){
        res.statusCode = 200;
        res.end('Home page');
    }else if (req.url === '/sobre'){
        res.statusCode = 200;
        res.end('About page');
    }
});

server.listen(4000, () => {
    console.log(`Servidor em execução em http://localhost:4000/`);
});