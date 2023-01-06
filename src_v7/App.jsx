import React, { useState, useRef } from 'react';
import './App.css';

export default function App() {

    const [texto, setTexto] = useState('');
    const inputRef = useRef();

    function executar() {
        setTexto(inputRef.current.value);
    }

    return (
        <>
            <h1>React Hooks - useRef</h1>
            <hr />
            {/* O evento 'onChange' é executado sempre que o input tem seu valor alterado  */}
            <input ref={ inputRef } type="text" onChange={ event => setTexto(event.target.value) } />
            <hr />
            <button onClick={ executar }>Executar</button>
            <p>Texto: { texto }</p>
        </>
    )
}