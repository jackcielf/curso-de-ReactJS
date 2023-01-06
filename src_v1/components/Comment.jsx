import React from "react";
import './Comment.css';

function Comment(props) {

    // Colocando um texto em letra maiuscula
    function Maiusculas(texto) {
        return texto.toUpperCase();
    }

    return (
        <div>
            <section className="container_comment">
                <p className="title">{Maiusculas(props.title)}</p>
                <p className="text">Texto do comentário</p>
                <p className="author">Autor: {props.author}</p>
            </section>
        </div>
    )
}

export default Comment;