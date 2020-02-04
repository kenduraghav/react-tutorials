//import react libraries
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import RegisterUser from './register';

//create a component 

function getTime() {
    return (new Date().toLocaleTimeString());
}

const divStyle = { right: '40px', top: '10px', float: 'right', marginRight: '20px', fontWeight: 'bold' }

const Clock = () => {
    return (
        <div style={divStyle}>
            Time is: {getTime()}
        </div>
    );
}

const App = () => {
    return (
        <div>
            <div align="left">
                <Clock />
                <h1>100DaysofCode</h1>
                <h2>Welcome to the world of REACT!!!!</h2>

            </div>
            <div>
                <RegisterUser />
            </div>
        </div>
    );
}

//show it to user
function tick(){
    ReactDOM.render(<App />, document.querySelector("#root"));
}

setInterval(tick, 1000);