import React from 'react';
import './App.css';
import {Calculator} from "./components/Calculator/Calculator";
import './index.css'
import preciousMetal from './common/assets/images/preciousMetal.png'
import {state} from './state/state'

const preciousMetalImg = {
    backgroundImage: `url(${preciousMetal})`,
};

function App() {
    const preciousMetalsList = state.preciousMetals
    const payment = state.payment
    return (
        <div className="App">
            <Calculator style={preciousMetalImg} preciousMetalsList={preciousMetalsList}
                        paymentList={payment}/>
        </div>

    );
}

export default App;
