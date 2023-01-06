import React from 'react';
import ComponentSon from './ComponentSon';

export default props => {
    return (
        <div className="container_component">
            <p className="title">Title: {props.title}</p>
            <p>Father</p>

            <ComponentSon title="Component Son" cargo="Programador">
                Jack Fx
            </ComponentSon>
            <ComponentSon title="Component Son" cargo="Programador">
                Joao Ribeiro
            </ComponentSon>
            <ComponentSon title="Component Son" cargo="Programador">
                Pedro Joaquin
            </ComponentSon>
        </div>
    )
}