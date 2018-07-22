import {
	createStackNavigator
} from 'react-navigation';

import LoginPage from './src/pages/login/LoginPage'
import SeriesPage from './src/pages/series/SeriesPage';

const RootStack = createStackNavigator({
	Login: LoginPage,
	Main: SeriesPage,
}, {
	initialRouteName: 'Login',
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
}, );

export default RootStack;