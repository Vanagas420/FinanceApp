import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Button} from 'react-native-elements';
import firebaseSDK from '../config/firebaseSDK';
import LinearGradient from 'react-native-linear-gradient';

export default class Login extends React.Component {
	static navigationOptions = {
        title: 'FinalProject'
	};

	state = {
		name: '',
		email: 'Email',
		password: 'Password',
		avatar: ''
	};

	onPressLogin = async () => {
		const user = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			avatar: this.state.avatar
		};

		const response = firebaseSDK.login(
			user,
			this.loginSuccess,
			this.loginFailed
		);
	};

	loginSuccess = () => {
		console.log('login successful, navigate to chat.');
		this.props.navigation.navigate('Chat', {
			name: this.state.name,
			email: this.state.email,
			avatar: this.state.avatar
		});
	};

	loginFailed = () => {
		alert('Login failure. Please tried again.');
	};

	onChangeTextEmail = email => this.setState({ email });
	onChangeTextPassword = password => this.setState({ password });

	render() {
		return (
			<ImageBackground source={require('../assets/lai.jpeg')} style={styles.container}>
				
				<Image source={require('../assets/logo.png')} style={styles.bigLogo} ></Image>
				<Text style={styles.logo}>FinalProject</Text>
				<View style={styles.inputView}>
				<TextInput
					placeHolder="email..."
					style={styles.inputText}
					placeholderTextColor="black"
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
					
				/>	
				</View>	
				<View style={styles.inputView} >
				<TextInput
					style={styles.inputText}
					placeHolder="password..."
					placeholderTextColor="white"
					onChangeText={this.onChangeTextPassword}
					value={this.state.password}
				/>
				 </View>
				 	<TouchableOpacity>
          			<Text style={styles.forgot} >
						  Forgot Password?</Text>
       				</TouchableOpacity>
					   <Button
              title="Log in"
              buttonStyle={{
                backgroundColor:  "white",
                borderRadius: 25,
              }}
              titleStyle={{ color: "black", fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{ marginVertical: 10, height: 50, width: 230 }}
              onPress={this.onPressLogin}

            />

				<Button
					title="Sign up"
              		buttonStyle={{
                	backgroundColor: "white",
               		borderRadius: 25,
              		}}
             		titleStyle={{ color: "black", fontWeight: 'bold', fontSize: 23 }}
             		containerStyle={{ marginVertical: 10, height: 50, width: 230 }}
					onPress={() => this.props.navigation.navigate('Signup')}
				/>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	dot:{
		width: 110, 
		height: 110, 
		borderRadius: 200, 
		backgroundColor: 'white',
  		top: 85
	},
	container: {
	  flex: 1,
	 
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	logo:{
		fontWeight:"bold",
		fontSize:50,
		color:"white",
		marginBottom:40,
		top: -50
		/* 
		backgroundColor: "black",
	  borderLeftWidth: 40 ,
	  borderRightWidth: 40 ,	 */ 
	},
	inputView:{
	  width:"80%",
	  backgroundColor: "white",
	  borderRadius:25,
	  height:40,
	  marginBottom:20,
	  justifyContent:"center",
	  padding:1
	},
	inputText:{
	 fontWeight: 'bold',
	  height:20,
	  marginBottom: -10,
	  color:"black",
	  textAlign:'center'
	},
	forgot:{
	  color:"white",
	  fontSize:11
	},
	tinyLogo: {
		width: 50,
		height: 50,
	  },
	bigLogo: {
		width: 88,
		height: 150,
		top: -40
	  },
  });