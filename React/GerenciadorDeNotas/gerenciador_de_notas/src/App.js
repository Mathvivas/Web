import React, { Component } from 'react';
import { ListaDeNotas } from "./components/ListaDeNotas/ListaDeNotas";
import { FormularioCadastro } from './components/FormularioCadastro/FormularioCadastro';
import { ListaDeCategorias } from './components/ListaDeCategorias/ListaDeCategorias';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

import './assets/App.css';
import './assets/index.css';

class App extends Component {

	constructor() {
		super();
		this.categorias = new Categorias();
		this.notas = new ArrayDeNotas();
	}

	render() {
		return (    // Retorna somente uma única estrutura
			<section className="conteudo">
				<FormularioCadastro
					categorias={this.categorias}
					criarNota={this.notas.adicionarNota.bind(this.notas)}
				/>
				<main className="conteudo-principal">
					<ListaDeCategorias
						adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
						categorias={this.categorias}
					/>
					<ListaDeNotas
						apagarNota={this.notas.apagarNotas.bind(this.notas)}
						notas={this.notas}
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
