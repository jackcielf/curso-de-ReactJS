import React from 'react';
import ComponentFather_A from './ComponentFather_A';

const ComponentGrandFather_A = props => {
    return (
        <div className='container_component'>
            <p className='title'>Title: { props.title }</p>
            <p>Grand-Father</p>

            <ComponentFather_A title="Component Father" name="Jack" apelido="Felix" />
        </div>
    )
}

export default ComponentGrandFather_A;