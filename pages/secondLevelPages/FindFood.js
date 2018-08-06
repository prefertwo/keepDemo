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
export default class FindFood extends Component {
	render() {
		return (
			<View>
				<ScrollView>
					<View>
						<Carousel
							dots={false}
						>
							<Image style={{width: width,height: 200}} source={require('../../resource/imgs/40001.jpg')}/>
							<Image style={{width: width,height: 200}} source={require('../../resource/imgs/40002.jpg')}/>
							<Image style={{width: width,height: 200}} source={require('../../resource/imgs/40003.jpg')}/>
							<Image style={{width: width,height: 200}} source={require('../../resource/imgs/40004.jpg')}/>
							<Image style={{width: width,height: 200}} source={require('../../resource/imgs/40005.jpg')}/>
						</Carousel>
					</View>
				</ScrollView>
				<Text> 发现 饮食 </Text>
			</View>
		)
	}
}