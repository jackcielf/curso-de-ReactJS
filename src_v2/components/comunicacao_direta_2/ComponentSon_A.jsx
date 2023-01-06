import React from 'react';

const ComponentSon_A = props => {
    return (
        <div className='container_component'>
            <p className='title'>Title: { props.title }</p>
            <p>Son: {props.name} {props.apelido}</p>
        </div>
    )
}

export default ComponentSon_A;