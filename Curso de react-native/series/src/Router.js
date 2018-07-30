import {
	createStackNavigator
} from 'react-navigation';

import LoginPage from './pages/login/LoginPage'
import SeriesPage from './pages/series/SeriesPage'
import SerieDetailPage from './pages/series/details/SeriesDetailPage';

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
		'SerieDetail': {
			screen: SerieDetailPage,
			navigationOptions: ({ navigation }) => {
				const { serie } = navigation.state.params;
				return {
					title: serie.title,
				}
			}

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