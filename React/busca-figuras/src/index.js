import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
// Escolha o Tema que Desejar
// https://primefaces.org/primereact/showcase/#/setup
import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css'

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)