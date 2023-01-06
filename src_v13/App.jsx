import React, { useId } from 'react';
import './App.css';

export default function App() {

    const id1 = useId();
    const id2 = useId();

    return (
        <>
            <h1>React Hooks - useId</h1>
            <hr />
            <form action="#" method="post">
                <div>
                    <input type="checkbox" name="check_masc" id="{id1}" />
                    <label htmlFor="{id1}">Texto da checkbox</label>
                </div>
                <div>
                    <input type="checkbox" name="check_masc" id="{id2}" />
                    <label htmlFor="{id2}">Texto da checkbox</label>
                </div>
            </form>
        </>
    )
}