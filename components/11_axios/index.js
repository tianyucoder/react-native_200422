import React, { Component } from 'react'
import { Text, View,Image,SectionList } from 'react-native'
import axios from 'axios'

export default class CarList extends Component {

	state = {
		carList:[],
	}

	componentDidMount(){
		axios.get('http://atguigu.utools.club/total').then(
			response => {
				this.setState({carList:response.data})
			},
			error => {console.log('失败',error);}
		)
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
