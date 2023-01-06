import React, { useState } from 'react';
import './App.css';

export default function App() {

    const [valor, setValor] = useState(1);

    const multiplicar = () => {
        if (isNaN(valor) || valor <= 0) return [];

        let produtos = [];
        for (let m = 1; m <= 10; m++) {
            // produtos.push(valor * m);
            produtos.push(`${valor} x ${m} = ${valor * m}`);
        }
        return produtos;
    }

    return (
        <>
            <h1>React - Tabuada</h1>
            <hr />
            <input type="number" name={ valor } onChange={ (e) => setValor(e.target.value) } />
            { multiplicar().map(item => <p>{ item }</p>) }
        </>
    )
}


/*
    
*/