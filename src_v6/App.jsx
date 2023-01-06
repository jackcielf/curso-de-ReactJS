import React, { useRef } from 'react';
import './App.css';

export default function App() {

    const inputRef = useRef();
    const inputRef2 = useRef();

    function focus() {
        inputRef.current.focus();
    }

    function alterar() {
        inputRef2.current.value = "Jack";
    }

    return (
        <>
            <h1>React Hooks - useRef</h1>
            <hr />
            {/* O evento 'onChange' é executado sempre que o input tem seu valor alterado  */}
            <input ref={ inputRef } type="text" />
            <input ref={ inputRef2 } type="text" />
            <hr />
            <button onClick={ focus }>Focar no input 1</button>
            <button onClick={ alterar }>Alterar texto do input 2</button>
        </>
    )
}

/*
    - O 'useRef' é mais usado para eventos de click de botao, já o 'useState' 
    faz alterações na DOM em tempo real
    - Caso queira fazer a validação de um formulário em tempo real, assim que o usuário digitar 
    uma carctere não permitido o form ficar vermelho, por exemplo, é necessário o uso do 'useState',
    caso queira que a validação seja feita após o click do botão então use o 'useRef'
    - Para mostrar o valor degitado em um input com o "useRef" é necessário colocar o prefíxo '.current',
    como visto acima
*/