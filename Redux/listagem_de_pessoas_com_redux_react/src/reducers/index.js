const pessoasReducer = () => {
    return [
        {
            nome: 'Cristina', sobrenome: 'Silva', endereco: 'Rua A, 34'
        },
        {
            nome: 'Alan', sobrenome: 'Alves', endereco: 'Rua B, 52'
        },
        {
            nome: 'Jorge', sobrenome: 'Mendes', endereco: 'Rua C, 115'
        },
    ]
}

const pessoaSelecionadaReducer = (pessoaSelecionada = null, acao) => {
    if ( acao.type === "PESSOA_SELECIONADA" ) {
        return acao.payload.pessoa
    }
    return pessoaSelecionada
}

export default combineReducers({
    pessoas: pessoasReducer,
    pessoaSelecionada: pessoaSelecionadaReducer
})