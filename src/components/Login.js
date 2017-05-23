import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
          source={require('../assets/img/ROOMIE.png')}
          />
        </View>
        <View style={styles.caption}>
          <Text style={styles.captionText}>Sign in to access your account.</Text>
        </View>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={Actions.main}>
            <View style={styles.fbbuttonLeft}>
              <Icon style={styles.leftText} name="facebook" />
            </View>
            <View style={styles.fbbuttonRight}>
              <Text style={styles.rightText}>Sign in with Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={Actions.main}>
            <View style={styles.gbuttonLeft}>
              <Icon style={styles.leftText} name="google-" />
            </View>
            <View style={styles.gbuttonRight}>
              <Text style={styles.rightText}>Sign in with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    marginTop: 100
  },
  captionText: {
    color: '#878686',
    fontSize: 17,
    marginTop: 20,
  },
  buttonSection: {
    marginTop:90
  },
  button: {
    flexDirection: 'row',
    marginTop:20,
  },
  fbbuttonLeft: {
    backgroundColor: '#224389',
    paddingVertical:12,
    paddingHorizontal:20
  },
  leftText: {
    color:'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  fbbuttonRight: {
    backgroundColor: '#3B5998',
    paddingVertical:12,
    paddingHorizontal:20,
  },
  rightText: {
    color:'white',
    fontSize:17
  },
  gbuttonLeft: {
    backgroundColor: '#AA2918',
    paddingVertical:12,
    paddingHorizontal:20,
  },
  gbuttonRight: {
    backgroundColor: '#CF4332',
    paddingVertical:12,
    paddingHorizontal:20,
    paddingRight:40
  }

})
