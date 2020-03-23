import React from 'react';

class UserForm extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <div className='header'>
          <h2 className='ui center aligned header'>User Registration</h2>
        </div>
        <form className='ui form'>
          <div className='four wide field'>
            <label>Email:</label>
            <input type='email' placeholder='Enter your email' id='email' />
          </div>
          <div className='four wide field'>
            <label>First Name:</label>
            <input
              type='text'
              name='firstName'
              placeholder='Enter your First name'
              id='firstname'
            />
          </div>
          <div className='four wide field'>
            <label>Last Name:</label>
            <input
              type='text'
              name='lastName'
              placeholder='Enter your Last name'
              id='lastname'
            />
          </div>
          <div className='four wide field'>
            <button className='ui button primary'>Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
