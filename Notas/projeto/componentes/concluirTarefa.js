// Componenente --- Letra Maiúscula
const BotaoConcluir = (atualiza, id) => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = "Concluir"

    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id))

    return botaoConclui
}

const concluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    // Ao clicar no botão, inverte o valor
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida

    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))

    atualiza()
}

export default BotaoConcluir