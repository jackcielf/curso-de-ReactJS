import React, { useState } from 'react';
import Nomes from './components/Nomes';
import './App.css';

export default function App() {

    const [nome, setNome] = useState('');
    const [nomes, setNomes] = useState([]);

    const guardarNome = () => {
        setNomes(tmp => [...tmp, nome])
    }

    return (
        <>
            <h1>React Unique ID</h1>
            <hr />
            <input type="text" value={nome} onChange={ event => setNome(event.target.value) } />
            <button className='btn_block' onClick={ guardarNome }>Guardar Nome</button>
            <p>{ nome }</p>
            <Nomes nomes={ nomes } />
        </>
    )
}

/*
    
*/