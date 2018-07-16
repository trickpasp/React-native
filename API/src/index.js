/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Button,
  AsyncStorage,
} from 'react-native';
import api from './services/api';


export default class App extends Component {

  state = {
    errorMessage: null,
  };

  signIn = async () => {
    try {
      const response = await api.post('/auth/authenticate', {
        email: 'diego@rocketseat.com.br',
        password: '123456',
      });

      const { token, user } = response.data;

      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(user)],
      ]);

      this.setState({ loggedInUser: user });

      Alert.alert('Logado com sucesso!');
    } catch (err) {
      this.setState({ errorMessage: err.data.error });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        { !!this.state.errorMessage && <Text>{ this.state.errorMessage }</Text> }
        <Button onPress={this.signIn} title="Entrar"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
