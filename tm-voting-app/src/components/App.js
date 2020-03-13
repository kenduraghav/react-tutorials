import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './UserForm';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <h2>TM Voting App</h2>
        <div className='row'>
          <UserForm />
        </div>
      </div>
    );
  }
}
