
import { EMAIL_CHANGED,
        PASSWORD_CHANGE,
        LOGIN_USER,
        LOGIN_USER_SUCCES,
        LOGIN_USER_FAIL 
        } from '../actions/types';

  const INITIAL_STATE = {
    email: '',
    password: '',
    loginLoading: false,
    user: null
  };


  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

      case EMAIL_CHANGED:
        return { ...state, email: action.payload };
      
      case PASSWORD_CHANGE:
        return { ...state, password: action.payload };
      
      case LOGIN_USER:
        return { ...state, loginLoading: true };
       
      case LOGIN_USER_SUCCES:
        return { ...state, loginLoading: false, user: action.user };
       
      case LOGIN_USER_FAIL:
        return { ...state, loginLoading: false };  
      
        default:
       return state;
    }
  }