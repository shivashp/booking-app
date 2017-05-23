import React, { PureComponent } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, Platform, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Settings extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleSection}>
          <View>
            <Text style={styles.title}>Shiva</Text>
            <Text style={styles.subTitle}>View and edit profile</Text>
          </View>
          <View style={{position: 'relative', right: -75}}>
            <Image
            style ={{width: 80, height:80, borderRadius:40}}
            source={{uri: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/p130x130/17883545_1743147219045689_6617885352823046601_n.jpg?oh=ebaf56c7769da750d322ccde07e0ba54&oe=59C16875'}}
            />
          </View>
        </View>
        <ScrollView style={styles.listSection}>
          <ListItem name="Home" icon="ios-home-outline"/>
          <ListItem name="Listings" icon="ios-list-box-outline"/>
          <ListItem name="Help" icon="ios-help-circle-outline"/>
          <ListItem name="Settings" icon="ios-settings-outline"/>
          <ListItem icon="ios-power-outline" name="Log out"/>
        </ScrollView>
      </View>
    )
  }
}

const ListItem = (props) => {
  return (
    <TouchableOpacity style={[styles.listItem, (props.name=='Log out')?{borderBottomWidth:0}:'']} activeOpacity={0.5}>
      <View stle={{flex:4}}>
          <Text style={styles.listText}>{props.name}</Text>
      </View>
      <View style={{flex:1}}>
          <Icon style={styles.icon} name={props.icon} />
      </View>
    </TouchableOpacity>
  )
}

ListItem.defaultProps = {
  name: 'Travel for work?',
  icon: 'ios-home'
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
    paddingBottom:50,
    paddingHorizontal: 20
  },
  titleSection: {
    flexDirection: 'row'
  },
  title: {
    fontWeight:'bold',
    fontSize:30,
    color: '#484848',
    letterSpacing: 1
  },
  subTitle: {
    color: '#797979',
    marginTop:5,
    fontSize:18,
    fontWeight: '100',
    letterSpacing: 1
  },
  listSection: {
    marginTop:50
  },
  listItem: {
    flexDirection: 'row',
    borderBottomWidth:0.3,
    paddingVertical: 20,
    borderColor: '#797979'
  },
  icon: {
    alignSelf: 'flex-end',
    fontSize:25,
    color: '#000000',
  },
  listText: {
    color: '#484848',
    fontSize:21,
    fontWeight: '200',
    fontFamily: (Platform.OS === 'android')? 'sans-serif-light':'ArialHebrew-Light',
    letterSpacing: 1
  }
})
