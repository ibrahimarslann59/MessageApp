import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../actions/loginactions';
import { registerUser } from '../actions/registeractions';

 class Login extends Component {


   // Login Buttonuna basıldıgında loginUser actıon a emaıl ve password u gonder

  clickLogin(){
    const { email, password } = this.props;
    this.props.loginUser(email, password);
  }
       // clıckRegıster e basıldıgında regısterUser a emaıl ve password e atar

  clickRegister() {
    const { email, password } = this.props;

    this.props.registerUser( email, password );
  }


  
  render() {
    const img = require('../image/back.jpg');
    return (

      
      <ImageBackground source={img} style={{width: '100%', height: '100%'}}>
  
      <View style={{ marginTop: 30, alignItems: 'center', justifyContent: 'center'}}>

  <Input
    placeholder="E-mail"
    inputStyle={{color: 'white'}}
    leftIcon={
      <Icon
        name='mail'
        size={27}
        color='#00d2d3'
        style={{marginRight: 7}}
  />
    } 
    value={this.props.email}
    onChangeText={email => this.props.emailChanged(email)}
    />

    <Input
      placeholder ="Parola"
      secureTextEntry
      keyboardType='numeric' 
      inputStyle={{color: 'white'}}
    leftIcon={
      <Icon
        name='key'
        size={27}
        color='#00d2d3'
        style={{marginRight: 10}}
      />
    }
    value={this.props.password}
    onChangeText={password => this.props.passwordChanged(password)}
    />

<View style={{marginTop: 5}}>
    <Button
    icon={
      <Icon
        name="login"
        size={22}
        color="white"
      />
    }
    iconRight
    title="   Giris    "
    size={10}
    onPress={this.clickLogin.bind(this)}
    buttonStyle={{backgroundColor: 'green'}}  
    />
</View>

<View style={{marginTop: 5}}>
    <Button
    title="   Kayıt ol    "
    size={12}
    onPress={this.clickRegister.bind(this)} 
    buttonStyle={{backgroundColor: '#f53b57'}} 
    />
</View>
  </View>
  </ImageBackground>
    )
  } 
}

const mapStateToProps = ({ loginResponse, registerResponse }) => {
const { email, password, loginLoading } = loginResponse;
const { registerLoading } = registerResponse;
return {
  email,
  password,
  loginLoading,
  registerLoading
};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, registerUser })(Login);
