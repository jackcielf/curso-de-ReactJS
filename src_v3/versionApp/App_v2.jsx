import React, { useState } from 'react';
import './App.css';

export default function App() {

    // const [valor, setValor] = useState(100);

    const [valor, setValor] = useState(() => {
        return 100;
    });

    function aumentar() {
        // Forma correta de atualizar o valor
        // O que acontece dentro dos parenteses da funcao "setValor" esta relacionada a variavel "valor"
        setValor( valor_antigo => valor_antigo + 1 );
    }

    function diminuir() {
        setValor( (valor_antigo) => valor_antigo - 1 );
    }

    return (
        <>
            <h1>React Hooks</h1>
            <button onClick={ diminuir }>Diminuir</button>
            <span>{valor}</span>
            <button onClick={ aumentar }>Aumentar</button>
            <button onClick={ () => {
                // Mais recomendado criar funcoes separadas
                setValor(va => va + 100)
            } }>Aumantar 100</button>
        </>
    )
}