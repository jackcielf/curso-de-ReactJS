import React from 'react';

function ComponentB(props) {

    var value1 = 0;

    return (
        <div className="container_component">
            <p className="title">Title: { props.title }</p>

            <button onClick={ () => {
                value1 = Math.random()
                props.funcao(value1, "Jack")
            } }>Executar</button>

            <p>{ value1 }</p>
        </div>
    )
}

export default ComponentB;