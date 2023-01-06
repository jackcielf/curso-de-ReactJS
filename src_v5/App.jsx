import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {

    const [texto, setTexto] = useState('');
    const total = useRef(1);

    useEffect(() => {
        // setTotal(ta => ta + 1);
        total.current++;
    });

    return (
        <>
            <h1>React Hooks - useRef</h1>
            <hr />
            {/* O evento 'onChange' é executado sempre que o input tem seu valor alterado  */}
            <input type="text" onChange={ (evento) => setTexto(evento.target.value) } />
            <hr />
            <p>O texto é: <strong>{ texto }</strong></p>
            <hr />
            <p>Total de renders: <strong>{ total.current }</strong></p>
        </>
    )
}