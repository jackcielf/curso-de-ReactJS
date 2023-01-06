import React from 'react';
import ComponentB from './ComponentB';

function ComponentA(props) {

    const executar = (value1, value2) => {
        console.log(value1);
        console.log(value2);
    }

    return (
        <div className="container_component">
            <p className="title">Title: {props.title}</p>

            <ComponentB title="Component Son" funcao={ executar } />
        </div>
    )
}

export default ComponentA;