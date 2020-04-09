
  import React, {Component} from 'react';
  import {View, Button, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';




export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <View style={styles.container} >
        {/* // <View style={styles.top}>
        //   <ItemImage item={require('../assets/icon.png')}/>
        // </View>
        // <View style={styles.container2}>
        //   <Text>Nuotraukos aprašymas</Text>
        // </View> */}
        <View style={styles.top}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.navigation.navigate('FirstScreen')}
      >
        <Text>Pirmas</Text>
      </TouchableOpacity>
       
         <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.navigation.navigate('SecondScreen')}
      >
        <Text>Antras</Text>
      </TouchableOpacity>
        </View>
    </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    top: {
      marginTop: 205,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
  
  })
