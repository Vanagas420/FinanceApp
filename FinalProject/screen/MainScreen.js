import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import {
  Container,
  Content
} from "native-base";
import Card from "../parts/component/Card";

export default class HomeTab extends Component {

  render() {
    return (
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})