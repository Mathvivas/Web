import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { Global } from "./Components/GlobalStyle";

function App() {
	return (
		<>
			<GlobalStyle />
			<Cabecalho />
			<Container />
		</>
	);
}

export default App;
