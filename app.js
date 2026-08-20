const http = require('http');
const { MongoClient } = require('mongodb');

const hostname = '0.0.0.0';
const port = 3000;

const mongoUrl = 'mongodb://mongodb:27017';
const client = new MongoClient(mongoUrl);

async function startServer() {
    try {
        await client.connect();
        console.log('Conectado ao MongoDB!');

        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Servidor Node funcionando!');
        });

        server.listen(port, hostname, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1);
    }
}

startServer();
