import React from 'react';

export default props => {

    // Outra forma de estilizar elementos JSX
    const estilos = {
        color: 'black',
        padding: '5px',
        backgroundColor: 'gray'
    }

    return (
        <div className='container_component'>
            <p className='title'>Title: {props.title}</p>
            <p style={{ color: 'yellow', padding: '10px', backgroundColor: 'green' }}>Estilo inline 1</p>
            <p style={ estilos }>Estilo inline 2</p>
            <p style={{ color: props.colorText }}>Estilo inline 3</p>
        </div>

    )
}