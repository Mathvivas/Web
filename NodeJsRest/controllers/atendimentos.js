const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.listar(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscarPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
        //console.log(req.body)   // Criar o Body no Postman
        const atendimento = req.body

        Atendimento.adicionar(atendimento, res)
    })
}