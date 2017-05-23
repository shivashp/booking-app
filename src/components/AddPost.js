import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Picker, Item, Platform, ScrollView, KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import t from 'tcomb-form-native';
import _ from 'lodash';

const textareastyle= _.cloneDeep(t.form.Form.stylesheet);
const select_style= _.cloneDeep(t.form.Form.stylesheet);
textareastyle.textbox.normal.height = 120;
select_style.select.normal.backgroundColor = '#efefef';

export default class AddPost extends Component {
  _formSubmit() {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
      console.log(value.Title);
    }
  }
  render() {
    var Form = t.form.Form;
    var Rent_type = t.enums({
      S: 'Single Room',
      O: 'Office Space',
      A: 'Apartment'
    });
    var Location = t.enums({
      kathmandu: 'Kathmandu',
      butwal: 'Butwal',
      pokhara: 'Pokhara',
      others: 'Other'

    });
    var Post = t.struct({
      Title: t.String,              // a required string
      Description: t.maybe(t.String),  // an optional string
      Price: t.Number,
      PropertyType: Rent_type,
      Location: Location,
      Address: t.String,
    });
    var options = {
      fields: {
        Title: {
          error: 'Please enter a title'
        },
        Price: {
          keyboardType: 'phone-pad',
          error: 'Please mention price'
        },
        Location: {
          stylesheet: select_style,
          error: 'Please select a location'
        },
        PropertyType: {
          placeholder: 'Choose Rent Type',
          stylesheet: select_style,
          error: 'Please select property type'
        },
        Description: {
          multiline: true,
          numberOfLines: 5,
          stylesheet: textareastyle
        },
        Address: {
          error: 'Please enter address in detail'
        }
      }
    };
    return(
      <View style={styles.container}>
        <TouchableOpacity style={{marginBottom:10}} onPress={Actions.home}>
          <Icon style={styles.icon} name="ios-close" />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop:20}}>
            <Text style={styles.title}>Add Rooms for Rent</Text>
            <Text style={styles.subTitle}>Add your room,office or flat for rent in Roomie. Roomie is completely free and doesn't take any commisions from client or customer.</Text>
          </View>
          <KeyboardAvoidingView style={styles.formSection}>
            <Form
              ref="form"
              type={Post}
              options={options}
            />
          <TouchableOpacity style={styles.button} activeOpacity={0.3} onPress={this._formSubmit.bind(this)}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    paddingBottom:50,
    paddingHorizontal:20
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
    fontSize:17,
    fontWeight: '100',
    letterSpacing: 1,
  },
  icon: {
    fontSize:35,
    paddingLeft:15,
    marginLeft:-15,
    width:45
  },
  formSection: {
    marginTop:20,
    marginBottom:50
  },
  section: {
    borderBottomWidth:1,
    borderColor: "#ccc",
    paddingVertical:20,
  },
  button: {
    width:'100%',
    marginVertical:20,
    paddingVertical:10,
    backgroundColor: '#0084ff'
  },
  buttonText: {
    color: 'white',
    fontSize:20,
    textAlign: 'center'
  }
})
