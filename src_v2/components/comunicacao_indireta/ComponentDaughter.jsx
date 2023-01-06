import React from 'react';

export default props => {
    return (
        <div className="container_component">
            <p className="title">Title: {props.title}</p>
            <button onClick={ props.click }>Clicar</button>
        </div>
    )
}