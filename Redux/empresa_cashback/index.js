const redux = require('redux');

// Essa função é a criadora de ação
const criarContrato = (nome, taxa) => {
    // Esse JSON que ela devolve é uma ação
    return {
        type: 'CRIAR_CONTRATO',
        payload: {
            nome,
            taxa
        } 
    }
}

// Essa função é a criadora de ação
const cancelarContrato = (nome) => {
    // Esse JSON que ela devolve é uma ação
    return{
        type: "CANCELAR_CONTRATO",
        payload: {
            nome
        }
    }
}

// Essa função é a criadora de ação
const solicitarCashback = (nome, valor) => {
    // Esse JSON que ela devolve é uma ação
    return {
        type: "SOLICITAR_CASHBACK",
        payload: {
            nome, 
            valor
        }
    }
}

// Essa função é um reducer
const historicoDePedidosCashbackReducer = (historicoDePedidosCashbackAtual = [], acao) =>{
    if( acao.type === "SOLICITAR_CASHBACH" ){
        return[
            ...historicoDePedidosCashbackAtual,
            acao.payload
        ]
    }
    return historicoDePedidosCashbackAtual
}

// Essa função é um reducer
// Por isso ela recebe um pedaço do estado e a ação sobre a qual talvez opere
const caixaReducer = (dinheiroEmCaixa = 0, acao) => {
    return acao.type === "SOLICITAR_CASHBACK" ? 
    dinheiroEmCaixa - acao.payload.valor : 
    acao.type === "CRIAR_CONTRATO" ?
    dinheiroEmCaixa + acao.payload.taxa : 
    dinheiroEmCaixa
}

// Essa função é um reducer
const contratosReducer = (listaContratosAtual = [], acao) => {
    if ( acao.type === "CRIAR_CONTRATO" ){
        return [
            ...listaContratosAtual, acao.payload
        ]
    }
    if ( acao.type === "CANCELAR_CONTRATO" ){
        return listaContratosAtual.filter(c => c.nome !== acao.payload.nome)
    }
    return listaContratosAtual
}

// Vamos construir um objeto chamado "store"
// Store: Todos os reducers e as partes de estado que cada um manipula

// Combinar os seus reducers em uma coisa só
const todosOsReducers = redux.combineReducers({
    historicoDePedidosCashback: historicoDePedidosCashbackReducer,
    caixa: caixaReducer,
    contratos: contratosReducer
})

const store = redux.createStore(todosOsReducers)

// store.dispatch(criarContrato('José', 50))
// console.log(store.getState())

// const acaoContratoMaria = criarContrato('Maria', 50)
// store.dispatch(acaoContratoMaria)
// console.log(store.getState())

// const acaoCashbackMaria = solicitarCashback('Maria', 10)
// store.dispatch(acaoCashbackMaria)
// console.log(store.getState())

// const acaoCashbackJose = solicitarCashback('Jose', 20)
// store.dispatch(acaoCashbackJose)
// console.log(store.getState())

// const acaoCancelarContratoMaria = cancelarContrato('Maria')
// store.dispatch(acaoCancelarContratoMaria)
// console.log(store.getState())


const transacao = (store) => {
    const nomes = ["Maria", "José", "Dom", "Brian"]

    const funcoes = {
        0: (nome) => {
            store.dispatch(criarContrato(nome, 50))
        },
        1: (nome) => {
            store.dispatch(cancelarContrato(nome))
        },
        2: (nome) => {
            const valor = 10 + Math.random() * 20
            store.dispatch(solicitarCashback(nome, valor))
        },
    }

    const funcaoSorteada = Math.floor(Math.random() * 3)
    funcoes[funcaoSorteada](nomes[Math.floor(Math.random() * nomes.length)])
    console.log(store.getState())
}

setInterval(() => transacao(store), 5000)