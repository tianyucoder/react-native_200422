import React, { Component } from 'react'
import { Text, View,ScrollView,RefreshControl } from 'react-native'

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

	handleRefresh = ()=>{
		this.setState({isLoading:true})
		setTimeout(()=>{
			const {newsList} = this.state
			this.setState({
				newsList:[{id:newsList.length+1,title:'新闻'+(newsList.length+1)},...newsList],
				isLoading:false
			})
		},500)
	}

	render() {
		return (
			<ScrollView
				refreshControl={
					<RefreshControl 
						refreshing={this.state.isLoading}  //是一个布尔值，用于控制ScrollView是否处于加载中
						onRefresh={this.handleRefresh} //列表已经到了最顶端，继续下拉的回调
						colors={['red','pink','green']}
					/>
				}
			>
				{
					this.state.newsList.map((news)=>{
						return <Text style={{fontSize:20,backgroundColor:news.id % 2 ? 'skyblue' :'pink'}} key={news.id}> {news.title} </Text>
					})
				}
			</ScrollView>
		)
	}
}
