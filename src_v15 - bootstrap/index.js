import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';

const root = document.getElementById('root');
createRoot(root).render(<App />);