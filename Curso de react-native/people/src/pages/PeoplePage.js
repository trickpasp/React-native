import React from 'react';
import { View } from 'react-native';
import Header from '../components/header/Header';

import axios from 'axios';
import PeopleList from '../components/people-list/PeopleList';

import {
  createStackNavigator
} from 'react-navigation';


export default class PeoplePage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        peoples: []
    }
  }

  componentDidMount(){
      axios
          .get('https://randomuser.me/api/?nat=br&results=5')
          .then(response =>{
              const { results } = response.data;
              this.setState({
                peoples: results
              })
          });
  }

  
  render() {
    return (
      <View>
        <PeopleList peoples={this.state.peoples}/>
      </View>
    );
  }
}
