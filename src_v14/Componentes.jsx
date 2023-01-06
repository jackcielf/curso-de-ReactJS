import React from 'react';

const Componente1 = () => {
    return (
        <>
            <h3>Componente 1</h3>
        </>
    )
}

const Componente2 = function() {
    return (
        <>
            <h3>Componente 2</h3>
        </>
    )
}

const Componente3 = () => {
    return <h3>Componente 3</h3>
}

export { Componente1, Componente2, Componente3 }