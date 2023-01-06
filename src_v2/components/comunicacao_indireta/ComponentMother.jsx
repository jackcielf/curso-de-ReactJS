import React from 'react';
import ComponentDaughter from './ComponentDaughter';

export default props => {

    function clicou() {
        console.log("Botao da filha foi clicado");
    }

    return (
        <div className="container_component">
            <p className="title">Title: {props.title}</p>
            <p>Mother</p>

            <ComponentDaughter title="Conponent Daughter" click={ clicou }></ComponentDaughter>
        </div>
    )
}