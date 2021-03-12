import React from 'react';
import { ListaDeNotas } from "./components/ListaDeNotas"
import './App.css';
import { FormularioCadastro } from './components/FormularioCadastro';

function App() {
  return (    // Retorna somente uma estrutura
    <section>
      <FormularioCadastro/>
      <ListaDeNotas/>
    </section>
  );
}

export default App;
