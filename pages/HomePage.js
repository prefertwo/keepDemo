import React, {
	Component
} from 'react'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native'
// import {
// 	TabBar
// } from 'antd-mobile-rn'
import TabBar from 'antd-mobile-rn/lib/tab-bar'

import SportPage from './SportPage.js' // 运动 -- 一级
import FindPage from './FindPage.js' // 发现 -- 一级
import CommunityPage from './CommunityPage.js' // 社区 -- 一级
import MinePage from './MinePage.js' // 我的 -- 一级

// this.props.navigation.navigate 	不能在组件里使用 ？ 

export default class HomePage extends Component < props > {

	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'findTab'
		}
	}

	// 切换标签栏
	onChangeTab(tabName) {
		this.setState({
			selectedTab: tabName
		})
	}

	render() {
		return (
			<TabBar>
				<TabBar.Item
					title="运动"
					selected={this.state.selectedTab === 'sportTab'}
					onPress={()=>this.onChangeTab('sportTab')}
				>
					<SportPage/>
					
				</TabBar.Item>

				<TabBar.Item
					title="发现"
					selected={this.state.selectedTab === 'findTab'}
					onPress={()=>this.onChangeTab('findTab')}
				>
					<FindPage/>
					
				</TabBar.Item>

				<TabBar.Item
					title="社区"
					selected={this.state.selectedTab === 'communityTab'}
					onPress={()=>this.onChangeTab('communityTab')}
				>
					<CommunityPage/>
					
				</TabBar.Item>

				<TabBar.Item
					title="我的"
					selected={this.state.selectedTab === "mineTab"}
					onPress={()=>this.onChangeTab('mineTab')}
				>
					<MinePage/>
				</TabBar.Item>
			</TabBar>
		)
	}
}