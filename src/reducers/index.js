import { combineReducers } from 'redux';
import loginreducers from './loginreducer';
import contactreducers from './contactreducers';
import chatreducer from './chatreducer';
import registerreducer from './registerreducer';

export default combineReducers({
loginResponse: loginreducers,
contactResponse: contactreducers,
chatResponse: chatreducer,
registerResponse: registerreducer
});