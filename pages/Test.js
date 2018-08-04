import React from 'react';
import {
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

export default class BasicTabsExample extends React.Component < any, any > {

	pressGoSearch() {
		this.props.navigation.navigate('SearchPage')
	}
	render() {

		return (
			<View>
				<TouchableOpacity onPress={this.pressGoSearch.bind(this)}>
					<Text>gogogo</Text>
				</TouchableOpacity>
				
			</View>
		);
	}
}