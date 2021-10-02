import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext'
const Busca = () => {
    
    const [termoDeBusca, setTermoDeBusca] = useState('')
    useEffect(() => {
        console.log ("Executando todas as vezes...")
    })

    useEffect(() => {
        console.log ("Executando uma única vez...")
    }, [])

    useEffect(() => {
        console.log ("Executando somente se o termo tiver sido atualizado")
    }, [termoDeBusca])
    
    return (
        <div>
            <span className="p-input-icon-left">
                <i className="pi pi-search"></i>
                <InputText 
                    onChange={(e) => setTermoDeBusca(e.target.value)}
                />
            </span>
        </div>
    )
}

export default Busca