// Copiar um repositório com um novo nome
// git clone [link do reṕositório] [novo nome do repositório]
// git remote set-url origin [link do novo repositório]
// git remote -v

import React from 'react'
import Accordion from './Accordion'
import Busca from './Busca'

const itens = [
    {
        titulo: "Java",
        conteudo: "Linguagem compilada e interpretada"
    },
    {
        titulo: "Python",
        conteudo: "Linguagem interpretada e dinamicamente tipada"
    },
    {
        titulo: "Javascript",
        conteudo: "Linguagem interpretada. Executa do lado do cliente e do lado do servidor"
    }
]

const App = () => {
    const expressaoJSX = <Busca />

    return (
        <div>
            <div>
                {expressaoJSX}
            </div>

            <br /><br /><br /><br />

            <Accordion itens={itens} />
        </div>
    )
}

export default App