import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Nomes({ nomes }) {
    return (
        <>
            { nomes.map(nome => <p key={ uuidv4() }>{ nome }</p>) }
        </>
    )
}