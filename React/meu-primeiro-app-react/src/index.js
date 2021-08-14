import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import doc1 from "./images/doc1.jpg";

const App = () => {
  const estilosBotao = {
    marginTop: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "blueviolet",
    color: "white",
    width: "100%",
    borderRadius: 8,
  };

  const textoLabel = "Nome";

  const funcaoNomeBotao = () => {
    return "Enviar";
  };

  const docNomes = {
    doc1: "José da Silva",
    doc2: "Maria da Silva",
    doc3: "Jaqueline da Silva",
  };

  const estilosComponentePrincipal = () => {
    return {
      width: 1280,
      margin: "auto",
      border: "1px solid black",
      backgroundColor: "#EEE",
      borderRadius: 8,
      padding: 12,
      textAlign: "center",
    };
  };

  return (
    <div>
      <div
        style={{
          margin: "auto",
          width: 768,
          backgroundColor: "#EEE",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <label
          className="rotulo"
          htmlFor="nome"
          style={{ display: "block", marginBottom: 4 }}
        >
          {textoLabel}
        </label>

        <input
          type="text"
          id="nome"
          style={{
            paddingTop: 8,
            paddingBottom: 8,
            borderStyle: "hidden",
            width: "100%",
            borderRadius: 8,
          }}
        />

        <button style={estilosBotao}>{funcaoNomeBotao()}</button>
      </div>

      <div style={estilosComponentePrincipal()}>
        <h2>Profissionais de Saúde</h2>
        <div
          style={{
            margin: 8,
            border: "1px solid #DDD",
            borderRadius: 8,
            padding: 8,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div className="profissional">
            <p>{docNomes.doc1}</p>
            <img src={doc1} />
          </div>

          <div className="profissional">
            <p>{docNomes.doc2}</p>
            <img src={process.env.PUBLIC_URL + "doc2.jpg"} />
          </div>

          <div className="profissional">
            <p>{docNomes.doc3}</p>
            <img src="https://images.unsplash.com/photo-1613918108466-292b78a8ef95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" />
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  // Componente App sendo colocado como filho da div com id root
  <App />,
  document.querySelector("#root")
);
