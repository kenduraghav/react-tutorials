//import react libraries
import React from "react";
import ReactDOM from "react-dom";
import CardDetail from "./CardDetail";

function getTime() {
  return new Date().toLocaleTimeString();
}

//create a function component
const Clock = () => {
  return <div className="ui  right floated header">Time is: {getTime()}</div>;
};

const App = () => {
  return (
    <div>
      <div className="ui container">
        <Clock />
        <h2 className="ui left floated header">100DaysofCode</h2>
        <div className="ui clearing divider"></div>
        <h2 className="ui center aligned segment header">
          Welcome to the world of REACT!!!!
        </h2>
      </div>
      <div className="ui clearing divider"></div>
      <h2 className="ui left floated header">Cue cards</h2>
      <div className="ui container cards">
        <CardDetail
          question="What is ReactJS?"
          answer="ReactJS is a JavaScript  library that helps to build user interface components elegantly"
        />
        <CardDetail
          question="How React renders an element?"
          answer=" ReactDOM does the process of rendering an element in DOM and importantly it updates only what's necessary."
        />
        <CardDetail
          question="What is JSX?"
          answer="JSX is special dialect of JavaScript. It is used to create React elements."
        />
        <CardDetail
          question="What is React Component?"
          answer="Components let you split UI into independent, reusable pieces. 
                    Basically it is like JavaScript function which accepts input(props) and returns React Elements."
        />
      </div>
    </div>
  );
};

//show it to user
function tick() {
  ReactDOM.render(<App />, document.querySelector("#root"));
}

setInterval(tick, 1000);
