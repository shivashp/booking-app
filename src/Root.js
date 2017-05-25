import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import App from './App';
import PhoneProfile from './components/PhoneProfile';
import MessageSection from './components/MessageSection';
import PhoneSection from './components/PhoneSection';
import Gallery from './components/Gallery';

const Root = () => {
  return (
    <Router key="root" hideNavBar={true} animation="fade">
      <Scene key="app" component={App} title="App" />
      <Scene key="gallery" component={Gallery} title="Gallery" />
      <Scene key="phone" component={PhoneSection} title="Phone Section"/>
      <Scene key="message" component={MessageSection} title="Message Section"/>
      <Scene key="call" component={PhoneProfile} title="Calling"/>
    </Router>
  )
}

export default Root;
