import React from 'react'
import ReactDOM from 'react-dom'

import EstacaoClimatica from './EstacaoClimatica'
import Loading from './Loading'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

    constructor(props) {
        super(props)
        console.log('Construtor entrou em execução')
    }

    state = {
        lat: null,
        lng: null,
        estacao: null,
        data: null,
        icone: null,
        mensagemErro: null
    }

    componentDidMount() {
        console.log("ComponentDidMount")
        this.obterLocalizacao()
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate")
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount")
    }

    obterEstacao = (data, latitude) => {
        const anoAtual = data.getFullYear()
        const d1 = new Date(anoAtual, 5, 23)
        const d2 = new Date(anoAtual, 8, 23)
        const d3 = new Date(anoAtual, 11, 22)
        const d4 = new Date(anoAtual, 2, 21)
        const sul = latitude < 0

        if ( data >= d1 && data < d2 ) {
            return sul ? 'Inverno' : 'Verão'
        }
        if ( data >= d2 && data < d3 ) {
            return sul ? 'Primavera' : 'Outono'
        }
        if ( data >= d3 || data < d4 ) {
            return sul ? 'Verão' : 'Inverno'
        }
        return sul ? 'Outono' : 'Primavera'
    }

    obterLocalizacao = () => {
        window.navigator.geolocation.getCurrentPosition(
            (posicao) => {
                let data = new Date()
                let estacao = this.obterEstacao(data, posicao.coords.latitude)
                let icone = this.icones[estacao]
                this.setState({
                    lat: posicao.coords.latitude,
                    lng: posicao.coords.longitude,
                    estacao: estacao,
                    data: data.toLocaleTimeString(),
                    icone: icone
                })
            },
            (erro) => {
                console.log(erro)
                this.setState({
                    mensagemErro: 'Localização Bloqueada'
                })
            }
        )
    }

    icones = {
        'Primavera': 'fa-seedling',
        'Verão': 'fa-umbrella-beach',
        'Outono' : 'fa-tree',
        'Inverno' : 'fa-snowman'
    }

    render() {
        console.log('Render')
        //this.obterLocalizacao()
        // let texto = 'Clique no botão para saber sua estação climática'
        // if ( this.state.lat ) {
        //     texto = `Coordenadas: ${this.state.lat}, ${this.state.lng}. Data: ${this.state.data}`
        // }
        return (
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {
                            (!this.state.lat && !this.state.mensagemErro) ?
                            <Loading mensagem="Por favor, responda à solicitação de localização"/>
                            :
                            this.state.mensagemErro ?
                            <p className="border rounded p-2 fs-1 text-center">
                                É preciso dar permissão de acesso à localização. Atualize a página e tente de novo.
                            </p>
                            :
                            <EstacaoClimatica 
                                icone={this.state.icone}
                                estacao={this.state.estacao}
                                lat={this.state.lat}
                                lng={this.state.lng}
                                mensagemErro={this.state.mensagemErro}
                                obterLocalizacao={this.obterLocalizacao}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

// export const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (posicao) => console.log(posicao)
//     )

//     return (
//         <div>
//             Meu App
//         </div>
//     )
// }

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)