import React, { Component } from 'react'
import { Text, View,Dimensions,ScrollView} from 'react-native'

export default class Demo extends Component {

	state = {
		colors:['red','orange','yellow','skyblue','green','cyan']
	}

	render() {
		return (
			<ScrollView 
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				scrollEnabled={false}
			>
				{
					this.state.colors.map((color)=>{
					return (
						<View 
							style={{
								backgroundColor:color,
								width:Dimensions.get('screen').width,
								height:300
							}}
						>
							<Text>{color}</Text>
						</View>
					)
					})
				}
			</ScrollView>
		)
	}
}
