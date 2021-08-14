import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = () => {
    const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, 
        backgroundColor: 'blueviolet', color: 'white', width: '100%', borderRadius: 8}

    const textoLabel = "Nome";

    const funcaoNomeBotao = () => {
        return "Enviar"
    }

    return (
        <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', 
            padding: 12, borderRadius: 8}}>
                <label className="rotulo" htmlFor="nome" style={{display: 'block', 
                    marginBottom: 4}}>{textoLabel}</label>

                <input type="text" id="nome" style={{paddingTop: 8, paddingBottom: 8, 
                    borderStyle: 'hidden', width: '100%', borderRadius: 8}}/>
                
                <button style={estilosBotao}>
                    {funcaoNomeBotao()}
                </button>
        </div>
    )
}

ReactDOM.render(
    // Componente App sendo colocado como filho da div com id root
    <App />,
    document.querySelector("#root")
)