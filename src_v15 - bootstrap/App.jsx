import React from 'react';

export default function App() {
    return (
        <>
            <h1>React Hooks - Como importar o BootStrap para a aplicação</h1>
            <hr />

            <a href='#' className='btn btn-primary mb-3'>Botão com BootStrap</a>

            <div className="alert alert-success">Operação realizada com sucesso!</div>

            <p><small>A forma mais correta de importar o BootStrap ao projeto REACTJS é instalando-o pelo terminal através do comando 'npm install bootstrap' e importando no arquivo principal (index.js), <strong>não</strong> é uma boa prática importa-lo diretamente no arquivo 'index.html'</small></p>
        </>
    )
}