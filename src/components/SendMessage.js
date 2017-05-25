import React, { PropTypes } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, Image
} from 'react-native';
import * as global from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';

class SendMessage extends React.Component {
  render () {
    return (
      <View style={[global.COMMON.container, {backgroundColor: '#efefef'}]}>
        <View style={styles.topbar}>
          <TouchableOpacity style={[global.COMMON.navView, {flex: 1}]} onPress={() => Actions.pop()}>
            <Icon style={[global.COMMON.icon, {color:'white', textAlign: 'left', marginTop:-7}]} name="ios-arrow-round-back" />
          </TouchableOpacity>
          <View style={{flex:2}}>
              <Text style={styles.title}>SHIVA PANDEY</Text>
          </View>
          <View style={{flex:1}}>
            <Image
              source={{uri: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg'}}
              style={{width:40, height: 40, borderRadius: 20, marginTop: -10, position: 'absolute', right: 0}}
              />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.userProfile}>
            <Animatable.View animation="fadeIn" delay={500}>
              <Image
                source={{uri: 'https://img.grouponcdn.com/deal/5CTeAJF1h8qExF1p33aP/LK-1225x735/v1/c700x420.jpg'}}
                style={{width:275, height: 275, borderRadius: 25}}
                />
            </Animatable.View>
            <Animatable.View animation="zoomIn" delay={700} style={{alignItems: 'center'}}>
              <Icon style={[global.COMMON.icon, {color: '#f30',textAlign: 'left', marginTop:10, fontSize:50}]} name="ios-checkmark-circle" />
              <Text style={styles.caption}>Picture Sent Successfully!</Text>
            </Animatable.View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topbar: {
    height:60,
    padding:20,
    backgroundColor:'#f30',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize:17,
    textAlign: 'center'
  },
  content: {
    flex: 1,
  },
  imageDetails: {
    flex:1,
  },
  caption: {
    fontSize: 21,
    paddingVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  userProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:2.5,
  },
})

export default SendMessage;
