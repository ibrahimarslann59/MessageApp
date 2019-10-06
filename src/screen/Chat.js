import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

  /**
   UPDATE EDILECEK!!
   */
const list = [
  {
    name: 'Ibrahim Arslan',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Offline'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Online'
  },
  {
    name: 'Sedat Arslan',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Online'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Offline'
  },
  {
    name: 'Kubilay Kaya',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Online'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Online'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Online'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Online'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Online'
  }
];


export default class Chat extends Component {


  render() {
   
    return (
      <ScrollView>
        
      {
        list.map((l, i) => (
          <TouchableOpacity>
            <View style={styles.ListView}>
          <ListItem
            key={i}
            leftAvatar={{ source: require('../image/foto.jpg') }}
            title={l.name}
            subtitle={l.subtitle}
          />
          </View>
          </TouchableOpacity>
        ))
      }
     
    </ScrollView>
    )
  }
}

const styles = {

  ListView: {
    borderRadius: 20,
    marginRight: 15,
    marginLeft: 8,
    marginTop: 9,
    padding: 7,
    borderWidth: 2,
    borderColor: 'black'
  }
};
