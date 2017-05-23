import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Text } from 'react-native';
import Login from './components/Login';
import Home from './components/Home';
import Settings from './components/Settings';
import Bookmarks from './components/Bookmarks';
import MyListings from './components/MyListings';
import AddPost from './components/AddPost';
import Icon from 'react-native-vector-icons/Ionicons';

const Root = () => {
  return (
    <Router key="root" hideNavBar={true} >
        <Scene key = "main" tabs = {true} pressOpacity={0.7} tabBarStyle={{ backgroundColor: '#FFFFFF', borderTopWidth:1, borderColor: '#ccc'}} animation="fade">
          <Scene key = "home" icon = {TabIcon} component={Home} title="Home" />
          <Scene key = "listings" icon = {TabIcon} component={MyListings} title="List" />
          <Scene key = "third" icon = {TabIcon} component={AddPost} title="Add" initial={true}/>
          <Scene key = "bookmark" icon = {TabIcon} component={Bookmarks} title="Bookmark"/>
          <Scene key = "settings" icon = {TabIcon} component={Settings} title="Setting"/>
        </Scene>
      <Scene key="login" component={Login} title="Login"/>
    </Router>
  )
}

const Icons = {
  'Home': 'md-home',
  'List': 'md-list',
  'Add': 'ios-radio-button-on',
  'Bookmark': 'ios-heart',
  'Setting': 'md-settings'
}

const TabIcon = ({ selected, title }) => {
  if(title == 'Add'){
    return (
      <Icon style={{
          fontSize:55,
          color: '#0084ff',
          backgroundColor: 'transparent',
          position: 'absolute',
        }} name={Icons[title]} />
    );
  } else {
    return (
      <Icon style={{fontSize:25, color: selected ? '#0084ff' :'#999'}} name={Icons[title]} />
    );
  }
}

export default Root;
