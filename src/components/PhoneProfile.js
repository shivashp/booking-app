import React, { PropTypes } from 'react'
import {
  View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import * as global from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux'

class PhoneProfile extends React.Component {

  render () {
    return(
      <Image
        source={{uri: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg'}}
        style={[global.COMMON.container,{width:'100%'}]}
        >
        <View style={styles.overlay}></View>
        <View style={styles.topSection}>
          <Text style={styles.name}>
            SHIVA PANDEY
          </Text>
        </View>
        <View style={styles.bottomSection}>
          <TouchableOpacity style={[styles.roundButton,styles.btnRed]} onPress={() => Actions.app()}>
            <Icon style={global.COMMON.icon} name="ios-close" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
            <Icon style={global.COMMON.icon} name="ios-volume-up-outline" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
            <Icon style={global.COMMON.icon} name="ios-mic-outline" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
            <Icon style={global.COMMON.icon} name="ios-videocam-outline" />
          </TouchableOpacity>
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efefef",
    padding:20,
  },
  overlay: {
    position: 'absolute',
    top:0,
    left:0,
    width:'100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  topSection: {
    flex:2,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomSection: {
    flex:1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  name: {
    paddingVertical:30,
    backgroundColor: 'transparent',
    fontSize:33,
    color: 'white',
  },
  roundButton: {
    backgroundColor: '#5C6BC0',
    width:50,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginHorizontal:13,
    marginTop:50
  },
  btnRed: {
    backgroundColor: 'red'
  },

})


export default PhoneProfile;
