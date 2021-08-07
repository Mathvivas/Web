import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");

  return (
    <form onSubmit={ (evento) => { 
        evento.preventDefault();
        console.log(nome) 
    }}>
      <TextField
        value={ nome }
        onChange={ (evento) => {
            setNome(evento.target.value);
        } }
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={ sobrenome }
        onChange={ (evento) => {
            setSobrenome(evento.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" color="primary" defaultChecked />}
      />

      <FormControlLabel
        label="Novidades"
        control={ <Switch name="novidades" color="primary" defaultChecked /> }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
