import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'       // react bootstrap
import '@fortawesome/fontawesome-free/css/all.css'  // react font awesome
import faker from 'faker'
import Cartao from './Cartao'
import Pedido from './Pedido'
import Feedback from './Feedback'
import Comentario from './Comentario'
import CartaoComentario from './CartaoComentario'
import ListaComentarios from './ListaComentarios'

export const App = () => {
    const funcaoOK = () => alert("Obrigado pelo feedback")
    const funcaoNOK = () => alert("Vamos verificar")
    const textoOK = "Recebi"
    const textoNOK = "Ainda não recebi"
    const feedbackJSX = <Feedback 
                            textoOK={textoOK}
                            textoNOK={textoNOK}
                            funcaoOK={funcaoOK}
                            funcaoNOK={funcaoNOK}
                        />

    const textoOK2 = "Aprovar"
    const textoNOK2 = "Não aprovar"
    const funcaoOK2 = () => alert("OK, aprovado")
    const funcaoNOK2 = () => alert("OK, não aprovado")
    const feedback = <Feedback textoOK={textoOK2} textoNOK={textoNOK2} funcaoOK={funcaoOK2} 
        funcaoNOK={funcaoNOK2} />

    return (
        <div>
            {/* ___________ Pedidos ___________ */}
            <div className="container border rounded mt-2">

                <div className="row border-bottom m-2">
                    <h1 className="display-5 text-center">Seus Pedidos</h1>
                </div>

                <div className="row">
                    <div className="col-sm-8 col-md-6 m-2">
                        {/* Cartão */}
                        <Cartao cabecalho="22/04/2022">
                            <Pedido
                                icone="fas fa-hdd fa-2x" 
                                titulo="SSD" 
                                descricao="SDD Kingston A400 - SATA"/>
                            {feedbackJSX}
                        </Cartao>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-8 col-md-6 m-2">
                        {/* Cartão */}
                        <Cartao cabecalho="19/04/2022">
                            <Pedido
                                icone="fas fa-book fa-2x" 
                                titulo="Livro" 
                                descricao="Concrete Mathematics - Donald Knuth"/>
                            {feedbackJSX}
                        </Cartao>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-8 col-md-6 m-2">
                        {/* Cartão */}
                        <Cartao cabecalho="25/01/2022">
                            <Pedido
                                icone="fas fa-laptop fa-2x" 
                                titulo="Notebook" 
                                descricao="Notebook Dell - 8Gb - i7"/>
                            {feedbackJSX}
                        </Cartao>
                    </div>
                </div>

            </div>
            {/* ___________ Fim dos Pedidos ___________ */}
            
            {/* ___________ Cartões de Usuários ___________ */}
            {/* Utilizando faker https://www.npmjs.com/package/faker */}
            <div>

                <ListaComentarios>
                    <div className="row">
                        <div className="col-12">
                            <CartaoComentario>
                                <Comentario 
                                    nome={faker.name.findName()}
                                    foto={faker.internet.avatar()}
                                    texto={faker.lorem.sentence(2)}
                                    data={faker.date.recent().toLocaleTimeString()} />
                                    {feedback}
                            </CartaoComentario>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <CartaoComentario>
                                <Comentario 
                                    nome={faker.name.findName()}
                                    foto={faker.internet.avatar()}
                                    texto={faker.lorem.sentence(2)}
                                    data={faker.date.recent().toLocaleTimeString()} />
                                    {feedback}
                            </CartaoComentario>
                        </div>
                    </div>
                </ListaComentarios>


            </div>
            {/* ___________ Fim dos Cartões de Usuários ___________ */}
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)