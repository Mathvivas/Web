/*
    node index.js -> inicializa o servidor
    package.json -> scrits -> "start": "node index.js" facilita a inicialização
    package.json -> scrits -> "start": "nodemon index.js" reinicialização automática do servidor
    npm start --> executa o script acima

  "devDependencies": {
    "nodemon": "^2.0.7"       Dependência somente para Devs
  }
*/

const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(6000, () => console.log('Servidor rodando na porta 6000.'))

