import React, {
	Component
} from 'React'
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	Dimensions
} from 'react-native'
import Tabs from 'antd-mobile-rn/lib/tabs'


const renderContent = (tab: any, index: any) => {
	const style = {
		paddingVertical: 40,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		backgroundColor: '#ddd',
	}
	const content = [1, 2, 3, 4, 5, 6, 7, 8].map(i => {
		return (
			<View key={`${index}_${i}`} style={style}>
        <Text>
          {tab.title} - {i}
        </Text>
      </View>
		);
	});
	return <ScrollView style={{ backgroundColor: '#fff' }}>{content}</ScrollView>;
};

const {
	width,
	height
} = Dimensions.get('window');
export default class SportPage extends Component {

	// 点击搜索 -- 去往搜索页
	_pressToSearchPage() {
		console.log('点击了搜索');
		// this.props.navigation.navigate('SearchPage')
	}

	render() {
		const tabs = [{
			title: '训练'
		}, {
			title: '跑步'
		}, {
			title: '瑜伽'
		}, {
			title: '行走'
		}, {
			title: '骑行'
		}, {
			title: 'kit'
		}]
		return (
			<View style={{flex: 1,flexDirection: 'row'}}>
				<View style={{flex: 1,width: width-40}}>
					<Tabs
						tabs={tabs}
						tabBarPosition="top"
						initialPage={0}
						swipeable={true}
					>
						<Text onPress={()=>this.props.navigation.navigate('Home').bind(this)}>训练</Text>
						<Text onPress={()=>this.props.navigation.navigate('Home').bind(this)}>跑步</Text>
						<Text onPress={()=>this.props.navigation.navigate('Home').bind(this)}>瑜伽</Text>
						<Text onPress={()=>this.props.navigation.navigate('Home').bind(this)}>行走</Text>
						<Text onPress={()=>this.props.navigation.navigate('Home').bind(this)}>骑行</Text>
						<Text onPress={()=>this.props.navigation.navigate('Home').bind(this)}>kit</Text>
					</Tabs>
				</View>
				<View style={{width: 60,height: 43,borderColor: '#ddd',borderBottomWidth: 1,alignItems: 'center',justifyContent: 'center'}}>
					<TouchableOpacity onPress={this._pressToSearchPage.bind(this)}>
						<Image style={{tintColor: '#000'}} source={require('../resource/icons/search.png')}/>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}