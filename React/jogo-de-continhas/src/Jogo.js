import { Button } from 'primereact/button'
import React, { Component } from 'react'
import _ from 'underscore'

export default class Jogo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alternativas: Array(5).fill(undefined),
            intervaloDeAtualizacao: 5000,
            tempoRestante: 5
        }
    }
        valorInicial = 1
        valorFinal = 10

        timerGeral = null
        timerSegundoASegundo = null

        operacoes = [
            {
                simbolo: '+', operacao: (a, b) => a + b,
            },
            {
                simbolo: '-', operacao: (a, b) => a - b
            }
        ]

        gerarConta = () => {
            let n1 = Math.floor(Math.random() * this.valorFinal) + this.valorInicial
            let n2 = Math.floor(Math.random() * this.valorFinal) + this.valorInicial
            let oQueFazer = Math.floor(Math.random() * this.operacoes.length)
            let simbolo = this.operacoes[oQueFazer]['simbolo']
            let resultado = this.operacoes[oQueFazer]['operacao'](n1, n2)
            return { n1, n2, simbolo, resultado }
        }

        gerarAlternativas = (resultado) => {
            let aux = [resultado]
            while ( aux.length < 5 ) {
                let n = Math.floor(Math.random() * this.valorFinal) + this.valorInicial
                if ( !aux.includes(n) ) aux.push(n)
            }
            return _.shuffle(aux)
        }

        gerarJogo = () => {
            let { n1, n2, simbolo, resultado } = this.gerarConta()
            let alternativas = this.gerarAlternativas(resultado)
            this.setState({
                n1, n2, resultado, simbolo, alternativas, tempoRestante: 5
            })
        }

        encerrar = () => {
            clearInterval(this.timerGeral)
            clearInterval(this.timerSegundoASegundo)
        }

        componentDidMount() {
            this.iniciarRodada()
        }

        componentWillUnmount() {
            this.encerrar()
        }

        iniciarRodada = () => {
            clearInterval(this.timerGeral)
            clearInterval(this.timerSegundoASegundo)
            let executar = (func, temp) => {
                func()
                this.timerSegundoASegundo = setInterval(() => {
                    this.setState({ tempoRestante: this.state.tempoRestante - 1 })
                }, 1000)
                return setInterval(func, temp)
            }
            this.timerGeral = executar(this.gerarJogo, this.state.intervaloDeAtualizacao)
        }
    

    render() {
        const conta = (
            <div className={styles.conta}>
                {
                                                                            // Utilização de () -> return implícito
                    [this.state.n1, this.state.simbolo, this.state.n2, '=', '...'].map( (e, i) => (
                        <div key={i.toString()} className={styles.valor}>
                            {e}
                        </div>
                    ))
                }
            </div>
        )

        const alternativas = (
            <div className={styles.alternativas}>
                {
                    this.state.alternativas.map((alternativa, indice) => (
                        <Button
                            key={indice.toString()}
                            label={alternativa?.toString()}
                            className={`${styles.valor} ${styles.alternativa}`}
                        />
                    ))
                }
            </div>
        )

        const tempoRestante = (
            <div className={styles.tempoRestante}>
                {this.state.tempoRestante}
            </div>
        )

        return (
            <div>
                {conta}
                {alternativas}
                {tempoRestante}
            </div>
        )
    }
}

const styles = {
    alternativa: 'p-button-outlined',
    alternativas: 'flex justify-content-evenly align-items-center border-round shadow-2 h-4rem mt-2',
    conta: 'flex justify-content-center align-items-center border-round bg-yellow-200 shadow-2 h-4rem',
    valor: 'flex justify-content-center align-items-center border-round border-1 border-400 h-3rem w-3rem',
    tempoRestante: 'flex justify-content-center align-items-center h-4rem text-3xl'
}

Jogo.defaultProps = {
    
}