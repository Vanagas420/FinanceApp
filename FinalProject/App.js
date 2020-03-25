import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Signup from './components/Signup.js';
import Chat from './components/Project';

export default createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  Chat: { screen: Chat }
});