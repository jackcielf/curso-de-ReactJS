import React, { useState } from 'react';
import './App.css';

export default function App() {
    const [valor, setValor] = useState(0);

    function incrementar() {
        setValor( valor + 1 );
    }

    function decrementar() {
        setValor( valor - 1);
    }

    return (
        <>
            <h1>React Hooks</h1>
            <h3>Valor = {valor}</h3>
            <button onClick={ incrementar }>Incrementar</button>
            <button onClick={ decrementar }>Decrementar</button>
        </>
    )
}

/*
    - O 'useState' é uma funcao javascript que retorna dois parametros,
    o valor que o usuario define e a funcao que altera esse valor
    - const [valor, funcao_que_altera_o_valor], assim defino duas 
    variaveis, uma com o valor e a segunda, a segunda sempre e a variavel
    de alteracao do valor da primeira variavel, com a funcao de alteracao do valor
    - useState(10), isso define o valor que a variavel 'valor' do
    useState vai receber, que é "10"
    - O 'useState' não pode ser usado dentro de um bloco condicional (Ex: if...else)
*/