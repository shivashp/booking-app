import React, { PropTypes } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ListView
} from 'react-native';
import * as global from '../styles/global'
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';

const width = Dimensions.get('window').width

var data = [
  {
    id: 0,
    uri: 'http://cdn1.droom.in/photos/images/drm/super-cars.png',
  },
  {
    id: 1,
    uri: 'https://img.grouponcdn.com/deal/5CTeAJF1h8qExF1p33aP/LK-1225x735/v1/c700x420.jpg',
  },
  {
    id: 2,
    uri: 'http://www.math.uni-frankfurt.de/~person/_4170854.jpg',
  },
  {
    id: 3,
    uri: 'https://www.cbhs.com.au/sfimages/default-source/Marketing-Page-image/young-family-health-cover.jpg?sfvrsn=4',
  },
  {
    id: 4,
    uri: 'http://www.visitsingapore.com/singapore-itineraries/3-day-family-guide-to-singapore/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg',
  },
  {
    id: 5,
    uri: 'https://s-media-cache-ak0.pinimg.com/originals/fa/19/2c/fa192ca170d4862522af87a7aa20b9f0.png',
  },
  {
    id: 6,
    uri: 'https://cdn.arstechnica.net/wp-content/uploads/2016/03/SlackOffice1-640x427.jpg',
  },
  {
    id: 7,
    uri: 'http://www.onlinebusinessdegree.org/wp-content/uploads/2012/06/bettercoworker3.jpg',
  },
  {
    id: 8,
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/ee/0e/0e/ee0e0e7b8e70210a2c808c45b7033086.jpg',
  },
  {
    id: 9,
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/1f/a7/53/1fa7539bcb4d1a655c4b7ee86ebafabb.jpg',
  },
  {
    id: 10,
    uri: 'https://s-media-cache-ak0.pinimg.com/600x315/60/1e/53/601e53cab50501a0934080aa9148c7d1.jpg',
  },
  {
    id: 11,
    uri: 'https://images.travelpod.com/tripwow/photos/ta-0102-0158-c59f/big-mart-nepal-nepal+1152_12993922851-tpfil02aw-22017.jpg',
  },
  {
    id: 12,
    uri: 'http://www.dnakids.co.uk/uploads/images/party-images/uv-glow-party-2.jpg',
  },
  {
    id: 13,
    uri: 'http://az616578.vo.msecnd.net/files/2016/09/11/6360922286821585541523176234_party%20school.jpg',
  },
  {
    id: 14,
    uri: 'http://images.8tracks.com/cover/i/002/420/626/25967-Keep-Calm-And-Party-On-6135.jpg?rect=0,0,500,500&q=98&fm=jpg&fit=max',
  },
  {
    id: 15,
    uri: 'https://image.freepik.com/free-vector/bright-background-with-party-people_23-2147604850.jpg',
  },

]

class Gallery extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  render () {
    return (
      <View style={[global.COMMON.container, {backgroundColor: '#333'}]}>
        <View style={styles.topbar}>
          <TouchableOpacity style={global.COMMON.navView} onPress={() => Actions.app()}>
            <Icon style={[global.COMMON.icon, {color:'white', textAlign: 'left', marginTop:-7}]} name="ios-arrow-round-back" />
          </TouchableOpacity>
          <View style={{flex:1}}>
              <Text style={styles.title}>Select Image to send</Text>
          </View>
        </View>
        <View style={styles.content}>
          <ListView
            contentContainerStyle={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </View>
      </View>
    )
  }
  renderRow(rowData) {
    return <TouchableOpacity style={styles.card}>
              <Animatable.View animation="fadeInUp" duration={700}>
                <Image
                  style={{width:(width / 2) - 15, height:160,}}
                  source={{uri: rowData.uri}}
                  />
              </ Animatable.View>
           </TouchableOpacity>
  }
}
// const SingleImage = (props) => (
//   <Animatable.View animation="fadeIn" style={styles.singleImage}>
//     <TouchableOpacity style={global.COMMON.person} onPress={this._onPress}>
//       <Image
//         resizeMode='stretch'
//         style={{width:150, height:100,}}
//         source={{ uri: props.image }}
//       />
//     </TouchableOpacity>
//   </Animatable.View>
// )






const styles = StyleSheet.create({
  topbar: {
    height:60,
    padding:20,
    backgroundColor:'#f30',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize:17,
    textAlign: 'center'
  },
  listView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom:70
  },
  card: {
    width: (width / 2) - 15,
    height: 160,
    marginLeft: 10,
    marginTop: 10
  }
})

export default Gallery;
