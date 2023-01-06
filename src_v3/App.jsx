import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {

    const clientes = ['Jack', 'Joao', 'Ana'];
    const produtos = ['Pão', 'Manteiga', 'Leite'];
    const vendas = ['1 x Pão (Jack)', '2 x Manteiga (Joao)', '3 x Leite (Ana)'];

    const [info, setInfo] = useState('clientes');

    useEffect(() => {
        console.clear();
        switch (info) {
            case 'clientes':
                console.table(clientes);
                break;
            case 'produtos':
                console.table(produtos);
                break;
            case 'vendas':
                console.table(vendas);
                break;
        }
    }, [ info ]);

    return (
        <>
            <h1>Reat Hooks - useEffect</h1>
            <hr />
            <h3>{info}</h3>
            <button onClick={() => setInfo('clientes')}>Clientes</button>
            <button onClick={() => setInfo('produtos')}>Produtos</button>
            <button onClick={() => setInfo('vendas')}>Vendas</button>
        </>
    )
}