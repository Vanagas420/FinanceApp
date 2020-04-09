import 'react-native-gesture-handler';

import * as React  from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import Home from './screens/Home';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
          

        />
        
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ 
            title: 'Objektas Nr.1' ,
         
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: { 
            backgroundColor: '#f4511e'
          },
        }}
        />
        <Stack.Screen name="SecondScreen" component={SecondScreen} 
        options={{ 
            title: 'Objektas Nr.2' ,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: { 
            backgroundColor: '#f4511e'
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};




export default App;