import React, { Component } from 'react'
import {Text,StatusBar,View,StyleSheet} from 'react-native'
import Content from './components/03_TextInput'

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
					<Content/>
				</>
		)
	}
}