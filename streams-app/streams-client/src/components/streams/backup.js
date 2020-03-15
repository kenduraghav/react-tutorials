/* import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='ui segment'>
      <h1>React Router Login</h1>
      <div className='ui r'>
        <Link to='/home'>
          <button className='ui primary button'>Click Here to Enter</button>
        </Link>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className='ui container'>
      <h2 className='ui center aligned header'>React Router Demo</h2>
      <div className='ui secondary pointing menu'>
        <a href='#home' className='active item'>
          Home
        </a>
        <a href='#about' className='item'>
          About
        </a>
        <div className='right menu'>
          <Logout />
        </div>
      </div>
      <div id='home' className='content'>
        <p>This is basic React Router Demo</p>
      </div>
      <div id='about' className='content' style={{ display: 'none' }}>
        <p>
          React Router - Used to navigate to between components with the help of
          'history' object.
        </p>
      </div>
    </div>
  );
};

const Logout = () => {
  return (
    <Link to='/'>
      <a href='#logout' className='ui item'>
        Logout
      </a>
    </Link>
  );
};
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' exact component={Login} />
          <Route path='/home' component={HomePage} />
          <Route path='/logout' component={Logout} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
 */
