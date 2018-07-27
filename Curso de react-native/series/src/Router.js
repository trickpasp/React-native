import {
	createStackNavigator
} from 'react-navigation';

import LoginPage from './pages/login/LoginPage'
import SeriesPage from './pages/series/SeriesPage'

export default createStackNavigator(
	{
		'Login': {
			screen: LoginPage,
			navigationOptions: {
				title: 'Bem vindo!',
			}
		},
		'Main': {
			screen: SeriesPage
		},
	}, 
	{
		initialRouteName: 'Main',
		navigationOptions: {
			title: 'Series!',
			headerTintColor: 'white',
			headerStyle: {
				backgroundColor: '#6ca2f7',
				borderBottomWidth: 1,
				borderBottomColor: '#C5C5C5',
			},
			headerTitleStyle: {
				color: 'white',
				fontSize: 30,
				textAlign: 'center',
				flexGrow: 1,
			},
		},
	}, 
);