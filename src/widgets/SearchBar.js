import React, { Component } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SearchBar extends Component {
  render() {    
    return(
      <View style={styles.container} activeOpacity={0.6} onPress={this.props.onPress}>
        <View style={styles.search_icon}>
          <Icon style={styles.icon} name="search" />
        </View>
        <TouchableOpacity style={{flex:6}}>
          <Text style={StyleSheet.flatten(styles.search)}>Search Rooms and offices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1}}>
          <Icon style={styles.icon} name="sort-amount-asc" />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth:0.5,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderColor: '#9DABC0',
    backgroundColor:'white',
    maxHeight:80,
    position:'absolute',
    top: 0,
    left: 0,
    width:'100%',
    flex:1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  search_icon: {
    paddingLeft:0,
    paddingRight: 20
  },
  icon: {
    fontSize:18,
    color:'#9DABC0',
    alignSelf: 'flex-end'
  },
  search: {
    marginTop: 0,
    color: '#9DABC0',
    fontSize:16,
    fontWeight: '500'
  }

})

export default SearchBar;
