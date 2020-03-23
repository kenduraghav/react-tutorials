import React from 'react';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className='ui right floated container'>
      <form className='ui form'>
        <div className='six wide field'>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            placeholder='Enter your username'
          />
        </div>
        <div className='six wide field'>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
          />
        </div>
        <div className='ui six wide field'>
          <button className='ui left floated button primary' type='submit'>
            Login
          </button>
          <Link to='/register'>
            <button className='ui right floated button primary' type='submit'>
              Sign Up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
