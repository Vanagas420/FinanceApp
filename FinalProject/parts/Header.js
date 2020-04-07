import React from 'react';
import {View, Text, StyleSheet, Input} from 'react-native';

export default function Header(){
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