import React from 'react';
import ComponentFive from './ComponentFive';

export default props => {
    return (
        <div className='container_component'>
            <p className='title'>Title: { props.title }</p>
            <ComponentFive title="Component Five" />
            <ComponentFive title="Component Five" />
            <ComponentFive title="Component Five" />
            { props.children }
        </div>
    )
}