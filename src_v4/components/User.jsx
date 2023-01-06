import React from "react";

export default function User(props) {
    return (
        <>
            <div className="container_user">
                <p>Nome: <strong>{props.usuario.firstName} {props.usuario.lastName}</strong></p>
            </div>
        </>
    )
}