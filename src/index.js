const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, '../public')));

// Rota para exibir a página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/startbootstrap-sb-admin-2-gh-pages/index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
