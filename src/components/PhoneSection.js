import React, { PropTypes } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, Image, ScrollView
} from 'react-native'
import * as global from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

class PhoneSection extends React.Component {
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
    var buttonSection = (this.state.active)?(<Menu />):(
      <TouchableOpacity style={global.COMMON.button} onPress={this._onPress.bind(this)}>
          <Icon style={global.COMMON.icon} name="ios-call-outline" />
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

const Menu = () => (
  <Animatable.View animation="slideInUp" duration={100} style={global.COMMON.blackOverlay}>
    <ScrollView style={global.COMMON.contactList} horizontal={true} showsHorizontalScrollIndicator={false}>
      <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/>
      <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg"/>
      <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"/>
      <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg"/>
      <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/felipenogs/128.jpg"/>
      <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"/>
      <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg"/>
      <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/arashmil/128.jpg"/>
      <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg"/>

    </ScrollView>
    <ScrollView style={global.COMMON.companyList} horizontal={true} showsHorizontalScrollIndicator={false}>
      <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/jollynutlet/128.jpg" />
      <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/getsocial_now/128.jpg" />
      <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/ekvium/128.jpg" />
      <Contact image="http://postashio.com/wp-content/uploads/2015/10/royal-dutch-shell-logo.jpg" />
      <Contact image="http://postashio.com/wp-content/uploads/2015/10/bp-logo.jpg" />
      <Contact image="http://postashio.com/wp-content/uploads/2015/10/total-logo.jpg" />
      <Contact image="http://postashio.com/wp-content/uploads/2015/10/ge-logo.jpg" />
      <Contact image="http://postashio.com/wp-content/uploads/2015/10/hon-hai-precision-logo.jpg" />
    </ScrollView>
  </Animatable.View>
)

class Contact extends React.PureComponent {
  render(props) {
    return(
      <Animatable.View animation="fadeIn">
        <TouchableOpacity style={global.COMMON.person}>
          <Image
            style={{height:50, width:50, borderRadius:25}}
            source={{ uri: this.props.image }}
          />
      </TouchableOpacity>
    </Animatable.View>
    )
  }
}

Contact.defaultProps = {
  name: 'Shiva Pandey',
  image: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/p32x32/17883545_1743147219045689_6617885352823046601_n.jpg?oh=e118bdbfb8a190dfb9ffe216528e700e&oe=59BB7B8C'
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

export default PhoneSection;
