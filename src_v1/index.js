import ReactDOM from 'react-dom/client'; // No react 18, deve-se colocar o "/client"
import './index.css';
import App from './App';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />); // Usando react 18