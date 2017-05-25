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
  _onMomentumScrollEnd(e, state, context) {    
    this.setState({active: state.index})
  }
  render () {
    return (
      <Swiper showsPagination={false} loop={false} onMomentumScrollEnd ={this._onMomentumScrollEnd.bind(this)}>
        <PhoneSection active={(this.state.active === 0)}/>
        <MessageSection active={(this.state.active === 1)}/>
        <DocumentSection active={(this.state.active === 2)}/>
      </Swiper>
    )
  }
}

export default App;
