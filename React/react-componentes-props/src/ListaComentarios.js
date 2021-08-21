import React from 'react'

const ListaComentarios = (props) => {
    return (
        <div className={estilos.principal}>
            {props.children}
        </div>
    )
}

const estilos = {
    principal: 'container border border-warning rounded my-3'
}

export default ListaComentarios