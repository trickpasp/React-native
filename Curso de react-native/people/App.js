import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header/Header';


export default class App extends React.Component {
  renderList(){
    const names = [
      'Patrick Silva',
      'Pedro Silva',      
      'Pablo Andreson',
      'Paulo André'      
    ];

    const textElements = names.map(name => {
      return <Text key={name}>{name}</Text>;
    });

    return textElements;
  }  
  render() {
    return (
      <View>
        <Header title={'Pessoas!'}/>
        { this.renderList() }
      </View>
    );
  }
}
