import React, { Component } from 'react'
import { Text, View,StyleSheet,Dimensions,Platform } from 'react-native'

export default class Basic extends Component {
	render() {
		return (
			<>
				<View style={style.top}>
					<Text style={style.topText}>hello,我要开始学习RN了</Text>
				</View>
				<View style={style.footer}>
					<Text
						style={style.topText}
						numberOfLines={1}
						ellipsizeMode="clip"
						onPress={()=>console.log({name:'tom',age:18})}
					>
						hello,我要开始学习RN了,hello,我要开始学习RN了,hello,我要开始学习RN了
					</Text>
				</View>
				<View style={{backgroundColor:'gray'}}>
				<Text style={style.topText}>
					当前设备屏幕的宽度是：{Dimensions.get('screen').width}
				</Text>
				<Text style={style.topText}>
					当前设备屏幕的高度是：{Dimensions.get('screen').height}
				</Text>
				<Text style={style.topText}>
					当前设备的系统平台是：{Platform.OS}
					当前系统的版本是：{Platform.Version}
				</Text>
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
