import React from 'react';
import ComponentSon_A from './ComponentSon_A';

const ComponentFather_A = props => {
    return (
        <div className='container_component'>
            <p className='title'>Title: { props.title }</p>
            <p>Father: </p>

            <ComponentSon_A title="Component Son" {...props} />
        </div>
    )
}

export default ComponentFather_A;