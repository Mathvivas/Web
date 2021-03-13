/*
    node index.js -> inicializa o servidor
    package.json -> scrits -> "start": "node index.js" facilita a inicialização
    npm start --> executa o script acima
    package.json -> scrits -> "start": "nodemon index.js" reinicialização automática do servidor

  "devDependencies": {
    "nodemon": "^2.0.7"       Depêndencia somente para Devs
  }
*/

const express = require('express')  // npm install express

const app = express()   // Executar um servidor

app.listen(6000, () => console.log('Servidor rodando na porta 6000.'))

app.get('/atendimentos', () => (req, res) => res.send('Você está na rota de atendimentos.'))