import { carregarTarefa } from './carregarTarefa.js'
import BotaoConcluir from './concluirTarefa.js'
import BotaoDeletar from './deletarTarefa.js'

export const handleNovoItem = (evento) => {

    evento.preventDefault()     // Previne o form de enviar o dado (recarregar a página)

    // parse: Transforma em Objeto
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []   // Pega objeto ou retorna array vazio
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)

    const horario = data.format('HH:mm')

    const dataFormatada = data.format('DD/MM/YYYY')
    const concluida = false

    const dados = {
        valor, 
        dataFormatada,
        horario,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados]      // Pega as tarefas e os dados

    // Dados são armazenados enquanto a sessão estiver aberta
    //sessionStorage.setItem("tarefas", JSON.stringify(dados))
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

    input.value = " "

    carregarTarefa()
}

export const Tarefa = ({ valor, horario, concluida }, id) => {
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')        // Adiciona uma classe ao elemento

    const conteudo = `<p class="content">${horario} - ${valor}</p>`

    if ( concluida ) {
        tarefa.classList.add('done')
    }

    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConcluir(carregarTarefa, id))
    tarefa.appendChild(BotaoDeletar(carregarTarefa, id))

    return tarefa    
}