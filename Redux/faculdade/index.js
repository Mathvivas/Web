const redux = require('redux');
const prompts = require('prompts');

// Essa função é uma criadora de ação
const realizarVestibular = (nome, cpf) => {
    const entre6e10 = Math.random() <= 0.7
    const nota = entre6e10 ? 6 + Math.random() * 4 : Math.random() * 5
    console.log(nota)
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

const todosOsReducers = redux.combineReducers({
    historicoVestibular: historicoVestibularReducer,
    historicoMatriculas: historicoMatriculasReducer
})

const store = redux.createStore(todosOsReducers)

const inicio = async () => {
    const menu = "1 - Realizar Vestibular\n2 - Realizar Matrícula\n3 - Visualizar Meu Status\n" + 
    "4 - Visualizar a Lista de Aprovados\n0 - Sair"

    let resposta
    do {
        try {
            resposta = await prompts({
                type: 'number', 
                name: 'opcao',
                message: menu
            })
            switch ( resposta.opcao ) {
                case 1: {
                    const { nome } = await prompts({
                        type: 'text',
                        name: 'nome',
                        message: 'Digite seu nome: '
                    })
                    const { cpf } = await prompts({
                        type: 'text',
                        name: 'cpf',
                        message: 'Digite seu CPF: '
                    })
                    const acao = realizarVestibular(nome, cpf)
                    store.dispatch(acao)
                    break
                }
                case 2: {
                    const { cpf } = await prompts({
                        type: 'text',
                        name: 'cpf',
                        message: 'Digite seu CPF: '
                    })
                    const aprovado = store.getState().historicoVestibular.find(
                        aluno => aluno.cpf === cpf && aluno.nota >= 6
                    )
                    if ( aprovado ) {
                        store.dispatch(realizarMatricula(cpf, 'M'))
                        console.log("OK, matriculado!")
                    } else {
                        store.dispatch(realizarMatricula(cpf, 'NM'))
                        console.log("Infelizmente você não foi aprovado no vestibular ainda.")
                    }
                    break;
                }
                case 3: {
                    const { cpf } = await prompts({
                        type: 'text',
                        name: 'cpf',
                        message: 'Digite seu CPF: '
                    })
                    const aluno = store.getState().historicoMatriculas.find(
                        a => a.cpf === cpf
                    )
                    if ( aluno ) {
                        console.log(`Seu Status é: ${aluno.status}.`)
                    } else {
                        console.log('Seu nome não consta na lista de matrículas.')
                    }
                    break
                }
                case 4: {
                    const listaAprovados = store.getState().historicoVestibular.filter(
                        aluno => aluno.nota >= 6
                    )
                    console.log(listaAprovados)
                    break
                }
                case 0: {
                    console.log("Até mais!")
                    break
                }
                default: {
                    console.log("Opção Inválida!")
                    break
                }
            }
        } catch (err) {
            console.log("Opção Inválida!")
        }

    } while ( resposta.opcao !== 0 );
}

inicio()
