import firebase from 'firebase';
import '@firebase/auth';

import { 
        FETCH_CONTACT_ERROR,
        FETCH_CONTACT_SUCCES
         } from './types';

export const fetchListContact = ({ me }) => {
  return (dispatch) => {
    firebase.database().ref('users')
    .on('value', snap => {
      const contacts = [];
      snap.forEach(contact => {
        if (contact.key !== me.uid) {  // users bolumunden kendımızı lısteleme ıslemıne sokmamak ıcın ıf blogunu ekledık
          const ct = contact.val();
          contacts.push({
            uid: contact.key,
            displayName: ct.displayName,
            email: ct.email,
            photoURL: ct.photoURL
          });
        }
      });

      dispatch({
        type: FETCH_CONTACT_SUCCES,
        contacts
      });
    }, error => {
      console.log('error', error);
      dispatch({
        type: FETCH_CONTACT_ERROR
      });
    });
  };
};