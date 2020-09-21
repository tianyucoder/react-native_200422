import React, { Component } from 'react'
import { Text, View,TextInput,StyleSheet} from 'react-native'
import Button from '../04_Button/MyButton'

export default class Todo extends Component {
	state = {
		todos:['吃饭','睡觉','刷抖音'],
		userInput:''
	}

	add = ()=>{
		const {todos,userInput} = this.state
		this.setState({todos:[userInput,...todos]})
		this.refs.demo.clear()
	}

	render() {
		const {input,wraper,top,text} = styles
		return (
			<View style={wraper}>
				<View style={top}>
					<TextInput ref="demo" onChangeText={data => this.setState({userInput:data})} style={input}/>
					<Button onPress={this.add} text="添加" btnStyle={{height:50,marginLeft:10}} textStyle={{fontSize:20}}/>
				</View>
				<View>
					{
						this.state.todos.map((todo,index)=>{
							return <Text key={index} style={text}>{todo}</Text>
						})
					}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	input:{
		width:200,
		fontSize:18,
		borderWidth:1,
		borderColor:'black'
	},
	wraper:{
		padding:10
	},
	top:{
		flexDirection:'row'
	},
	text:{
		fontSize:20
	}
})
