import React, { PropTypes } from 'react'
import {
  View, Image, TouchableOpacity
} from 'react-native';
import * as global from '../styles/global';
import * as Animatable from 'react-native-animatable';

class Contact extends React.Component {
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
export default Contact;
