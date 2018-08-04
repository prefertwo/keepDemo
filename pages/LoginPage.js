import React, {
	Component
} from 'react'
import {
	StyleSheet,
	View,
	ScrollView,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
	Dimensions
} from 'react-native'

const {
	width,
	height
} = Dimensions.get('window');
export default class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '', // 用户名
			password: '', // 密码
			remember: false, // 记住用户名
		}
	}

	componentDidMount() {
		console.log(width + '--' + height);
	}

	// 点击登录
	_pressLogin() {
		// this.props.navigation.navigate('SearchPage')
		this.props.navigation.navigate('HomePage')
	}

	render() {
			return (
					<View style={{flex: 1,backgroundColor: '#fff'}}>
				<ScrollView style={{height: height}} >
					<View style={{width: width,height: 300,alignItems: 'center',justifyContent: 'center'}}>
						<Text style={{width: 100,height: 100,textAlign: 'center',textAlignVertical: 'center',fontSize: 20,backgroundColor: '#333',color: '#fff'}}>LOGO</Text>
					</View>

					<TextInput
						placeholder="请输入用户名"
						style={styles.inputStyle}
						value={this.state.username}
						onChangeText={(text)=>{this.setState({username: text})}}
					/>

					<TextInput
						placeholder="请输入密码"
						style={styles.inputStyle}
						value={this.state.password}
						onChangeText={(text)=>{this.setState({password: text})}}
					/>
					<View style={{width: 200,marginLeft: 'auto',marginRight: 'auto',marginTop: 10}}>
						<TouchableOpacity onPress={()=>this.setState({remember: !this.state.remember})}>
							<View style={{flexDirection: 'row'}}>
								<View style={ this.state.remember ? styles.unrememberme : styles.rememberme }></View>
								<Text>记住用户名</Text>
							</View>
						</TouchableOpacity>
					</View>

					{/*<View style={{height: 80,alignItems: 'center',justifyContent: 'center'}}>*/}
					<View style={{marginTop: 40,alignItems: 'center'}}>
						<View style={{}}>
							<TouchableOpacity onPress={this._pressLogin.bind(this)}>
								<Text style={{width: 200,height: 40,textAlign: 'center',textAlignVertical: 'center',backgroundColor: '#4A90E2',color: '#fff'}}>LogIn</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	inputStyle: {
		width: 200,
		height: 40,
		padding: 0,
		marginLeft: 'auto',
		marginRight: 'auto',
		borderBottomWidth: 1,
		borderColor: 'rgba(0,0,0,0.2)'
	},
	rememberme: {
		width: 20,
		height: 20,
		borderWidth: 6,
		borderColor: '#4A90E2',
		borderRadius: 50,
		marginRight: 6
	},
	unrememberme: {
		width: 20,
		height: 20,
		borderWidth: 6,
		borderColor: '#ddd',
		borderRadius: 50,
		marginRight: 6
	}
})