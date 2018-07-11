import React from 'react';
import {
   StyleSheet, 
   Text, 
   View, 
   ScrollView,
   Platform,
   AsyncStorage,
   TouchableOpacity,
 } from 'react-native';
import Repo from './components/repo';
import NewRepoModal from './components/NewRepoModal';

export default class App extends React.Component {

  state = {
    modalVisible: false,
    repos: [
      {
        id: 1,
        thumbnail: 'https://avatars2.githubusercontent.com/u/22605875?s=400&u=db21814df1748fd6679ec32d2825c485c4462bad&v=4',
        title: 'mestrep.com.br',
        author: 'Patrick Silva', 
      },
      {
        id: 2,
        thumbnail: 'https://avatars2.githubusercontent.com/u/22605875?s=400&u=db21814df1748fd6679ec32d2825c485c4462bad&v=4',
        title: 'black star',
        author: 'Patrick Silva', 
      },
    ],
  };

  async componentDidMount() {
    const  repos = JSON.parse(await AsyncStorage.getItem('@Minicurso:repos')) || [];

    this.setState({ repos }); 
  };

  _addRepository = async (newRepoText) => {
    const repoCall = await fetch(`http://api.github.com/repos/${newRepoText}`);
    const response = await repoCall.json();

    const repository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login,
    };

    this.setState({
      modalVisible: false,
      repos: [
        ...this.state.repos,
        repository,
      ],
    });

    await AsyncStorage.setItem('@Minicurso:repos', JSON.stringify(this.state.repos));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cursinho React-native</Text>
          <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          { this.state.repos.map(repo => 
            <Repo key={repo.id} data={repo}/>) }
        </ScrollView>

        <NewRepoModal 
          onCancel={() => this.setState({modalVisible: false})}
          onAdd={this._addRepository}
          visible={this.state.modalVisible}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: (Platform.OS === 'ios') ? 70: 70,
    paddingTop: (Platform.OS === 'ios') ? 30: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  repoList: {
    padding: 20,
  },

 

});