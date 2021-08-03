import React, { Component } from 'react';
import { ListaDeNotas } from "./components/ListaDeNotas/ListaDeNotas";
import { FormularioCadastro } from './components/FormularioCadastro/FormularioCadastro';
import { ListaDeCategorias } from './components/ListaDeCategorias/ListaDeCategorias';

import './assets/App.css';
import './assets/index.css';

class App extends Component {

	constructor() {
		super();
		this.state = {
			notas: [],
			categorias: [],
		};
	}

	criarNota(titulo, texto, categoria) {
		const novaNota = { titulo, texto, categoria };   // Objeto com três propriedades
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

	adicionarCategoria(nomeCategoria) {
		const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
		const novoEstado = { ...this.state, categorias: novoArrayCategorias };
		this.setState(novoEstado);
	}

	render() {
		return (    // Retorna somente uma única estrutura
			<section className="conteudo">
				<FormularioCadastro
					categorias={this.state.categorias}
					criarNota={this.criarNota.bind(this)}
				/>
				<main className="conteudo-principal">
					<ListaDeCategorias
						adicionarCategoria={this.adicionarCategoria.bind(this)}
						categorias={this.state.categorias}
					/>
					<ListaDeNotas
						apagarNota={this.deletarNota.bind(this)}
						notas={this.state.notas}
					/>
				</main>
			</section>
		);
	}
}

/*
	Props são propriedades que passamos de um componente para outro quando o componente 
	filho precisa de uma informação que o componente pai possui.

	Já o state é uma forma de salvar informações que serão observadas pelo Virtual Dom.
*/

export default App;
