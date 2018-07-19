import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import axios from 'axios';
import PeopleList from '../components/people-list/PeopleList';

import {
  createStackNavigator
} from 'react-navigation';
import styles from './styles';


export default class PeoplePage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        peoples: [],
        loading: false,
        error: false,
    }
  }

  componentDidMount(){
    this.setState({ loading: true});
      // Pegando dados http pelo axios
      axios
          .get('https://randomuser.me/api/?nat=br&results=10')
          .then(response =>{
              const { results } = response.data;
              this.setState({
                peoples: results,
                loading: false,
              });
              console.log("Aqui");
          }).catch(error => {
              this.setState({
                error: true,
                loading: false,
              });
          });
        
  }

  renderPage() {
    console.log(this.state.error, this.state.loading);
    if(this.state.loading){
        return <ActivityIndicator size="large" color="#659df7" />;
    }

    if(this.state.error){
        return <Text style={styles.error}>Ops... Algo deu errado =(</Text>;
    }
    
    return <PeopleList 
              peoples={this.state.peoples}
              onPressItem={pageParams => {
                  this.props.navigation.navigate('PeopleDetail', pageParams);
              }}
            />;     
    

  }

  
  render() {    
    return (
      <View style= {styles.container}>
            
        {           
          this.renderPage()
        }        

        {/* {
          this.state.loading
              ? <ActivityIndicator size="large" color="#659df7" />
              : this.state.error 
                    ? <Text style={styles.error}>Ops... Algo deu errado =(</Text>
                    :  <PeopleList peoples={this.state.peoples} onPressItem={pageParams => {
                      this.props.navigation.navigate('PeopleDetail', pageParams);
                    }}/>            
        } */}
        
      </View>
    );
  }
}
