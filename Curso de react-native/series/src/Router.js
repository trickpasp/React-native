import {
	createStackNavigator
} from 'react-navigation';

import LoginPage from './pages/login/LoginPage'
import SeriesPage from './pages/series/SeriesPage'
import SerieFormPage from './pages/series/SerieFormPage'
import SerieDetailPage from './pages/series/SeriesDetailPage'

export default createStackNavigator(
	{
		'Login': {
			screen: LoginPage,
			navigationOptions: {
				title: 'Bem vindo!',
			}
		},
		'Main': {
			screen: SeriesPage,
			navigationOptions: {
				headerTitleStyle: {
					color: 'white',
					fontSize: 30,
					textAlign: 'center',
					flexGrow: 1,
				},
			}
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
		'SerieForm': {
			screen: SerieFormPage,
			navigationOptions: {
				title: 'Nova série',
			}
		},
	}, 
	{
		initialRouteName: 'SerieForm',
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
			},
		},
	}, 
);