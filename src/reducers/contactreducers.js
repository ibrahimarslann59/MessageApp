import { 
  FETCH_CONTACT_SUCCES,
  FETCH_CONTACT_ERROR 
    } from '../actions/types';

    const INITIAL_STATE = { 
      contactLoading: true,
      contact: []
    };

    export default (state = INITIAL_STATE, action) => {
      switch (action.type) {

        case FETCH_CONTACT_SUCCES:
          return { ...state, contactLoading: false, contact: action.contact };  

        case FETCH_CONTACT_ERROR:
          return { ...INITIAL_STATE, contactLoading: false };
      
      default:
          return state;
      }

    }