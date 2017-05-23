import React, { Component, PureComponent } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView
} from 'react-native';
import { SearchBar, SingleProperty } from '../widgets'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import RoomList from './RoomList';

export default class Home extends Component {
  render() {
    return(
      <View style={styles.container}>
        <SearchBar />
          <ScrollableTabView style={styles.tab}
            tabBarTextStyle={{fontSize:13, fontWeight: '600'}}
            tabBarUnderlineStyle ={{backgroundColor: '#3B7CEC', height:2, position: 'absolute', bottom: -1}}
            tabBarActiveTextColor={'#3B7CEC'}
            tabBarInactiveTextColor={'#9DABC0'}>
            <RoomList tabLabel="ALL" />
            <Sample tabLabel="ROOM" />
            <Sample1 tabLabel="OFFICE" />
            <SingleProperty tabLabel="FLAT" />
          </ScrollableTabView>
      </View>
    )
  }
}

class Sample extends PureComponent {
  render() {
    return (
      <ScrollView>
        <SingleProperty uri="http://comfyhouston.com/wp-content/uploads/2013/12/the-woodlands-furnished-apartments.jpg?x64845" />
        <SingleProperty uri="https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg" price="25,000" type="Apartment" title="3 BHK for Rent" address="Old Baneshwor, Kathmandu"/>
        <SingleProperty uri="http://missionhillpads.com/wp-content/uploads/2015/03/mission-hill-furnished-apartments-boston.jpg"/>
      </ScrollView>
    )
  }
}

class Sample1 extends PureComponent {
  render() {
    return (
      <ScrollView>
        <SingleProperty uri="http://missionhillpads.com/wp-content/uploads/2015/03/mission-hill-furnished-apartments-boston.jpg" price="38,000" type="Room"/>
        <SingleProperty uri="http://www.housinghelpers.com/1-images/corporate%20housing%20photo%20web.jpg" price="25,000" type="Apartment" title="3 BHK for Rent" address="Old Baneshwor, Kathmandu"/>
        <SingleProperty uri="http://comfyhouston.com/wp-content/uploads/2013/12/the-woodlands-furnished-apartments.jpg?x64845" />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },
  tab: {
    marginTop:50,
  }
})
