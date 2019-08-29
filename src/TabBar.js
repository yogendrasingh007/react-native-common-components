import React from 'react';
import { Image, View, Text, ImageBackground, Dimensions } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import RewardScene from './Screens/RewardScene';
import InboxScene from './Screens/InboxScene';
import MoreScene from './Screens/MoreScene';
import OrderScene from './Screens/OrderScene';
import LocationScene from './Screens/LocationScene';
import Images from './res/Images';
const TabIcon = ({ index, focused }) => {
	const images = [Images.tab1.source, Images.tab2.source, Images.tab3.source, Images.tab4.source, Images.tab5.source];
	return (
		<View style={{ justifyContent: 'center' }}>
			<View
				style={{
					position: 'absolute',
					top: -1,
					height: 2,
					left: -30,
					width: '100%'
				}}
			/>
			<Image source={images[index]} style={{ alignSelf: 'center', justifyContent: 'center' }} />
			{focused && (
				<View
					style={{
						position: 'absolute',

						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',

						height: 2,
						marginTop: 2,
						width: Dimensions.get('screen').width / 5
					}}
				/>
			)}
		</View>
	);
};

const TabNavigator = createBottomTabNavigator(
	{
		Location: {
			screen: LocationScene,
			navigationOptions: {
				title: 'Locations',
				tabBarIcon: ({ focused }) => <TabIcon index={0} focused={focused} />
			}
		},
		Reward: {
			screen: RewardScene,
			navigationOptions: {
				title: 'Rewards',
				tabBarIcon: ({ focused }) => <TabIcon index={1} focused={focused} />
			}
		},
		Order: {
			screen: OrderScene,
			navigationOptions: {
				title: 'Orders',
				tabBarIcon: ({ focused }) => <TabIcon index={2} focused={focused} />
			}
		},
		Inbox: {
			screen: InboxScene,
			navigationOptions: {
				title: 'Inbox',
				tabBarIcon: ({ focused }) => <TabIcon index={3} focused={focused} />
			}
		},
		More: {
			screen: MoreScene,
			navigationOptions: {
				title: 'More',
				tabBarIcon: ({ focused }) => <TabIcon index={4} focused={focused} />
			}
		}
	},
	{
		tabBarOptions: {
			style: {
				backgroundColor: 'black'
			}
		}
	}
);

const AppContainer = createAppContainer(TabNavigator);

export default class TabBar extends React.Component {
	render() {
		return <AppContainer />;
	}
}
