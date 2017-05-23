import React, { PropTypes } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native'
import * as global from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

class MessageSection extends React.Component {
  render () {
    return(
      <View style={[global.COMMON.container, {backgroundColor: 'black'}]}>
        <Animatable.View animation="fadeOut" delay={1000} style={styles.overlay}></Animatable.View>
        <View style={[global.COMMON.container, {backgroundColor: 'transparent'}]}>
          <View style={global.COMMON.centerView}>
            <Animatable.Text animation="fadeOut" delay={700} style={global.COMMON.centerText}>Place a call to Contacts and Service Providers</Animatable.Text>
          </View>
          <View style={global.COMMON.bottomSection}>
            <TouchableOpacity style={global.COMMON.button}>
                <Icon style={global.COMMON.icon} name="ios-chatbubbles-outline" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'white',
    opacity: 1,
    flex:1,
    position: 'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
  },

})

export default MessageSection;
