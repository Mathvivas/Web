import React, { Component } from 'react';
import { ListaDeNotas } from "./components/ListaDeNotas/ListaDeNotas";
import './assets/App.css';
import './assets/index.css';
import { FormularioCadastro } from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {

  constructor() {
    super();
    this.notas = [];
  }

  criarNota(titulo, texto) {
  }

  render() {
    return (    // Retorna somente uma única estrutura
      <section className="conteudo">
        <FormularioCadastro criarNota={ this.criarNota }/>
        <ListaDeNotas notas={ this.notas }/>
      </section>
    );
  }
}

export default App;
