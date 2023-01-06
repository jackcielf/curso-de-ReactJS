import React, { useState, useRef } from 'react';
import './App.css';

export default function App() {
    // STATE
    const [listaTarefas, setListaTarefas] = useState(() => { return [] });
    const [tarefa, setTarefa] = useState(() => { return '' });

    // REF
    const idTarefa = useRef(0);
    const inputRef = useRef();

    // METODOS
    function adicionarTarefa() {
        setListaTarefas(old => {
            return [
                ...old,
                { id: idTarefa.current, texto: tarefa }
            ]
        });
        idTarefa.current++;
        setTarefa(''); // Esvaziar o input ao add tarefa
        inputRef.current.focus();
    }

    function limparTarefas() {
        setListaTarefas(old => {
            return []
        });
        idTarefa.current = 0;
    }

    function removerTarefa(id) {
        const tmp = listaTarefas.filter(tarefa => tarefa.id !== id );
        setListaTarefas(tmp);
    }

    return (
        <>
            <h1>GESTOR DE TAREFAS</h1>
            <hr />
            <input ref={ inputRef } type="text" value={ tarefa } onChange={e => setTarefa(e.target.value)} />
            <div>
                <button onClick={adicionarTarefa}>Adicionar</button>
                <button onClick={limparTarefas}>Limpar Tudo</button>
            </div>
            <hr />
            <p>Tarefas: </p>
            {listaTarefas.map((tarefa) => {
                return <p className='line' key={tarefa.id}>{tarefa.texto} <span className='btn_remove' onClick={() => removerTarefa(tarefa.id)}>REMOVER</span></p>
            })}
        </>
    )
}

/*
    - O uso do 'useRef' é para criar o id de cada tarefa

*/