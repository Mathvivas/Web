const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Atendimento {
    adicionar(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = { ...atendimento, dataCriacao, data }   // array -> tudo que estiver dentro de atendimento e a data
        const sql = 'INSERT INTO Atendimentos SET ?'
        
        conexao.query(sql, atendimento, (erro, resultados) => {
            if ( erro ) {
                console.log(erro)

            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new Atendimento