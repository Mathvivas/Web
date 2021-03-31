const criarTarefa = (evento) => {
    evento.preventDefault()     // Previne o form de enviar o dado (recarregar a página)
    
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')        // Adiciona uma classe ao elemento

    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo
    lista.appendChild(tarefa)

    input.value = " "
}

// seleciona a tag que possui esse data-attribute (data-form-button)
const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)
