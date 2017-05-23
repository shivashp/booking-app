import React, { Component, PureComponent } from 'react';
import {
  View, Text, ListView
} from 'react-native';
import { SingleProperty } from '../widgets'

const data = [
  {
    id: 1,
    uri: 'https://cdn.pixabay.com/photo/2014/12/15/14/05/home-office-569153_960_720.jpg',
    price: '10,000'
  },
  {
    id: 2,
    uri: 'https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg',
    price: '12,000'
  },
  {
    id: 3,
    uri: 'http://www.metropolismag.com/wp-content/uploads/data-import/cf/cf2a2f5480cd7ff932387a208d768df4-AirbnbPDXofficeBittermann12-10-2104-3.jpg',
    price: '20,000'
  },
  {
    id: 4,
    uri: 'http://4.bp.blogspot.com/-RSAdi3NMMs8/VakWj_znRcI/AAAAAAAAAMI/lp19iktRyCw/s1600/Rent%2Broom%2Bstockholm.jpg',
    price: '43,000'
  },
  {
    id: 5,
    uri: 'https://s-media-cache-ak0.pinimg.com/originals/dd/98/20/dd982064291e84ae5c1e63f9e6f819d1.jpg',
    price: '37,500'
  },
  {
    id: 6,
    uri: 'https://s-media-cache-ak0.pinimg.com/originals/c6/79/af/c679af68fc962e45589e1c8c1b606a0e.jpg',
    price: '50,000'
  },
  {
    id: 7,
    uri: 'https://s-media-cache-ak0.pinimg.com/originals/b2/78/0a/b2780af566fc2eebe1ada741b385a5d2.jpg',
    price: '80,000'
  }
]

export default class RoomList extends PureComponent {
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  _renderRow(data) {
    return (
      <SingleProperty uri={data.uri} price={data.price}/>
    )
  }
  render() {
    console.log("All");
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this._renderRow(rowData)}
        initialListSize={2}
      />
    )
  }
}
