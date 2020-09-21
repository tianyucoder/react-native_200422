import React, { Component } from 'react'
import { Text, View,Image} from 'react-native'

export default class Demo extends Component {
	render() {
		return (
			<View>
				{/* 引入本地图片 */}
				<Image style={{width:200,height:200}} source={require('./car.jpg')}/>
			</View>
		)
	}
}
