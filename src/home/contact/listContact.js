import React, { Component } from 'react';
import { Text, View, ListView, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import { Actions } from 'react-native-router-flux';

import { fetchListContact } from '../../actions/contactactions';

 
 class listContact extends Component {
  
  componentWillMount() {
    console.log('ListContact componentWillMount');
    this.props.fetchListContact(this.props);
    this.createDataSource(this.props);
}

componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
}

createDataSource({ contacts }) {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(contacts);
}
    onRowPressed = (friend) => {
      Actions.conversations({ friend });
  }

  renderRow = (item) => {
      return (
          <TouchableOpacity
              onPress={this.onRowPressed.bind(this, item)}
              style={styles.row}
          >
              <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
              <Text style={styles.name} >{item.displayName}</Text>
          </TouchableOpacity>
      );
  }

  render() {

    if(this.props.contactLoading) {
        <View style={{ flex:1}}>
        <LottieView ref={animation => {this.animation = animation}} autoPlay source={require('../../json/hound.json')} />
        </View>
    }
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
         />
       </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  avatar: {
    width: 50,
    height: 50
  },

  row: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#000'

  },

  name: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#000'
  }
};

const mapStateToProps = ({ contactResponse, loginResponse }) => {

  const { contactLoading, contact } = contactResponse;
  const { user } = loginResponse;
  return {
    contactLoading,
    contact,
    me: user
  };
};

export default connect(mapStateToProps, { fetchListContact })(listContact);

