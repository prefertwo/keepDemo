import React, {
	Component
} from 'react'
import {
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Dimensions,
	ScrollView
} from 'react-native'

const {
	width,
	height
} = Dimensions.get('window');
export default class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			historyData: ['diyige']
		}
		this._pressToDetailSearch = this._pressToDetailSearch.bind(this);
	}

	componentDidMount() {
		this.setState({
			historyData: ['腹肌撕裂者', '膝关节预防']
		})
	}

	// 返回上一页
	_pressGoBack() {
		this.props.navigation.goBack();
		console.log('goback');
	}

	// 点击进入详细搜索页。详细搜索页根据传过去的item来渲染对应的数据
	_pressToDetailSearch(item) {
		console.log(item);
	}

	// 清除历史记录
	_pressClearAllRecords() {
		// console.log('点击清除搜索记录，应该是输入框失焦就会有历史记录');
		this.setState({
			historyData: []
		})
	}

	// 将历史记录的值放进搜索框并搜索
	_pressToSetSearchValue(value) {
		console.log(value)
	}

	render() {
		const fenleiData = ['课程', '动态', '动作', '攻略', '用户', '话题', '商品', '饮食'];
		let fenleiContent = (
			fenleiData.map((item, index) => {
				return <TouchableOpacity key={index} onPress={()=>this._pressToDetailSearch(item)}>
					<View style={{width: 80,height: 80,alignItems: 'center',justifyContent: 'center'}}>
							<View style={{width: 40,height: 40,backgroundColor: '#000',borderRadius: 50}}></View>
							<Text>{item}</Text>
						</View>
				</TouchableOpacity>

			})
		);
		// 历史记录
		const historyData = ['腹肌撕裂者', '膝关节预防'];
		let historyContent = (
			this.state.historyData.map((item, index) => {
				return <TouchableOpacity key={index} onPress={()=>this._pressToSetSearchValue(item)}>
					<Text style={{paddingVertical: 5,paddingHorizontal: 15, margin: 5,borderRadius: 15,backgroundColor: '#ddd',fontSize: 12}}>{item}</Text>
				</TouchableOpacity>
			})
		);

		return (
			<View style={{flex: 1}} >
				<View style={{backgroundColor: '#fff'}}>
					
					{/*----搜索栏----*/}
					<View style={{position: 'relative'}}>
						<TextInput
							placeholder="北马官方线上训练营，点击搜索看看！"
							style={{
								height: 30,
								padding: 0,
								paddingLeft: 40,
								marginHorizontal: 10,
								margin: 10,
								backgroundColor: '#eee'
							}}
						/>
						<View style={{position: 'absolute',top: 13,left: 20}}>
							<TouchableOpacity onPress={this._pressGoBack.bind(this)}>
								<Image style={{tintColor: '#666'}} source={require('../../resource/icons/back.png')}/>
							</TouchableOpacity>
						</View>
					</View>
					{/*----快捷入口 8个----*/}
					<View style={{flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'space-around'}}>
						{fenleiContent}
					</View>
				</View>

				{/*----搜索记录----*/}
				<View style={{flex: 1,backgroundColor: '#fff',marginTop: 10}}>
					<View style={{height: 40,flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',marginHorizontal: 20}} >
						<Text>历史记录</Text>
						<View>
							<TouchableOpacity onPress={this._pressClearAllRecords.bind(this)}>
								<View style={{height: 40,flexDirection: 'row',alignItems: 'center'}}>
									<Image source={require('../../resource/icons/clear.png')}/>
									<Text>清除记录</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					<ScrollView style={{flex: 1}}>
						<View style={{flexDirection: 'row',flexWrap: 'wrap'}}>
							{historyContent}
						</View>
					</ScrollView>
					
				</View>
			</View>
		)
	}
}