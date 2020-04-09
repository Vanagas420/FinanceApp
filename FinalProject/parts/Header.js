import React from 'react';
import {View, Text, StyleSheet, Input} from 'react-native';

export default class Header extends Component {
    render() {
    return(
        <View>
            <View>
                <Title style={styles.Title}>Final Project</Title>
            </View>
            <View>
                <Input></Input>
            </View>
        </View>
    )
}
}