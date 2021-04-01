import { ordenarDatas, removerDatasRepetidas } from "../service/data.js"
import { criaData } from "./criarData.js"

export const carregarTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = " "
    const datasUnicas = removerDatasRepetidas(tarefasCadastradas)

    ordenarDatas(datasUnicas)

    datasUnicas.forEach( (dia) => {
        lista.appendChild(criaData(dia))
    } )
}