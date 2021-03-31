// Componenente --- Letra Maiúscula
const BotaoConcluir = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = "Concluir"

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement      // Pega o pai do botão (li)

    tarefaCompleta.classList.toggle('done')         // Ativa a classe done
}

export default BotaoConcluir