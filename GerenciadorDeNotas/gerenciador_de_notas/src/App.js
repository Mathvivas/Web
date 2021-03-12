import React, { Component } from 'react';
import { ListaDeNotas } from "./components/ListaDeNotas/ListaDeNotas";
import './assets/App.css';
import './assets/index.css';
import { FormularioCadastro } from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };   // Objeto com duas propriedades
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = { 
      notas: novoArrayNotas
     };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (    // Retorna somente uma única estrutura
      <section className="conteudo">
        <FormularioCadastro criarNota={ this.criarNota.bind(this) }/>
        <ListaDeNotas 
          apagarNotas={ this.deletarNota.bind(this) }
          notas={ this.state.notas }/>
      </section>
    );
  }
}

export default App;
