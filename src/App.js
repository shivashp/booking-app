import React, { PropTypes } from 'react'
import {
  View, Text
} from 'react-native';
import PhoneSection from './components/PhoneSection';
import MessageSection from './components/MessageSection';
import DocumentSection from './components/DocumentSection';
import Swiper from 'react-native-swiper';
import Camera from 'react-native-camera';
import * as global from './styles/global';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 0
    }
  }
  render () {
    return (
      <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={global.COMMON.container}
          aspect={Camera.constants.Aspect.fill}>
      <Swiper showsPagination={false} loop={false} index={1}>
        <MessageSection active={(this.state.active === 1)}/>
        <PhoneSection active={(this.state.active === 0)}/>
        <DocumentSection active={(this.state.active === 2)}/>
      </Swiper>
      </Camera>
    )
  }
}

export default App;
