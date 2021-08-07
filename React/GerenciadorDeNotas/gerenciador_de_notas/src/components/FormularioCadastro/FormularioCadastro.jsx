import React, { Component } from "react";
import "./style.css";

export class FormularioCadastro extends Component {

  // Para que o Formulario possa receber uma propriedade, é necessário o props
  constructor(props) {
    super(props);
    this.titulo = "";   // Inicialização
    this.texto = "";
    this.categoria = "Sem Categoria";
    this.state = { categorias: [] };
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;  // Atribui o que estiver no campo Título
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

      // Lembrar do bind do this --> this é dinâmico

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={ this._criarNota.bind(this) }
      >
        <select onChange={ this._handleMudancaCategoria.bind(this) } className="form-cadastro_input">
          <option>Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>
          })}
        </select>
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