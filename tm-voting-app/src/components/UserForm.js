import React from 'react';

class UserForm extends React.Component {
  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>User Registration</div>
        <div className='panel-body'>
          <form className='form-horizontal'>
            <div className='form-group'>
              <label className='control-label' for='email'>
                Email:
              </label>
              <input type='email' class='form-control' id='email' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
