( () => {       // código dentro de uma função anônima, só existe aqui dentro

    const criarTarefa = (evento) => {
        evento.preventDefault()     // Previne o form de enviar o dado (recarregar a página)
        
        const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]')
        const valor = input.value

        const tarefa = document.createElement('li')
        tarefa.classList.add('task')        // Adiciona uma classe ao elemento

        const conteudo = `<p class="content">${valor}</p>`

        tarefa.innerHTML = conteudo
        tarefa.appendChild(botaoConcluir())
        tarefa.appendChild(BotaoDeletar())

        lista.appendChild(tarefa)

        input.value = " "
    }

    // seleciona a tag que possui esse data-attribute (data-form-button)
    const novaTarefa = document.querySelector('[data-form-button]')

    novaTarefa.addEventListener('click', criarTarefa)

    // Componenente --- Letra Maiúscula
    const BotaoConcluir = () => {
        const botaoConclui = document.createElement('button')

        botaoConclui.classList.add('check-button')
        botaoConclui.innerText = "Concluir"

        botaoConclui.addEventListener('click', concluirTarefa)

        return conclui
    }

    const concluirTarefa = (evento) => {
        const botao = evento.target

        const tarefaCompleta = botao.parentElement      // Pega o pai do botão (li)

        tarefaCompleta.classList.toggle('done')         // Ativa a classe done
    }

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

})()
