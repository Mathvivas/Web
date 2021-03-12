import React, { Component } from 'react';   // imrc
import "./style.css"

class CardNota extends Component {      // cc TAB
    render() { 
        return (
          <section className="card-nota">
            <header className="card-nota_cabecalho">
              <h3 className="card-nota_titulo">Título</h3>
            </header>
            <p className="card-nota_texto">Escreva sua Nota</p>
          </section>
        );
    }
}
 
export default CardNota;