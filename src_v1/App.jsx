import React from 'react'; // Nao é obrigatorio, mas é uma boa pratica
import Comment from './components/Comment';

function App() {
    return (
        <div>
            <h1>Comentários</h1>
            <Comment title="Comentário 1" author="Ana" />
            <Comment title="Comentário 2" author="Jack" />
            <Comment title="Comentário 3" author="João Ribeiro" />
        </div>
    )
}

export default App;