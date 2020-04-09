import React, {Component} from 'react';
import {View, Button, StyleSheet, Image, Text} from 'react-native';


export default class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.SecondContainer}>
          <Image style={styles.Nuotrauka}  source={require('../images/1.jpg')} />
        </View >
        <View style={styles.Tekstas}>
        <Text>Luckily friends do ashamed to do suppose. 
          Tried meant mr smile so. Exquisite behaviour as to middleton perfectly.
           Chicken no wishing waiting am. Say concerns dwelling graceful six humoured.
          Whether mr up savings talking an.
           Active mutual nor father mother exeter change six did all. </Text>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container :{
    
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: '#DF674E',
  },
  SecondContainer: {
    marginTop: 100,
    backgroundColor: '#89DF4E',
    height: '40%',
    width: '80%',

  },
  Nuotrauka: {
    height: '100%',
    width: '100%',

  },
  Tekstas: {
    width: '80%',
    marginTop: 20,
    
  }

})