// Componenente --- Letra Maiúscula
const BotaoDeletar = (atualiza, id) => {
    const btnDeleta = document.createElement('button')

    btnDeleta.classList.add('delete-button')
    btnDeleta.innerText = 'Deletar'
    btnDeleta.addEventListener('click', () => deletarTarefa(atualiza, id))

    return btnDeleta
}

const deletarTarefa = (atualiza, id) => {
    const index = id

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefasCadastradas.splice(index, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    atualiza()
}

export default BotaoDeletar