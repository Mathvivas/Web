const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET.'))

    app.post('/atendimentos', (req, res) => {
        //console.log(req.body)   // Criar o Body no Postman
        const atendimento = req.body

        Atendimento.adicionar(atendimento)
        res.send('POST atendimento.')
    })
}