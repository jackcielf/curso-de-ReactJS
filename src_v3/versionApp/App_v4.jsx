import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
    // Fazendo a sintaxe simples, somente para explicar o 'useEffect'
    const [valor, setValor] = useState(100);
    const [valor2, setValor2] = useState(1000);

    function alterar() {
        setValor(valor + 1);
    } 
    function alterar2() {
        setValor2(valor2 + 1);
    } 

    useEffect(() => {
        console.log("executou");
    }, [ valor ]);

    /*
        - O 'useEffect' recebe dois parametros o primeiro PODE ser 
        uma funcao, padrão, e o segundo parametro, é o que ele 
        tomará como referencia para ser execuatdo, caso essa 
        variavel sofra alguma ação, o 'useEffect' é executado
        - Segundo parametro é opcional, porem caso nao seja definido 
        a funcao 'useEffect' sera executada sempre que algum evento acontecer
        - Colocando [], como segundo parametro ele será executado somente 
        uma vez
    */

    return (
        <>
            <h1>React Hooks - useEffect</h1>
            <h3>Valor: { valor }</h3>
            <h3>Valor2: { valor2 }</h3>
            <button onClick={ alterar }>Alterar</button>
            <button onClick={ alterar2 }>Alterar 2</button>
        </>
    )
}