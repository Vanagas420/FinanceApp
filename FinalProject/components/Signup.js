import React from 'react';
import { ImagePicker, Permissions } from 'expo';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	ImageEditor,
	TouchableOpacity, 
	ImageBackground,
	Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import firebaseSDK from '../config/firebaseSDK';

export default class Signup extends React.Component {
	state = {
		name: 'no name',
		email: 'test@live.com',
		password: '123456',
		avatar: ''
	};

	onPressCreate = async () => {
		try {
			const user = {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			};
			await firebaseSDK.createAccount(user);
		} catch ({ message }) {
			console.log('create account failed. catch error:' + message);
		}
	};

	onChangeTextEmail = email => this.setState({ email });
	onChangeTextPassword = password => this.setState({ password });
	onChangeTextName = name => this.setState({ name });

	onImageUpload = async () => {
		const { status: cameraRollPerm } = await Permissions.askAsync(
			Permissions.CAMERA_ROLL
		);
		try {
			// only if user allows permission to camera roll
			if (cameraRollPerm === 'granted') {
				let pickerResult = await ImagePicker.launchImageLibraryAsync({
					allowsEditing: true,
					aspect: [4, 3]
				});
				console.log(
					'ready to upload... pickerResult json:' + JSON.stringify(pickerResult)
				);

				var wantedMaxSize = 150;
				var rawheight = pickerResult.height;
				var rawwidth = pickerResult.width;
				var ratio = rawwidth / rawheight;
				var wantedwidth = wantedMaxSize;
				var wantedheight = wantedMaxSize / ratio;
				// check vertical or horizontal
				if (rawheight > rawwidth) {
					wantedwidth = wantedMaxSize * ratio;
					wantedheight = wantedMaxSize;
				}
				let resizedUri = await new Promise((resolve, reject) => {
					ImageEditor.cropImage(
						pickerResult.uri,
						{
							offset: { x: 0, y: 0 },
							size: { width: pickerResult.width, height: pickerResult.height },
							displaySize: { width: wantedwidth, height: wantedheight },
							resizeMode: 'contain'
						},
						uri => resolve(uri),
						() => reject()
					);
				});
				let uploadUrl = await firebaseSDK.uploadImage(resizedUri);
				this.setState({ avatar: uploadUrl });
				await firebaseSDK.updateAvatar(uploadUrl);
			}
		} catch (err) {
			console.log('onImageUpload error:' + err.message);
			alert('Upload image error:' + err.message);
		}
	};

	render() {
		return (
			<ImageBackground source={require('../assets/lai_copy.png')} style={styles.container}>
				
				<Text style={styles.logo}>Signup</Text>
				<View style={styles.inputView}>
			
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.inputText}
					placeHolder="test@live.com"
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
				/>
				</View>
				<View style={styles.inputView}>
				<Text style={styles.title}>Password:</Text>
				<TextInput
					style={styles.inputText}
					onChangeText={this.onChangeTextPassword}
					value={this.state.password}
				/>
				</View>
				<View style={styles.inputView}>
				<Text style={styles.title}>Name:</Text>
				<TextInput
					style={styles.inputText}
					onChangeText={this.onChangeTextName}
					value={this.state.name}
				/></View>
				<Button
				type="clear"
  				large
  				icon={{ name:'arrow-right-circle', type: 'feather', color:'white', size: 80 }}
				style={styles.ButtonStyle}
				onPress={this.onPressCreate}
 				/>
				<Button
					title="Upload Avatar"
					buttonStyle={{
			 	 	backgroundColor: "white",
				 	borderRadius: 25,
					}}
			   		titleStyle={{ color: "black", fontWeight: 'bold', fontSize: 23 }}
			  		containerStyle={{ marginVertical: 10, height: 50, width: 230, top: 40 }}
					onPress={this.onImageUpload}
				/>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	
	
	title: {
		color: "white", 
		fontWeight: 'bold', 
		fontSize: 23,
		marginBottom: 10,
		
	},

	container: {
	  flex: 1,
	
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	inputView:{
	  width:"80%",
	  backgroundColor: "white",
	  borderRadius:25,
	  height:40,
	  marginBottom:40,
	  justifyContent:"center",
	  padding:1
	},
	inputText:{
	  fontWeight: 'bold',
	  height:28,
	  marginBottom: 30,
	  color:"black",
	  textAlign:'center'
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
	  logo:{
		fontWeight:"bold",
		fontSize:50,
		color:"white",
		marginBottom:40,
		top: -50}
});