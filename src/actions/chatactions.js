import React, { Component } from 'react';
import { Text, View } from 'react-native';

import firebase from 'firebase';
import '@firebase/auth';

import {
FETCH_ROOM_SUCCES,
FETCH_ROOM_ERROR,
REGISTER_ROOM,
FETCH_MESSAGE_SUCCES,
FETCH_MESSAGE_ERROR
} from '../actions/types';

export const findRoomByUser = (me, friend) => {

  const db = firebase.database();  
  return (dispatch) => {
    let roomKey = null;

    /*
     --- bana ait olan butun odaları bul  --- 
     */

    db.ref(`users/${me.uid}/rooms`).on('value', rooms => {

       /*
     --- eger bır oda yoksa herseyı durdur  --- 
     */

     if (rooms.val() === null) {
       dispatch({
         type: FETCH_ROOM_ERROR
       });
       return;
     }

       /*
     --- butun odaları gez  --- 
     */
    rooms.forEach(room => {

      db.ref(`users/${friend.uid}/rooms/${room.key}`).on('value', snap => {
        
        if (snap.val()) {
          console.log('ROOM FOUND!');
          roomKey = room.key;
        }
      });


      /*
     ---oda var ise donguyu bitir  --- 
     */
      if (roomKey != null) {
        return;
      }
    });

     /*
     ---oda bize ait ise mesajları al  --- 
     */
    if (roomKey != null) {
      dispatch({
        type: FETCH_ROOM_SUCCES,
        roomKey
      });

      fetchMessagesByRoom(dispatch, roomKey, db);
    } else {
        dispatch({
          type: FETCH_ROOM_ERROR
        })
      }
    }, error => {
      console.log('findByRoomUserError', error);
    });
  };
};

const fetchMessagesByRoom = (dispatch, roomKey, db) => {
db.ref(`messages/${roomKey}`).on('value', snap => {
  const messages = [];
  snap.forEach(message => {
    const msg = message.val();
    messages.push({
      _id: message.key,
      text: msg.text,
      user: msg.user,
      createdAt: msg.createdAt
    });
  });

   /*
     --- Sort Messages  --- 
     */

     messages.sort((a,b) => {
       return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
     });
     dispatch({
       type: FETCH_MESSAGE_SUCCES,
       messages
     });
}, error => {
  console.log('fetchMeesagesByRoomERROR', error);
}); 
};


export const sendMessage = (me, friend, text, roomKey) => {

  const db = firebase.database();
  return (dispatch) => {

    /* ---  Eger bir odaya sahıp değilsek 
            yeni bir kayıt olustururuz     --- */
            if (roomKey === null) {
              roomKey = registerRoom(dispatch, me, friend, db);
            }

            const now = firebase.database.ServerValue.TIMESTAMP;

            /* ---  Mesajı aktar   --- */

            db.ref(`messages/${roomKey}`).push({
              text,
              user: {
                _id: me.uid,
                name: me.displayName,
                avatar: me.avatarUrl
              },
              createdAt: now
            });
  };
};

const registerRoom = (dispatch, me, friend, db) => {
  
  const roomKey = db.ref(`rooms`).push().key;

  const update = {};

      /*
      *Update Room 
      */

  update[`rooms/${roomKey}/${me.uid}`] = true;
  update[`rooms/${roomKey}/${friend.uid}`] = true;

     /*
      *Update User 
      */

      
  update[`users/${me.uid}/rooms/${roomKey}`] = true;
  update[`users/${friend.uid}/rooms/${roomKey}`] = true;

  db.ref().update(update).catch(error => console.log('regıster room error', error));
  dispatch({
    type: REGISTER_ROOM,
    roomKey
  });
  return roomKey;
}

