import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform
} from 'react-native';
import { SingleProperty } from '../widgets';
import { RoomList } from './RoomList';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MyListings extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleSection}>
          <View>
            <Text style={styles.title}>My Listings</Text>
          </View>
        </View>
        <View style={styles.roomsList}>
        <SingleProperty uri="http://missionhillpads.com/wp-content/uploads/2015/03/mission-hill-furnished-apartments-boston.jpg"/>
        <SingleProperty uri="http://comfyhouston.com/wp-content/uploads/2013/12/the-woodlands-furnished-apartments.jpg?x64845" />
        <SingleProperty uri="https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg" price="25,000" type="Apartment" title="3 BHK for Rent" address="Old Baneshwor, Kathmandu"/>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:60,
    paddingBottom:50,
  },
  title: {
    fontWeight:'bold',
    fontSize:30,
    color: '#484848',
    letterSpacing: 1,
    paddingHorizontal:20
  },
  roomsList: {
    marginTop:50,
    paddingBottom:(Platform.OS === 'android')?110:50,
  }
})
