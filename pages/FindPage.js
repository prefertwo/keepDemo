import React, {
	Component
} from 'React'
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	ScrollView,
	TouchableOpacity
} from 'react-native'
import Tabs from 'antd-mobile-rn/lib/tabs'

import FindChoice from './secondLevelPages/FindChoice.js'
import FindTrain from './secondLevelPages/FindTrain.js'
import FindStrategy from './secondLevelPages/FindStrategy.js'
import FindFood from './secondLevelPages/FindFood.js'
import FindShop from './secondLevelPages/FindShop.js'



const tabs = [{
	title: '精选'
}, {
	title: '训练'
}, {
	title: '攻略'
}, {
	title: '饮食'
}, {
	title: '商城'
}];
export default class FindPage extends Component {

	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{flexDirection: 'row',height: 40,alignItems: 'center',justifyContent: 'space-between',paddingLeft: 20,paddingRight: 20}}>
					<Text>发现</Text>
					<Image style={{tintColor: '#000'}} source={require('../resource/icons/search.png')}/>
				</View>
				<View style={{flex: 1}}>
					<Tabs tabs={tabs} initialPage={4} swipeable={false}>
						<FindChoice/>
						<FindTrain/>
						<FindStrategy/>
						<FindFood/>
						<FindShop/>

						{/*<Text>精选</Text>
						<Text>训练</Text>
						<Text>攻略</Text>
						<Text>饮食</Text>
						<Text>商城</Text>*/}
					</Tabs>
				</View>
			</View>
		)
	}
}