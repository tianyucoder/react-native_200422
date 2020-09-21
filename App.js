import React, { Component } from 'react'
import {Text,StatusBar,View,StyleSheet} from 'react-native'
// import Content from './components/04_Button'
import Button from './components/05_Todos'

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
					<Button 
						btnStyle={{backgroundColor:'gray',width:200}} 
						textStyle={{fontSize:18}} 
						text="点我"
						onPress={()=>alert(2)}
					/>
				</>
		)
	}
}