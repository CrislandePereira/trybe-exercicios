import { combineReducers } from 'redux';

const INITIAL_STATE = {
  email: '',
  name: '',
  password: '',
};

const firstReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
    case 'ADD_EMAIL':
      return { ...state, email: action.email };

    case 'ADD_NAME':
      return { ...state, name: action.name }; 
      
    case 'ADD_PASSWORD':
      return { ...state, password: action.password };

    default:
      return state;
 }
}

const rootReducer = combineReducers({ firstReducer })

export default rootReducer;