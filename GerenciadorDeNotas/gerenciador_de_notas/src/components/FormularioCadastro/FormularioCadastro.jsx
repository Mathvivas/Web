import React, { Component } from "react";
import "./style.css";

export class FormularioCadastro extends Component {

  // Para que o Formulario possa receber uma propriedade, é necessário o props
  constructor(props) {
    super(props);
    this.titulo = "";   // Inicialização
    this.texto = "";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;  // Atribui o que estiver no campo Título
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

      // Lembrar do bind do this --> this é dinâmico

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={ this._criarNota.bind(this) }>
        <input 
          type="text" 
          placeholder="Título" 
          className="form-cadastro_input" 
          onChange={ this._handleMudancaTitulo.bind(this) }
        />
        <textarea 
          rows={ 15 } 
          placeholder="Escreva sua nota..." 
          className="form-cadastro_input" 
          onChange={ this._handleMudancaTexto.bind(this) }
        />
        <button className="form-cadastro_input form-cadastro_submit" >Criar Nota</button>
      </form>
    );
  }
}