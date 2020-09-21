import React, { Component } from 'react'
import { Text, View,TextInput,StyleSheet} from 'react-native'

export default class index extends Component {

	state = {
		userInput:'' //存储用户的输入
	}

	show = ()=>{
		alert(this.state.userInput)
	}

	render() {
		return (
			<View style={{padding:10}}>
				<TextInput 
					style={this.style.inputStyle}
					keyboardType="default"
					placeholder="请输入内容"
					onChangeText={data => this.setState({userInput:data})}
					// placeholderTextColor="red"
					// multiline={true}
					// autoCapitalize="sentences"
				/>
				<Text onPress={this.show} style={{backgroundColor:'pink',fontSize:28}}>点我提示输入</Text>
			</View>
		)
	}
	style = StyleSheet.create({
		inputStyle:{
			borderWidth:1,
			borderColor:'black',
			fontSize:18,
		}
	})
}

