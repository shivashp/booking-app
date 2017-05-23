import React, { PropTypes } from 'react'
import {
  View, Text
} from 'react-native';
import PhoneSection from './components/PhoneSection';
import MessageSection from './components/MessageSection';
import Swiper from 'react-native-swiper';


class App extends React.Component {
  render () {
    return (
      <Swiper showsPagination={false}>
        <PhoneSection />
        <MessageSection />
      </Swiper>
    )
  }
}

export default App;
