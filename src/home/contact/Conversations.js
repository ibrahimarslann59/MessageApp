import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import { findRoomByUser, sendMessage } from '../../actions';


class Conversations extends Component {

  componentWillMount() {
    const { me } = this.props;
    const { friend } = this.props;
    
    this.props.findRoomByUser(me, friend);  
  }
  
  onSend = (messages = []) => {
    console.log('onSend', messages);
    const { me, roomKey } = this.props;
    const { friend } = this.props;
    this.props.sendMessage(me, friend, messages[0].text, roomKey);
  }

  render() {

    if (this.props.chatLoading) {
      return (
        <View>
          <ActivityIndicator size="large" color="purple" animating />
        </View>
      );
    }
    return (
      <View>
          <GiftedChat
          messages={this.props.messages}
          user = {{
                  _id: this.props.me.uid
                }}
          onSend={this.onSend()}
          />
      </View>
    )
  }
}


const mapStateToProps = ({ loginResponse, chatResponse }) => {
const { roomKey, message, chatLoading } = chatResponse;
const { user } = loginResponse;
return {
  me: user,
  roomKey,
  message,
  chatLoading
}
}
export default connect(mapStateToProps, {findRoomByUser, sendMessage})(Conversations);