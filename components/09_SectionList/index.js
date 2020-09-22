import React, { Component } from 'react'
import { Text, View,SectionList } from 'react-native'

export default class Demo extends Component {

	state = {
		newsList:[
			{id:'01',type:'国内新闻',data:[
				{id:'001',title:"国内新闻1"},
				{id:'002',title:"国内新闻2"},
				{id:'003',title:"国内新闻3"},
				{id:'004',title:"国内新闻4"},
				{id:'005',title:"国内新闻5"},
			]},
			{id:'02',type:'国际新闻',data:[
				{id:'001',title:"国际新闻1"},
				{id:'002',title:"国际新闻2"},
				{id:'003',title:"国际新闻3"},
				{id:'004',title:"国际新闻4"},
				{id:'005',title:"国际新闻5"},
			]},
			{id:'03',type:'本地新闻',data:[
				{id:'001',title:"本地新闻1"},
				{id:'002',title:"本地新闻2"},
				{id:'003',title:"本地新闻3"},
				{id:'004',title:"本地新闻4"},
				{id:'005',title:"本地新闻5"},
			]},
			{id:'04',type:'米国新闻',data:[
				{id:'001',title:"米国新闻1"},
				{id:'002',title:"米国新闻2"},
				{id:'003',title:"米国新闻3"},
				{id:'004',title:"米国新闻4"},
				{id:'005',title:"米国新闻5"},
			]},
		],
	}

	renderItem = ({index,item})=>{
		// console.log(a);
		return <Text style={{fontSize:40}}>{item.title}</Text>
	}

	renderSectionHeader = ({section})=>{
		// console.log(a);
		return <Text style={{fontSize:50,fontWeight:'bold',backgroundColor:'gray'}}>{section.type}</Text>
	}

	render() {
		return (
			<SectionList
				sections={this.state.newsList}
				renderItem={this.renderItem}
				renderSectionHeader={this.renderSectionHeader}
				keyExtractor={(item,index)=> index.toString()}
			/>
		)
	}
}
