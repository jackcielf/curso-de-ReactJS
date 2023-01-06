import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/User';

export default function App() {

    // useState
    const [users, setUsers] = useState([]);

    // useEffect
    useEffect(() => {
        fetch("https://dummyjson.com/users")
        .then(response => response.json())
        .then(json => { 
            // console.log(json.users);
            setUsers(json.users);
        })
    }, []);

    return (
        <>
            <h1>Usuários inscritos</h1>
            { /* UMA FORMA DE MOSTRAR OS USUARIOS
            users.map(user => {
                return <div key={ user.id }>{ user.firstName } { user.lastName }</div>
            }) */}

            { /* FORMA DE MOSTRAR OS USUARIOS usando COMPONENTES (arquivos externos) */
            users.map(user => {
                return <User key={ user.id } usuario={ user } />
            }) }
        </>
    )
}