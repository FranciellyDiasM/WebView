const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})


const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Meu site</title>
        </head>
        <body>
            <h1>ESTE É O MEU SITE COM MEU SERVIDOR</h1>
        </body>
      </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
