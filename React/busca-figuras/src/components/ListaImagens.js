import React from 'react'
import Imagem from './Imagem'

const ListaImagens = ({ pics, imgStyle }) => {
    return (
        pics.map((pic, index) => (
            <Imagem
                imgStyle={imgStyle}
                pic={pic.src.small} 
                key={index}    
            />
        ))
    )
}

export default ListaImagens