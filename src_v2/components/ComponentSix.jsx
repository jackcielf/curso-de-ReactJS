import React from 'react';
import customers from '../data_customers/data_customers';

export default props => {

    const cliente = () => {
        // A funcao 'map' serve como um for, que percorre o array/lista
        return customers.map(cliente => {
            return <li key = { cliente.id_cliente }>
                Nome: { cliente.nome } | 
                Email: { cliente.email }
            </li>
        })
    }

    return (
        <div className='container_component'>
            <p>Title: { props.title }</p>

            <ul>
                { cliente() }
            </ul>
        </div>
    );
};