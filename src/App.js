import React, { PropTypes } from 'react'
import {
  View, Text
} from 'react-native';
import PhoneSection from './components/PhoneSection';
import MessageSection from './components/MessageSection';
import DocumentSection from './components/DocumentSection';
import Swiper from 'react-native-swiper';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 0
    }
  }
  render () {
    return (
      <Swiper showsPagination={false} loop={false}>
        <PhoneSection active={(this.state.active === 0)}/>
        <MessageSection active={(this.state.active === 1)}/>
        <DocumentSection active={(this.state.active === 2)}/>
      </Swiper>
    )
  }
}

export default App;
