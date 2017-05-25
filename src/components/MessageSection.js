import React, { PropTypes } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, Image, ScrollView
} from 'react-native'
import * as global from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import Menu from './Menu';
import {Actions } from 'react-native-router-flux';

class MessageSection extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    }
  }
  _onPress() {
    this.setState({active: true})
  }
  _onBackButtonPressed() {
    this.setState({active: false})
  }
  render () {
    var buttonSection = (this.state.active)?(<Menu onPress={() => Actions.gallery()}/>):(
      <TouchableOpacity style={global.COMMON.button} onPress={this._onPress.bind(this)}>
          <Icon style={global.COMMON.icon} name="ios-images" />
      </TouchableOpacity>
    )
    var backButton = (this.state.active)?(
      <TouchableOpacity style={global.COMMON.navView} onPress={this._onBackButtonPressed.bind(this)}>
        <Icon style={[global.COMMON.icon, {color:'white', textAlign: 'left', paddingLeft:20, paddingTop:25}]} name="ios-arrow-round-back" />
      </TouchableOpacity>
    ):null;
    return (
      <View style={[global.COMMON.container, {backgroundColor: 'black'}]}>
        <Animatable.View animation="fadeOut" delay={1000} style={styles.overlay}></Animatable.View>
        <View style={[global.COMMON.container, {backgroundColor: 'transparent'}]}>
          {backButton}
          <View style={global.COMMON.centerView}>
            <Animatable.Text animation="fadeOut" delay={1400} style={global.COMMON.centerText}>Place a call to Contacts and Service Providers</Animatable.Text>
          </View>
          <View style={global.COMMON.bottomSection}>
            {buttonSection}
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
