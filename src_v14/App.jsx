import React from 'react';
import { Componente1, Componente2, Componente3 } from './Componentes';
import './App.css';

export default function App() {
    return (
        <>
            <h1>React Hooks - Forma não recomendada da utilização de componentes</h1>
            <Componente1 />
            <Componente2 />
            <Componente3 />

            <p><small>Não é recomendado colocar vários componentes em um mesmo arquivo, pois, não só pode gerar uma dificuldade na manutenção, como também confusão, caso trabalhe em equipe...</small></p>
        </>
    )
}