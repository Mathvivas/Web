import React, { Component } from "react"
import CardNota from "./CardNota/CardNota"

export class ListaDeNotas extends Component {
    render() {
        return (    // dentro de chaves -> código javascript
          <ul>
              { Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                return (
                  <li key={ index }>
                    <div>{ categoria }</div>
                    <CardNota />
                  </li>
                );
              }) }
          </ul>
        );
    }
}