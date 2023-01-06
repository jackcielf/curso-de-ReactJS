import React, { useState } from 'react';
import './App.css';

export default function App() {

    const [escuro, setEscuro] = useState(false);

    const tema = {
        backgroundColor: escuro ? '#141414' : 'white', 
        color: escuro ? 'white' : 'black'
    }

    return (
        <div style={ tema }>
            <h1>React - Tema claro | Escuro</h1>
            <hr />
            <button onClick={ () => setEscuro(tmp => !tmp) }>TEMA</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quis blanditiis dolores rerum, consequuntur cum! Voluptatum, velit! Quaerat possimus, facilis, minima quidem distinctio architecto molestias ipsum animi odio expedita quos?
            Reprehenderit inventore provident doloribus laboriosam. Vel repellat porro nesciunt minus aliquam nulla quidem commodi corporis, facere ullam libero! Accusantium ad explicabo eaque non cupiditate natus illo deserunt dignissimos, tenetur magni?
            Accusantium, nostrum unde. Numquam laudantium soluta voluptatum, provident unde tenetur facilis odio animi praesentium eligendi, quo accusantium quisquam. Quo inventore provident, officia deserunt fugit perferendis maxime porro distinctio qui amet.
            Asperiores corrupti consequatur velit facilis. Odit delectus aut veritatis dolorem, quas sequi optio reprehenderit nam iusto? Atque voluptatibus, minima natus ut iusto adipisci totam illum voluptas sapiente magni! Dolorem, sint!
            Quaerat quasi veritatis fuga molestiae quod sint ipsum eum ipsa possimus vero tempore nulla ea quibusdam quia eius, rem architecto, exercitationem, sequi id cumque sed recusandae. Sequi non cupiditate minima?
            Saepe sit quaerat cupiditate laboriosam accusantium, aliquid impedit blanditiis porro aut quos enim perspiciatis doloremque. Molestiae reprehenderit esse corporis laudantium eius alias corrupti, cum sapiente delectus vel totam sit voluptate!
            Consequatur quas, repudiandae veritatis sit autem eum excepturi adipisci inventore provident ea mollitia eius tenetur dolorem? Rem delectus laudantium, exercitationem autem id architecto dolor veritatis ullam, ea nesciunt neque rerum!
            Excepturi unde eius inventore! Debitis architecto doloremque voluptatem? Repellendus asperiores reprehenderit vero quasi consequuntur sequi. Optio blanditiis nostrum ipsa, molestiae facere hic, dolor sint molestias id at accusantium quam rerum?
            Ullam unde officiis aperiam quas ipsum saepe vitae maxime delectus architecto! Expedita omnis sequi animi id non velit quidem unde perspiciatis et accusamus atque accusantium deleniti, eligendi consectetur. Hic, error!
            Nesciunt ad excepturi recusandae voluptatum iste, molestias beatae accusamus, temporibus aspernatur, distinctio eligendi explicabo quia adipisci? Dolorum, earum dolorem ab quis quaerat debitis, quidem labore placeat ea, excepturi consequuntur minima.</p>
        </div>
    )
}

/*
    
*/