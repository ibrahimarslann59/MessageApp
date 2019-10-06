import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

import { 
   REGISTER_USER,
  REGISTER_USER_SUCCES,
  REGISTER_USER_FAIL } from './types';

  
  /* Register User  --- if kosuluna gırmezse kayıt basarılı olur ve regısterLoadıng true olur ve regısterSucces metodu calısır */

  export const registerUser = (email, password) => {
    const users = firebase.firestore().collection("users");
    
    return(dispatch) => {
      dispatch({
        type: REGISTER_USER
      });
      if (email === '' || password === '') {
        Alert.alert(
          'Register Warning',
          'E-mail veya Password bos bırakılamaz',
          [
            { text: 'tamam', onPress: () => null}
          ]
        );
      } else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
          users.doc(response.user.uid).set({ displayName: '', email, avatarUrl: 'https://www.google.com/search?q=empty+avatar&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiauYTlzZjkAhXMwqYKHZ-tBvIQ_AUIESgB&biw=1920&bih=937#imgrc=31BCR-3tbjEfyM:' })})
        .then(user => registerSucces(dispatch, user))
      
        .catch(() => registerFail(dispatch));
      }
    }
  }
  

    /* Register Succes  --- eger register ıslemı basarılı olursa actıon.payload a user ı ata ve registerLoading i false yap */
    const registerSucces = (dispatch, user) => {
      dispatch({
        type: REGISTER_USER_SUCCES,
        payload: user
      });
      Actions.chat();
    };
  
    /* Register Fail  --- eger regıster ıslemı olmussa ılgılı alertı verdıkten sonra regısterLoading ı false yap */
  
    const registerFail = (dispatch) => {
      Alert.alert(
        'Register Fail',
        'Bu E-posta kullanılmaktadır.. Lütfen farklı bir e-posta giriniz!',
        [
          { text: 'tamam', onPress: () => null }
        ]
      )
      dispatch({
        type: REGISTER_USER_FAIL
      });
    }
  