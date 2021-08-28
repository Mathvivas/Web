import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jogo: null
        }
    }

    gerarJogo = () => {
        let aux = []
        while ( aux.length < 6 ) {
            let n = Math.floor(Math.random() * 60) + 1
            if ( !aux.includes(n) ) aux.push(n)
        }
        this.setState({ jogo: aux })
    }

    render() {
        return (
            <Container className="mt-2">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card className="p-2">
                            <Card.Header>
                                Mega Sena
                            </Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center border rounded" style={{height: '8rem'}}>
                                {
                                    this.state.jogo ?
                                    <ListGroup horizontal>
                                        {
                                            this.state.jogo.map(numero => (
                                                <ListGroup.Item variant="info">
                                                    {numero}
                                                </ListGroup.Item>
                                            ))
                                        }
                                    </ListGroup>
                                    :
                                    <Card.Text className="fs-4">
                                        Clique para obter o seu jogo
                                    </Card.Text>
                                }
                                <Button onClick={this.gerarJogo} variant='outline-success' className="w-100 mt-2">
                                    Gerar Jogo
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)