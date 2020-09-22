import React, { Component } from 'react'
import { Text, View,FlatList,RefreshControl } from 'react-native'

export default class Demo extends Component {

	state = {
		newsList:[],
		isLoading:false
	}

	componentDidMount(){
		let arr = []
		for (let i = 1; i <= 40;  i++) {
			arr.push({id:i,title:'新闻'+i})
		}
		this.setState({newsList:arr})
	}

	demo = ({index,item})=>{
		return <Text style={{fontSize:20,backgroundColor:item.id % 2 ? 'skyblue' :'pink'}}>{item.title}</Text>	
	}

	render() {
		return (
			<FlatList
				data={this.state.newsList} //指定数据源
				renderItem={this.demo}
				keyExtractor={(item,index)=> index.toString()}
				// numColumns={3}
				// horizontal
				ListHeaderComponent={<Text style={{fontSize:30}}>新闻列表</Text>}
				ListFooterComponent={<Text style={{fontSize:30}}>版权所有</Text>}
			/>
		)
	}
}
