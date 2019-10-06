import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Chat from './Chat';

export default class Home extends Component {
  render() {
    return (
      <View>
         
           <Chat />
           
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'gray'}}>
        <Icon
          raised
          name='heartbeat'
          type='font-awesome'
          color='#f50'
          onPress={() => Actions.Chat()} />

        <Icon
          raised
          name='heartbeat'
          type='font-awesome'
          color='#f50'
          onPress={() => Actions.Chat()} />

        <Icon
          raised
          name='heartbeat'
          type='font-awesome'
          color='#f50'
          onPress={() => Actions.Chat()} />   
      </View>
      </View>
    )
  }
}
