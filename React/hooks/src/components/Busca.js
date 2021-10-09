import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import axios from 'axios'
import striptags from 'striptags'

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=java

const Busca = () => {

    const [termoDeBusca, setTermoDeBusca] = useState('')
    const [resultados, setResultados] = useState([])

    useEffect(() => {
        const fazBusca = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        format: 'json',
                        origin: '*',
                        srsearch: termoDeBusca
                    }
                }
            )
            setResultados(data.query.search) // Estrutura própria da Wikipedia
        }
        if (termoDeBusca && !resultados.length){
            fazBusca()
        }
        else{
            const timeoutID = setTimeout(() => {
                if (termoDeBusca)
                    fazBusca()
            }, 1000)
            return () => {
                clearInterval(timeoutID)
            }
        }
    }, [termoDeBusca])
    
    // useEffect(() => {
    //     console.log ("Executando todas as vezes...")
    // })

    // useEffect(() => {
    //     console.log ("Executando uma única vez...")
    // }, [])

    // useEffect(() => {
    //     console.log ("Executando somente se o termo tiver sido atualizado")
    // }, [termoDeBusca])
    
    return (
        <div>
            <span className="p-input-icon-left">
                <i className="pi pi-search"></i>
                <InputText 
                    onChange={(e) => setTermoDeBusca(e.target.value)}
                />
            </span>
            {
                resultados.map((resultado) => (
                    <div 
                        key={resultado.pageid} 
                        className="my-2 border-1 border-400"
                    >
                        <div 
                            className="border border-bottom border-1 border-400 p-2 text-center font-bold"
                        >
                            {resultado.title}
                            <span>
                                <Button
                                    icon="pi pi-send"
                                    className="ml-2 p-button-rounded p-button-secondary"
                                    onClick={() => window.open(
                                        `https://en.wikipedia.org?curid=${resultado.pageid}`,
                                        '_blank'
                                    )}
                                />
                            </span>
                        </div>
                        <div className="p-2">
                            {striptags(resultado.snippet)}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Busca