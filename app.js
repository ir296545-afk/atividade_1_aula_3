const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Servidor Node funcionando!');
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando na porta ${port}`);
});