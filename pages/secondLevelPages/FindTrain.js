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
export default class FindTrain extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<View>
					<Carousel
						selectedIndex={0}
						dots={false}
						vertical={true}
						autoplay={true}
						infinite={true}
						afterChange={(value)=>console.log(value)}
					>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/20001.jpeg')}/>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/20003.jpg')}/>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/20004.png')}/>
						<Image style={{width: width,height: 200}} source={require('../../resource/imgs/20002.jpeg')}/>
						
					</Carousel>
				</View>
			</View>
		)
	}
}