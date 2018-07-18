/* 
    Página de detalhes sobre usuário
*/

import React from 'react';
import { 
    View,
    Image,
    ScrollView 
} from 'react-native';

import { capitalizerFirstLetter } from '../../util';
import styles from './styles';
import Line from '../../components/line/line';

class PeopleDetailPage extends React.Component {

    static navigationOptions = ({ navigation }) =>  {   
        const peopleName = navigation.state.params.people.name.first;
        
        return ({
            title: capitalizerFirstLetter(peopleName),
            headerTitleStyle: {
                color: 'white',
                fontSize: 30,
            },
        });
      };    
    render() {

        const { people } = this.props.navigation.state.params;

        
        return (
            <ScrollView >  
                <View style={styles.container}>                                
                    <Image 
                        source={{uri: people.picture.large }}
                        style={styles.avatar}
                    />                           
                    <View style={styles.detailContainer}>
                        <Line label={"Email:"} content={people.email}/>
                        <Line label={"Cidade:"} content={people.location.city}/>
                        <Line label={"Estado:"} content={people.location.state}/>
                        <Line label={"Tel:"} content={people.phone}/>
                        <Line label={"Cell:"} content={people.cell}/>
                        <Line label={"Nacionalidade:"} content={people.nat}/>
                        <Line label={"Job:"} content={people.job}/>
                    </View>   
                                
                </View>
            </ScrollView>
        );
    }
}

export default PeopleDetailPage;