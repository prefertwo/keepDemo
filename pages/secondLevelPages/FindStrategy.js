import React, {
	Component
} from 'react'
import {
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
	ScrollView,
	Dimensions
} from 'react-native'
import Carousel from 'antd-mobile-rn/lib/carousel'

const {
	width,
	height
} = Dimensions.get('window');
export default class FindStrategy extends Component {
	render() {
		return (
			<View>
				<View>
					<Carousel>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/30006.jpeg')}/>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/30001.jpeg')}/>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/30002.jpeg')}/>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/30003.png')}/>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/30004.jpg')}/>
					</Carousel>
				</View>
				<Text> 发现 攻略 </Text>
			</View>
		)
	}
}