/* 
  Parte de navegação da página
*/

import { 
    StackNavigator, 
    createStackNavigator 
} from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/people-detail-page/PeopleDetailPage';
// Nova forma de fazer
const RootStack = createStackNavigator(
  {
    Home: PeoplePage,
    PeopleDetail: PeopleDetailPage,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      title: 'Pessoas!',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#659df7',
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


export default RootStack;

// Forma velha
// export default StackNavigator({
//   'Main': {
//       screen: PeoplePage
//   },
//    'PeopleDetail': {'
//       screen: PeopleDetailPage
//   },
// }, {
//      navigationOptions: {
//       title: 'Pessoas!',
//       headerStyle: {
//         backgroundColor: '#659df7',
//         borderBottomWidth: 1,
//         borderBottomColor: '#C5C5C5',
//       },
//       headerTitleStyle: {
//         color: 'white',
//         fontSize: 30,
//         alignSelf: 'center',
//         //fontWeight: 'bold',
//       },
//      }
//   });
