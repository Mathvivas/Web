import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./style.css";

export class ListaDeNotas extends Component {
    render() {
        return (    // dentro de chaves -> código javascript
          <ul className="lista-notas">
              { this.props.notas.map((nota, index) => {
                return (
                  <li className="lista-notas_item" key={ index }>
                    <CardNota 
                      indice={ index }
                      apagarNota={ this.props.apagarNota } 
                      titulo={ nota.titulo } 
                      texto={ nota.texto }/>
                  </li>
                );
              }) }
          </ul>
        );
    }
}