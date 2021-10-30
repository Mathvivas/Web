const redux = require('redux');
const prompts = require('prompts');

// Essa função é uma criadora de ação
const realizarVestibular = (nome, cpf) => {
    const entre6e10 = Math.random() <= 0.7
    const nota = entre6e10 ? 6 + Math.random() * 4 : Math.random() * 5
    // Esse JSON que ela devolve é uma ação
    return {
        type: 'REALIZAR_VESTIBULAR',
        payload: {
            nome,
            cpf,
            nota
        }
    }
}

// Essa função é uma criadora de ação
const realizarMatricula = (cpf, status) => {
    // Esse JSON que ela devolve é uma ação
    return {
        type: 'REALIZAR_MATRICULA',
        payload: {
            cpf,
            status
        }
    }
}

// Essa função é um reducer
const historicoVestibularReducer = (historicoVestibularAtual = [], acao) => {
    if ( acao.type === "REALIZAR_VESTIBULAR" ) {
        return [...historicoVestibularAtual, acao.payload]
    }
    return historicoVestibularAtual
}

// Essa função é um reducer
const historicoMatriculasReducer = (historicoMatriculasAtual = [], acao) => {
    if ( acao.type === "REALIZAR_MATRICULA" ) {
        return [...historicoMatriculasAtual, acao.payload]
    }
    return historicoMatriculasAtual
}

