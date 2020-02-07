//import react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CardDetail from './CardDetail';
import ApprovalCard from './ApprovalCard';
import Clock from './Clock';

const App = () => {
  return (
    <div>
      <div className='ui container comments'>
        <h2 className='ui left floated header'>100DaysofCode</h2>
        <div className='ui clearing divider'></div>
        <h2 className='ui center aligned segment header'>
          Welcome to the world of REACT!!!!
        </h2>
        <div className='ui clearing divider'></div>
        <h2 className='ui left floated header'>Cue cards</h2>
      </div>
      <div className='ui container cards'>
        <ApprovalCard>
          <CardDetail
            question='What is ReactJS?'
            answer='ReactJS is a JavaScript  library that helps to build user interface components elegantly'
          />
        </ApprovalCard>
        <ApprovalCard>
          <CardDetail
            question='How React renders an element?'
            answer=" ReactDOM does the process of rendering an element in DOM and importantly it updates only what's necessary."
          />
        </ApprovalCard>
        <ApprovalCard>
          <CardDetail
            question='What is JSX?'
            answer='JSX is special dialect of JavaScript. It is used to create React elements.'
          />
        </ApprovalCard>
        <ApprovalCard>
          <CardDetail
            question='What is React Component?'
            answer='Components let you split UI into independent, reusable pieces. 
                    Basically it is like JavaScript function which accepts input(props) and returns React Elements.'
          />
        </ApprovalCard>

        <ApprovalCard>
          <div>
            <div className='ui small dividing header'>
              Custom Elements using <i>props.children</i>
            </div>
            <form className='ui form'>
              <div className='field'>
                <label>First Name</label>
                <input
                  type='text'
                  name='firstName'
                  placeholder='Enter your first name'
                ></input>
              </div>
              <div className='field'>
                <label>Last Name</label>
                <input
                  type='text'
                  name='lastName'
                  placeholder='Enter your last name'
                ></input>
              </div>
              <div className='field'>
                <div className='ui checkbox'>
                  <input type='checkbox' tabIndex='0' className='hidden' />
                  <label>I agree to the Terms and Conditions</label>
                </div>
              </div>
              <button className='ui button' type='submit'>
                Submit
              </button>
            </form>
          </div>
        </ApprovalCard>
        <ApprovalCard>
          <Clock />
        </ApprovalCard>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
