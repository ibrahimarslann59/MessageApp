import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

import { EMAIL_CHANGED, 
        PASSWORD_CHANGE, 
        LOGIN_USER, 
        LOGIN_USER_SUCCES, 
        LOGIN_USER_FAIL
       } from './types';


  /* E-mail Changed  --- E-mail değiştiğinde payload ı guncelle  */

  export const emailChanged = (email) => {

    return (dispatch) => {
      dispatch({
        type: EMAIL_CHANGED,
        payload: email
      });
    };
  };

  //Password Changed

  export const passwordChanged = (password) => {
    return(dispatch) => {
      dispatch({
        type: PASSWORD_CHANGE,
        payload: password
     });
    };
  };

  /* LoginUser  --- E-mail ve password u dıspatch et ve ıf kosuluna gırmezse e-mail ve passwordu firebase de check et ve doğru ıse loginSucces metodu calısır */

  export const loginUser = (email, password) => {
    return(dispatch) => {
      dispatch({
        type: LOGIN_USER });
        if (email === '' || password === '') {
          Alert.alert(
            'Login Warning',
            'E-mail veya Password bos bırakılamaz!',
          
          [
            { text: 'tamam', onPress: () => null }
          ]
          );
        } else {
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then(user => loginSucces(dispatch, user))
          .catch(() => loginFail(dispatch));
        }
    }
  }


  /* loginSucces  --- eger user basarılı gırıs yapmıssa chat sayfasına yonlendırılır  */
  const loginSucces = (dispatch, user) => {
    dispatch({
      type: LOGIN_USER_SUCCES,
      payload: user
    });
    Actions.chat();
  };

/* LoginFail  --- giris basarısız olmussa alert verılır ve loginLoading false olur */
  const loginFail = (dispatch) => {
    Alert.alert(
      'Login Fail',
      'E-posta veya Password Hatalı!',
      [
        { text: 'tamam', onPress: () => null }
      ]
    )
    dispatch({
      type: LOGIN_USER_FAIL
    });
  };


 