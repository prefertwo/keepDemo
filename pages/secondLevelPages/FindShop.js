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
export default class FindShop extends Component {
	render() {
		return (
			<View style={{flex: 1,backgroundColor: '#eee'}}>
				<ScrollView>
					{/*----轮播图----*/}
					<View>
						<Carousel
							autoplay={true}
							dots={false}
							infinite={true}
						>
							<Image style={{width: width,height: 164}} source={require('../../resource/keep/shopCarousel1.jpg')}/>
							<Image style={{width: width,height: 164}} source={require('../../resource/keep/shopCarousel2.jpg')}/>
							<Image style={{width: width,height: 164}} source={require('../../resource/keep/shopCarousel3.jpg')}/>
							<Image style={{width: width,height: 164}} source={require('../../resource/keep/shopCarousel4.jpg')}/>
							<Image style={{width: width,height: 164}} source={require('../../resource/keep/shopCarousel5.jpg')}/>
						</Carousel>
					</View>
					{/*--------*/}
					<View style={{flexDirection: 'row',width: width,height: 30,backgroundColor: '#ddd',alignItems: 'center',justifyContent: 'space-around'}}>
						<View style={{flexDirection: 'row',alignItems: 'center'}}>
							<Image style={{width: 14,height: 14}} source={require('../../resource/keep/ziying.png')}/>
							<Text style={{fontSize: 12,paddingLeft: 4}}>keep 自营品牌</Text>
						</View>

						<View style={{flexDirection: 'row',alignItems: 'center'}}>
							<Image style={{width: 14,height: 14}} source={require('../../resource/keep/kecheng.png')}/>
							<Text style={{fontSize: 12,paddingLeft: 4}}>keep 课程同款</Text>
						</View>

						<View style={{flexDirection: 'row',alignItems: 'center'}}>
							<Image style={{width: 14,height: 14}} source={require('../../resource/keep/qitian.png')}/>
							<Text style={{fontSize: 12,paddingLeft: 4}}>7天无理由退货</Text>
						</View>
					</View>
					{/*----装备分类----*/}
					<View style={{width: width,height: 80,flexDirection: 'row', backgroundColor: '#fff',alignItems: 'center',justifyContent: 'space-around'}}>
						<View style={{alignItems: 'center',justifyContent: 'center'}}>
							<Image style={{width: 40,height: 40}} source={require('../../resource/keep/yundongzhuanbei.jpg')}/>
							<Text>运动装备</Text>
						</View>

						<View>
							<Image style={{width: 40,height: 40}}  source={require('../../resource/keep/nvzifuzhuang.jpg')}/>
							<Text>女子服饰</Text>
						</View>

						<View>
							<Image  style={{width: 40,height: 40}} source={require('../../resource/keep/nanzifuzhuang.jpg')}/>
							<Text>男子服饰</Text>
						</View>

						<View>
							<Image  style={{width: 40,height: 40}} source={require('../../resource/keep/pinpaizhoubian.jpg')}/>
							<Text>品牌周边</Text>
						</View>
					</View>
					{/*----新品上线----*/}
					<View style={{marginTop: 10,backgroundColor: '#fff',alignItems: 'center'}}>
						<View style={{width: width-40,}}>
							<Text>新品上线</Text>
							<View style={{}}>
								<View style={{flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'space-between'}}>
									<View style={{width: 100,height: 120,backgroundColor: 'red'}}>
										<View>
											{/*<Image source={require('../../resource/')}/>*/}
											<Text>电镀防雾泳镜</Text>
											<Text>￥59</Text>
										</View>
									</View>
									<View style={{width: 100,height: 120,backgroundColor: 'red'}}></View>
									<View style={{width: 100,height: 120,backgroundColor: 'red'}}></View>
									<View style={{width: 100,height: 120,backgroundColor: 'red'}}></View>
									<View style={{width: 100,height: 120,backgroundColor: 'red'}}></View>
									<View style={{width: 100,height: 120,backgroundColor: 'red'}}></View>
								</View>

								{/*<View>
									<View style={{width: 100,height: 120,backgroundColor: 'red'}}></View>
									<View style={{width: 100,height: 120,backgroundColor: 'red'}}></View>
									<View style={{width: 100,height: 120,backgroundColor: 'red'}}></View>
								</View>*/}
							</View>
						</View>
					</View>
					{/*----必买清单----*/}

				</ScrollView>
			</View>
		)
	}
}