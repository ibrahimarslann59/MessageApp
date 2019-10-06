  import { 
    FETCH_MESSAGE_SUCCES,
    FETCH_MESSAGE_ERROR,
    FETCH_ROOM_SUCCES,
    FETCH_ROOM_ERROR ,
    FETCH_ROOM
  } from  '../actions/types';

const INITIAL_STATE = { 
  chatLoading: true,
  messages: [],
  roomKey: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ROOM_SUCCES:
      return { ...INITIAL_STATE, chatLoading: false, roomKey: action.roomKey };

    case FETCH_ROOM_ERROR:
      return { ...INITIAL_STATE, chatLoading: false} 

    case FETCH_ROOM:
        return { ...state, roomKey: action.roomKey} 
      
    case FETCH_MESSAGE_SUCCES:
      return { ...state, chatLoading: false, messages: action.messages };  

    case FETCH_MESSAGE_ERROR:
          return { ...INITIAL_STATE, chatLoading: false };  
  
    default:
      return state;
  }
}
