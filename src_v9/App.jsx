import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

export default function App() {

    const [valor, setValor] = useState(() => { return 0 });
    const [numero, setNumero] = useState(() => { return 1000 });

    // const valorCalculado = funcaoRemorada(valor);
    const valorCalculado = useMemo(() => {
        return funcaoRemorada(valor)
    }, [valor]);

    useEffect(() => {
        console.log('ok')
    });

    function incrementar() {
        setValor(va => va + 1);
    }

    function incrementar2() {
        setNumero(n => n + 100);
    }

    function funcaoRemorada(valor) {
        return valor * 2;
    }
    return (
        <>
            <h1>React Hooks - useMemo</h1>
            <hr />
            <p>Valor: { valor }</p>
            <p>Numero: { numero }</p>
            <p>Calculado: { valorCalculado }</p>
            <button onClick={ incrementar }>Incrementar</button>
            <button onClick={ incrementar2 }>Incrementar 2</button>
        </>
    )
}

/*
    - O 'useMemo' é usado para aplicações pesadas (lentas)
    - Executa ações somente quando necessárias, sem fazer nada em vão
*/