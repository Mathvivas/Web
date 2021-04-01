import { Tarefa } from "./criarTarefa.js"

export const carregarTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = " "
    tarefasCadastradas.forEach( (tarefa) => {
        lista.appendChild(Tarefa(tarefa))
    } )
}