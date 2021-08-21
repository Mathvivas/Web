import React from 'react'

const CartaoCometario = ({children}) => {
    return (
        <div className={estilos.principal}>
            {children}
        </div>
    )
}

const estilos = {
    principal: "card border rounded m-2 p-2 shadow"
}

export default CartaoCometario