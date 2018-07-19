import React from 'react';
import { View, ActivityIndicator } from 'react-native';

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
    }
  }

  componentDidMount(){
    this.setState({ loading: true});
    setTimeout(() => {
      axios
          .get('https://randomuser.me/api/?nat=br&results=10')
          .then(response =>{
              const { results } = response.data;
              this.setState({
                peoples: results,
                loading: false,
              })
          });
    }, 1500);      
  }

  renderPage() {
    if(this.state.loading)
        return <ActivityIndicator size="large" color="#659df7" />;
    else
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
        
      </View>
    );
  }
}
