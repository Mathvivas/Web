import React, { Component } from "react";
import "./style.css";

export class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state = { categorias: [] };
        this._novasCategorias = this._novasCategorias.bind(this);
    }
    
    /*
        Esse método é chamado assim que o componente é criado e está pronto, 
        é dentro desse método que devemos iniciar chamadas para API ou executar 
        código que tem efeito colateral.
    */
    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias });
    }

    _handleEventoInput(evento) {
        if ( evento.key === "Enter" ) {
            let valorCategoria = evento.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    { this.state.categorias.map((categoria, index) => {
                        return (
                            <li key={index} className="lista-categorias_item">{categoria}</li>
                        )
                    })}
                </ul>
                <input 
                    type="text" 
                    className="lista-categorias_input" 
                    placeholder="Inserir Categoria"
                    onKeyUp={ this._handleEventoInput.bind(this) }
                />
            </section>
        )
    }
}
