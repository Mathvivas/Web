import React from 'react'
import { render, screen } from '@testing-library/react'
import api from "./api"
import App from "./App"

jest.mock('./api')

describe('Requisições para API', () => {
    it('Exibir lista de transações através da API', async () => {
        api.listaTransacoes.mockResolvedValue([
            {
                "valor": "10",
                "transacao": "saque",
                "data": "10/08/2020",
                "id": 1
            },
            {
                "transacao": "deposito",
                "valor": "20",
                "data": "26/09/2020",
                "id": 2
            }
        ])

        render(<App />)

        // Busca um elemento que ainda vai aparecer no DOM
        expect(await screen.findByText('saque')).toBeInTheDocument()
        // Busca um elemento que já está no DOM
        expect(screen.getByTestId('transacoes').children.length).toBe(2)
    })
})