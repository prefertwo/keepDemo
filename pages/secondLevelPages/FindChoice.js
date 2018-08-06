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
export default class FindChoice extends Component {
	render() {
		return (
			<ScrollView>
				<View>
					<Carousel
						selectedIndex={1}
						dots={false}
						vertical={false}
						autoplay={true}
						autoplayInterval={2000}
						infinite={true}
					>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/10001.jpg')}/>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/10003.jpg')}/>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/10004.jpg')}/>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/10006.jpg')}/>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/10002.jpeg')}/>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/10005.png')}/>
						
					</Carousel>
				</View>
				{/*----列表----*/}
				<View>
					
				</View>
				<Text> 发现 精选 </Text>
			</ScrollView>
		)
	}
}