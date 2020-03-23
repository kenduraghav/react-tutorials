import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UserForm from './UserForm';
import { Login } from './Login';
import { Header } from './Header';

export default class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Login} />
          <Route path='/register' exact component={UserForm} />
        </BrowserRouter>
      </div>
    );
  }
}
