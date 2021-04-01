import BotaoConcluir from './concluirTarefa.js'
import BotaoDeletar from './deletarTarefa.js'

export const handleNovoItem = (evento) => {

    evento.preventDefault()     // Previne o form de enviar o dado (recarregar a página)

    // parse: Transforma em Objeto
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []   // Pega objeto ou retorna array vazio
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)

    const dataFormatada = data.format('DD/MM/YYYY')

    const dados = {
        valor, 
        dataFormatada
    }

    const tarefasAtualizadas = [...tarefas, dados]      // Pega as tarefas e os dados

    const criaTarefa = criarTarefa(dados)

    lista.appendChild(Tarefa)

    // Dados são armazenados enquanto a sessão estiver aberta
    //sessionStorage.setItem("tarefas", JSON.stringify(dados))
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

    input.value = " "
}

export const Tarefa = ({ valor, dataFormatada }) => {
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')        // Adiciona uma classe ao elemento

    const conteudo = `<p class="content">${dataFormatada} - ${valor}</p>`

    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoDeletar())

    return tarefa    
}