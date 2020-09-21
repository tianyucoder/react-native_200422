import React, { Component } from 'react'
import { Text, View,Button,TouchableOpacity} from 'react-native'

export default class Demo extends Component {
	render() {
		return (
			<>
				<View style={{width:100}}>
					<Button 
						color="skyblue" 
						onPress={()=>console.log(1)} 
						title="点我"
					/>
				</View>
				<View>
					<TouchableOpacity
						style={{
							backgroundColor:'orange',
							width:100,
							height:40,
							justifyContent:'center',
							borderRadius:10
						}}
						activeOpacity={0.5}
						onPress={()=>alert(1)}
					>
						<Text style={{color:'white',textAlign:'center'}}>点我</Text>
					</TouchableOpacity>
				</View>
			</>
		)
	}
}
