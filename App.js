import React, { Component } from 'react'
import {Text,StatusBar,View,StyleSheet,SafeAreaView} from 'react-native'
import Content from './components/07_ScrollTest'
// import Button from './components/05_Todos'

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
					<SafeAreaView>
						<Content/>
					</SafeAreaView>
				</>
		)
	}
}