//import react libraries
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import RegisterUser from './register';

//create a component 

const App = () => {
    return (
        <div>
            <div align="center">
                <h1>100DaysofCode</h1>
                <h2>Welcome to the world of REACT!!!!</h2>
            </div>
            <div>
                <RegisterUser/>
            </div>
        </div>
    );
}

//show it to user
ReactDOM.render(<App/>, document.querySelector("#root"));