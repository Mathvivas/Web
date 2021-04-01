import BotaoConcluir from './componentes/concluirTarefa.js'
import BotaoDeletar from './componentes/deletarTarefa.js'

const handleNovoItem = (evento) => {

    evento.preventDefault()     // Previne o form de enviar o dado (recarregar a página)

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

    const criaTarefa = criarTarefa(dados)

    lista.appendChild(criaTarefa)

    input.value = " "
}

const criarTarefa = ({ valor, dataFormatada }) => {
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')        // Adiciona uma classe ao elemento

    const conteudo = `<p class="content">${dataFormatada} - ${valor}</p>`

    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoDeletar())

    return tarefa    
}

// seleciona a tag que possui esse data-attribute (data-form-button)
const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)

// sudo npm install -g live-server
// na pasta projeto -> digitar: live-server
