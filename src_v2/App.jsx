import React from 'react'; // Nao é obrigatorio, mas é uma boa pratica
import './App.css';

// Components
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ComponentThree from './components/ComponentThree';
import ComponentFour from './components/ComponentFour';
import ComponentSix from './components/ComponentSix';
import ComponentSeven from './components/ComponentSeven';
import ComponentEight from './components/ComponentEight';
import ComponentNine from './components/ComponentNine';
import ComponentTen from './components/ComponentTen';
import ComponentFather from './components/comunicacao_direta/ComponentFather';
import ComponentMother from './components/comunicacao_indireta/ComponentMother';
import ComponentA from './components/comunicacao_indireta_2/ComponentA';
import ComponentGrandFather_A from './components/comunicacao_direta_2/ComponentGrandFather_A';

export default function App() {
    return (
        <>
            <ComponentGrandFather_A title="Comunicação Direta 2" />
            <ComponentA title="Comunicação Indireta 2" />
            <ComponentMother title="Comunicação Indireta" />
            <ComponentFather title="Comunicação Direta" />
            <ComponentTen title="Component Ten" colorText="red" />
            <ComponentNine title="Component Nine" />
            <ComponentEight title="Component Eight" value={9} name="Jack" />
            <ComponentSeven title="Component Seven" value={true} />
            <ComponentSix title="Component Six" />
            <ComponentFour title="Component Four">
                <p className="small">Children Components | Componentes filho</p>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </ComponentFour>
            <ComponentThree title="Component Three" caption="Subtitulo" />
            <ComponentTwo title="Component Two" />
            <ComponentOne title="Component One" />
        </>
    )
}