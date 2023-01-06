import React, { useState } from 'react';

export default function App() {

    const [valor, setValor] = useState(() => 0);

    const incremento = () => {
        setValor(va => va + 1);
    }

    const decremento = () => {
        setValor(va => va - 1);
    }

    return (
        <>
            <h1>Hospedando o site ReactJS no server</h1>
            <hr />
            <p>{ valor }</p>
            <button onClick={ incremento }>Incremento</button>
            <button onClick={ decremento }>Decremento</button>

            <p><small>Ao fazer o arquivo build do projeto, caso tal projeto não vá ficar na diretório principal '/', é necessario fazer uma pequena alteração no arquivo 'packege.json'</small></p>
        </>
    )
}