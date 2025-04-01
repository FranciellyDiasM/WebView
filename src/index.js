const express = require('express');
const app = express();
const port = 3000;

// Rota para exibir "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
