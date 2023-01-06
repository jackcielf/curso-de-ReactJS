import React from 'react';

function ComponentEight(props) {

    // Fazendo a verificacao de um valor
    function condicao(value) {
        if (value >= 10) {
            return <p>O valor é igual ou maior que 10</p>
        } else {
            return <p>O valor é menor que 10</p>
        }
    }

    function pessoa(name) {
        switch (name) {
            case "Jack":
                return <p>É meu nome</p>
                break;
            case "Joao": 
                return <p>É o nome do meu professor</p>
                break;
            default:
                return <p>Desconheço esse nome</p>
                break;
        }
    }

    return (
        <div className="container_component">
            <p className="title">Title: {props.title}</p>
            { condicao(props.value) }
            <hr />
            { pessoa(props.name) }
        </div>
    )
}

export default ComponentEight;