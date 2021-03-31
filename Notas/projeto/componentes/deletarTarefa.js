// Componenente --- Letra Maiúscula
const BotaoDeletar = () => {
    const btnDeleta = document.createElement('button')

    btnDeleta.innerText = 'Deletar'
    btnDeleta.addEventListener('click', deletarTarefa)

    return btnDeleta
}

const deletarTarefa = (evento) => {
    const btnDeleta = evento.target
    
    const tarefaCompleta = btnDeleta.parentElement

    tarefaCompleta.remove()

    return btnDeleta
}

export default BotaoDeletar