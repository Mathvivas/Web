import React, { Component } from "react";
import CardNota from "./CardNota/CardNota";
import "./style.css";

export class ListaDeNotas extends Component {
    render() {
        return (    // dentro de chaves -> código javascript
          <ul className="lista-notas">
              { Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                return (
                  <li className="lista-notas_item" key={ index }>
                    <div>{ categoria }</div>
                    <CardNota />
                  </li>
                );
              }) }
          </ul>
        );
    }
}