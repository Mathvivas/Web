import { handleNovoItem } from './componentes/criarTarefa.js'

// seleciona a tag que possui esse data-attribute (data-form-button)
const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)

// sudo npm install -g live-server
// na pasta projeto -> digitar: live-server
