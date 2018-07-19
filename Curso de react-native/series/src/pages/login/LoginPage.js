import React from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from 'firebase';

import styles from './styles';

import FormRow from '../../components/form/FormRow';

export default class LoginPage extends React.Component {
    static navigationOptions = {
        title: 'Bem vindo!',
    }

    constructor(props){
        super(props);

        this.state = {
            mail: '',
            password: '',
        }
    }

    componentDidMount()  {
        const config = {
            apiKey: "AIzaSyB0pn9JlKBahH_zygVTx1_jwa5tq_mnM4w",
            authDomain: "series-ba700.firebaseapp.com",
            databaseURL: "https://series-ba700.firebaseio.com",
            projectId: "series-ba700",
            storageBucket: "series-ba700.appspot.com",
            messagingSenderId: "1093603818170"
        };
        firebase.initializeApp(config);

        firebase
            .auth()
            .signInWithEmailAndPassword('fernanda@mail.com', '123123')
            .then(user => {
                console.log('Usuário autenticado!', user);
            })
            .catch(error => {
                console.log("Usuário não encontrado", error);
            });
    }
    

    onChangeHandler(field, value){
        this.setState({
            [field]: value
        });
    }

    tryLogin(){
        console.log(this.state);
    }

    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput 
                        style={styles.input}
                        placeholder="user@mail.com"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput 
                        style={styles.input}
                        placeholder="*****************"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow>
                
                <Button 
                    title="Entrar"
                    onPress={() => this.tryLogin()}
                />
                
            </View>
        );
    }
}

