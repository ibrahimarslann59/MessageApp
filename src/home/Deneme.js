import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

const firebase = require("firebase");
require("firebase/firestore");


export default class Deneme extends Component {

  
  send = () => {

    firebase.database().ref('messagess').set({
        _id: 'id',
        name: 'name',
        avatar: 'avatar'
    })
  }


  render() {
    return (
      <View>
        <Text> Dene </Text>
      <Button 
        title="selam"
        onPress={this.send()}
      />
      </View>
    );
  }
}
