const criarTarefa = (evento) => {
    evento.preventDefault()     // Previne o form de enviar o dado (recarregar a página)
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    input.valor = " "
}

// seleciona a tag que possui esse data-attribute (data-form-button)
const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', (evento) => criarTarefa)
