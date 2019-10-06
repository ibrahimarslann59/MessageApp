import { View, Text } from 'react-native';
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './src/screen/Home';
import Login from './src/screen/Login';
import Chat from './src/screen/Chat';
import listContact from './src/home/contact/listContact';
import Setting from './src/screen/Setting';
import Conversations from './src/home/contact/Conversations';
import Deneme from './src/home/Deneme';

const TabIcon1 = () => {
  return(
    <Icon
    name="user-secret"
    size={24}
    color="red"
  />
  );
  };
  
  
  const TabIcon2 = () => {
    return(
      <Icon
      name="comments"
      size={26}
      color="red"
    />
    );
    };
    const TabIcon3 = () => {
      return(
        <Icon
        name="users"
        size={24}
        color="red"
      />
      );
      };

      const TabIcon4 = () => {
        return(
          <Icon
          name="cog"
          size={24}
          color="red"
        />
        );
        };

        

const RouterComponent = () => {
  
  return (
    <Router  navigationBarStyle={{ backgroundColor: '#7ed6df' }}>

      <Scene
        key="tabbar"
        tabs={true}
        tabBarStyle={{ backgroundColor: '#dfe4ea' }}
        hideNavBar
        headerLayoutPreset="center"
      >
          
            <Scene
              key="chat"
              component={Chat}
              title="Chat" 
              icon={TabIcon3}
              
            />

            <Scene
              key="setting"
              component={Setting}
              title="Setting" 
              icon={TabIcon2}
            
            />

            <Scene
              key="home"
              component={Home}
              title="Home" 
              icon={TabIcon1}
            />


            <Scene
              key="contact"
              component={listContact}
              title="List Contact" 
              icon={TabIcon4}
            />

            <Scene
              key="conversations"
              component={Conversations}
              title="Conversations" 
              icon={TabIcon4}
            />

            
            <Scene
              key="Deneme"
              component={Deneme}
              title="Deneme" 
              icon={TabIcon4}
              initial
            />
         
      </Scene>
     
    </Router>
  )
}

export default RouterComponent;