import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (event) => {
        console.log(event.target.value)
        this.setState({ termoDeBusca: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    // Single Source Of Truth: SSOT
    // Source Of Truth
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="flex flex-column">
                    <span className="p-input-icon-left w-full">
                        <i className="pi pi-search"></i>
                        <InputText 
                            className="w-full"
                            value={this.state.termoDeBusca}
                            onChange={this.onTermoAlterado}
                        />
                    </span>
                    <Button 
                        label="OK"
                        className="p-button-outlined mt-2"
                    />
                </div>
            </form>
        )
    }
}
