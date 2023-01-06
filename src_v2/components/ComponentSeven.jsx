import React from 'react';

const ComponentSeven = props => {
    return (
        <div className='container_component'>
            <p className='title'>Title: {props.title}</p>
            { props.value ? <p>Verdadeiro</p> : <p>False</p> }
        </div>
    )
}

export default ComponentSeven;