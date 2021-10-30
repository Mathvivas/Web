import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
// Escolha o Tema que Desejar
// https://primefaces.org/primereact/showcase/#/setup
import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css'

import { createStore } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)