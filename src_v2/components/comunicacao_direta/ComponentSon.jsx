import React from 'react';

export default props => {
    return (
        <div className="container_component">
            <p className="title">Title: {props.title}</p>
            <p>Cargo: {props.cargo} - {props.children}</p>
        </div>
    )
}