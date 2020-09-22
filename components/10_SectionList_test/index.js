import React, { Component } from 'react'
import { Text, View,Image,SectionList } from 'react-native'
import cars from '../../assets/json/car.json'

export default class CarList extends Component {

	state = {
		carList:cars.total,
	}

	renderItem = ({index,item})=>{
		return (
			<View style={{flexDirection:'row'}}>
				<Image style={{width:100,height:100}} source={{uri:item.icon}}/>
				<Text style={{fontSize:30}}>{item.name}</Text>
			</View>
		)
	}

	renderSectionHeader = ({section})=>{
		return <Text style={{fontSize:30,fontWeight:'bold',backgroundColor:'gray'}}>{section.title}</Text>
	}

	render() {
		return (
			<SectionList
				sections={this.state.carList}
				renderItem={this.renderItem}
				renderSectionHeader={this.renderSectionHeader}
				keyExtractor={(item,index)=> index.toString()}
			/>
		)
	}
}
