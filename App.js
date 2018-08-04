/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
	Component
} from 'react';
import {
	Text,
	View
} from 'react-native';
import {
	createStackNavigator
} from 'react-navigation';

import LoginPage from './pages/LoginPage.js' // 登录页
import HomePage from './pages/HomePage.js' // 首页
import SearchPage from './pages/secondLevelPages/SearchPage.js' // 搜索页 -- 二级

import SportPage from './pages/SportPage.js'
import MinePage from './pages/MinePage.js'

import Test from './pages/Test.js' // 测试页面

const RouteStack = createStackNavigator({
	// Home: {
	// 	screen: HomePage
	// },
	Home: {
		screen: HomePage
	},
	HomePage: {
		screen: HomePage
	},
	SportPage: {
		screen: SportPage
	},
	MinePage: {
		screen: MinePage
	},
	SearchPage: {
		screen: SearchPage
	},
}, {
	initialRouteName: 'Home',
	headerMode: 'none'
})

export default class App extends Component {
	render() {
		return (
			<RouteStack/>
		)
	}
}