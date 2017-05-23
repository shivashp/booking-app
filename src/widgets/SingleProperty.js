import React, { Component, PureComponent } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';

export default class SingleProperty extends PureComponent {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.9}>
        <View style={styles.imageSection}>
          <Image
            source = {{uri: this.props.uri}}
            style = {styles.image}
            >
            <View style={styles.titleSection}>
              <Text style={styles.titleText}>Rs. {this.props.price} per month</Text>
              <Text style={styles.titleCaption}>{this.props.type}</Text>
            </View>
          </Image>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.mainTitle}>{this.props.title}</Text>
          <Text style={styles.subTitle}>{this.props.address}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

SingleProperty.defaultProps = {
    uri: 'https://cdn.pixabay.com/photo/2014/12/15/14/05/home-office-569153_960_720.jpg',
    price: '14,000',
    type: 'Office Space',
    title: 'Fully Furnished Office',
    address: 'Peepalbot, Dillibazar'
}

const styles = StyleSheet.create({
  image: {
    height:250,
    width: '100%',
  },
  titleSection: {
    position: 'absolute',
    paddingLeft: 20,
    paddingBottom:15,
    paddingTop:15,
    width:'100%',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500'
  },
  titleCaption: {
    color: '#9DABC0',
    paddingTop:2
  },
  textSection: {
    paddingVertical: 20,
    paddingHorizontal:20,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: '500'
  },
  subTitle: {
    color: '#6F83A0',
    paddingTop: 5
  },
})
