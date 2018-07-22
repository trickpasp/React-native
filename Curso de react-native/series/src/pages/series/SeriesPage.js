import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class SeriesPage extends React.Component {
    //opções da navegação da página 
    static navigationOptions = {
        title: 'Bem vindo!',
    }

    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text>
                    Series Pages
                </Text>
            </View> 
        );
    }
}