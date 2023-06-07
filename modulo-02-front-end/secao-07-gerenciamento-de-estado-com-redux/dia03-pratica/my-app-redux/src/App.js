import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import {addEmail, addName, addPassword} from './redux/actions';

import { useState } from 'react';

function App(props) {
  const { dispatch, email, name, password } = props;
  const [inputName, setInputName] = useState(name);
  const [inputEmail, setInputEmail] = useState(email);
  const [inputPassword, setInputPassword] = useState(password);

  const dispatchAll = () => {
    dispatch(addName(inputName));
    dispatch(addEmail(inputEmail));
    dispatch(addPassword(inputPassword));
  };

  return (
    <div className="App">
      <h1>Formulário com Redux</h1>
      <input 
        className='input' 
        placeholder='Digite seu nome' 
        type="text" value={inputName} 
        onChange={(e) => setInputName(e.target.value)} 
        required />
      <input 
        className='input'
        placeholder='Digite seu email' 
        type="email" value={inputEmail} 
        onChange={(e) => setInputEmail(e.target.value)} 
        required/>
      <input 
        className='input'
        placeholder='Digite sua senha' 
        type="password" value={inputPassword} 
        onChange={(e) => setInputPassword(e.target.value)} 
        maxLength={10}
        required/>
      <button
        className='btn'
        onClick={() => dispatchAll()}
      > Enviar </button>
    </div>
  );
}


const mapStateToProps = (state) => ({
  email: state.firstReducer.email,
  name: state.firstReducer.name,
  password: state.firstReducer.password,
});

export default connect(mapStateToProps)(App);
