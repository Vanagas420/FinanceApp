import React, { Component } from "react";
import {View, StyleSheet, Container, Content,} from 'react-native';

import Card from "../parts/component/Card";

export default class MainSCreen extends Component {


  render() {
    return (
      <View>

       <Container styles={styles.container}>
         <Content>
           <Card
             CityImg={require("../img/Athens.jpg")}
             Name={"Athens"}
             Country={"Greece"}
           />
           <Card
             CityImg={require("../img/Madrid.jpg")}
             Name={"Madrid"}
             Country={"Spain"}
             />
          <Card
             CityImg={require("../img/Paris.jpg")}
             Name={"Paris"}
            Country={"France"}
          />
         </Content>
       </Container>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
})