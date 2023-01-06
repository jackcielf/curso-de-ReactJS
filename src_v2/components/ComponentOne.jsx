import React from 'react';

// 'props' é o mesmo que '(props)'
export default props => {
    return (
        <div className='container_component'>
            <p className='title'>Title: { props.title }</p>
            <p>Component more simple in React</p>
        </div>
    )
}