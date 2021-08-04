import React, { Component } from "react";
import "./style.css";

export class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state = { categorias: [] };
    }
    
    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias) {
        this.setState(...this.state, categorias);
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