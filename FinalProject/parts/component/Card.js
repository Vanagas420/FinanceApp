import React from 'react';
import {View, Stylsheet, Text, Image, Button} from 'react-native';

export default function Card(props){
    return(
        <View style={styles.Card}>
            <Button
            onPress={() => navigation.navigate('')}
            >
                <Image style={styles.Content}
                source={this.props.cityImg}
                >
                    <Text>{this.props.name}</Text>
                    <Text>{this.props.country}</Text>
                </Image>
            </Button>
        </View>
    );
}



const styles = StyleSheet.create({
    Card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width:1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    Content: {
        marginHorizontal: 18,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})