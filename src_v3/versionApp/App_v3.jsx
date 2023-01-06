import React, { useState } from 'react';
import './App.css';

export default function App() {
/*  
    // useState, FORMA SEM USAR OBJETO
    const [nome, setNome] = useState(() => {
        return "Jack";
    });
    const alterar = () => {
        setNome(() => {
            return "Jackciel"; // A forma correta de alterar valores, no useState, é com ArrowFunctions
        });
    }
*/

/*
    // FORMA USANDO OBJETO (Menos correta)
    const [player, setPlayer] = useState({
        name: "Jack",
        score: 0
    });

    const alterar = () => {
        setPlayer((pa) => {
            return {
                ...pa, // OBRIGATÓRIO, chama todas as propriedades do objeto, neste caso, é equivalente á, name: 'jack'
                score: pa.score + 1
            }
        })
    }
*/

    // FORMA USANDO OBJETO (Mais correta e simples, porém usa mais linhas)
    const [playerName, setPlayerName] = useState(() => {
        return "Jack";
    });

    const [playerScore, setPlayerScore] = useState(() => {
        return 0;
    });

    const alterar = () => {
        setPlayerScore((score) => {
            return score + 1;
        });
    }

    return (
        <>
            <h1>React Hooks - useState</h1>
            <hr />
            <h3>Nome: {playerName}</h3>
            <h3>Pontos: {playerScore}</h3>
            <button onClick={ alterar }>Alterar a pontuação</button>

            {/*
            <h3>Nome: {nome}</h3>
            <button onClick={ alterar }>Alterar</button>
            */}
        </>
    )
}