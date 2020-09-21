import React, { Component } from 'react'
import {Text,StatusBar,View,StyleSheet} from 'react-native'

export default class App extends Component {
	render() {
		return (
			<>
				<StatusBar
					backgroundColor="orange"
					barStyle="dark-content"
					// hidden={true}
					// animated={true}
					// translucent={true}
				/>
				<View style={style.top}>
					<Text style={style.topText}>hello,我要开始学习RN了</Text>
				</View>
				<View style={style.footer}>
					<Text>hello,我要开始学习RN了</Text>
				</View>
				
			</>
		)
	}
}

const style = StyleSheet.create({
	top:{
		// fontSize:30,
		backgroundColor:'skyblue'
	},
	topText:{
		fontSize:30
	},
	footer:{
		// fontSize:20,
		backgroundColor:'orange'
	}
})
