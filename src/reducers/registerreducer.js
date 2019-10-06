
import {
  REGISTER_USER,
  REGISTER_USER_SUCCES,
  REGISTER_USER_FAIL } from '../actions/types';

const INITIAL_STATE = {
registerLoading: false
};




export default (state = INITIAL_STATE, action) => {
  switch (action.type) { 
    
    case REGISTER_USER:
      return { ...state, registerLoading: true };

    case REGISTER_USER_SUCCES:
      return { ...state, registerLoading: false };
      
    case REGISTER_USER_FAIL:
      return { ...state, registerLoading: false };  
    
      default:
     return state;
  }
}