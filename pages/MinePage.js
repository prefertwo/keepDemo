import React, {
	Component
} from 'React'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native'

export default class MinePage extends Component {

	toPage() {
		this.props.navigation.navigate('SearchPage')
	}

	render() {
		return (
			<View>
				<Text>wode page</Text>
				<View>
					<TouchableOpacity onPress={this.props.ToSearch}>
						<Text style={{width: 200,height: 40,backgroundColor: 'red',color: '#fff',borderRadius: 10,textAlign: 'center',textAlignVertical: 'center'}}></Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}