import React, { PropTypes } from 'react'
import {
  ScrollView
} from 'react-native';
import * as global from '../styles/global';
import * as Animatable from 'react-native-animatable';
import Contact from './Contact';

class Menu extends React.PureComponent {
  render () {    
    return (
      <Animatable.View animation="slideInUp" duration={100} style={global.COMMON.blackOverlay}>
        <ScrollView style={global.COMMON.contactList} horizontal={true} showsHorizontalScrollIndicator={false}>
          <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/>
          <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg"/>
          <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"/>
          <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg"/>
          <Contact image="https://s3.amazonaws.com/uifaces/faces/twitter/felipenogs/128.jpg"/>
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
  }
}

export default Menu;
