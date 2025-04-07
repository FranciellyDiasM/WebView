const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, '../public/startbootstrap-sb-admin-2-gh-pages')));

// Rotas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views', 'login.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '/views', 'index.html'));
  });
  
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views', 'register.html'));
  });

  app.get('/forgot-password', (req, res) => {
    res.sendFile(path.join(__dirname, '/views', 'forgot-password.html'));
  });

  app.use((req, res, next) => {
    if (req.path.endsWith('.html')) {
      const newPath = req.path.replace('.html', '');
      res.redirect(301, newPath); // Redireciona para a rota sem .html
    } else {
      next();
    }
  });

app.listen(port, ()=> {
    console.log(`Servidor rodando em http://localhost:${port}`);
});