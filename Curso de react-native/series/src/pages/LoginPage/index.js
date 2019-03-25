import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    ActivityIndicator,
    Alert
} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';


import styles from './styles';

import FormRow from '../../components/form/FormRow';
import { tryLogin } from '../../actions';

class LoginPage extends React.Component {
    //opções da navegação da página 
    static navigationOptions = {
        title: 'Bem vindo!',
    }

    //método construtor do react-native 
    constructor(props){
        super(props);

        this.state = {
            mail: '',
            password: '',
            isLoagind: false,
            message: '',
        }
    }
    //comunicação com o banco de dados firebase
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
    }
    
    //ação do botão
    onChangeHandler(field, value){
        this.setState({
            [field]: value
        });
    }

    //parte de login
    tryLogin(){
        this.setState({isLoading: true, message: ''});
        const { mail: email, password } = this.state;

        this.props.tryLogin({email, password})
            .then(user => {                
                if(user)
                    return this.props.navigation.replace('Main');
                
                this.setState({
                    isLoading: false,
                    message: ''
                });
            })
            .catch(error => {
                this.setState({isLoading: false, message: this.getMessageByErrorCode(error)});
            });
 
    }

    getMessageByErrorCode(errorCode){
        switch(errorCode.code){            
            case 'auth/invalid-email':
                return 'Email inválido!';
            case 'auth/wrong-password':
                return 'Senha incorreta!';
            default: 
                return 'Erro desconhecido!'
        }
    }

    renderMessage(){
        const { message } = this.state;
        if (!message) 
            return null;
        return (
            Alert.alert('Atenção', message, [{text: 'OK', onPress: () => this.setState({isLoading: false, message: '' })}] ) 
             );
    }

    renderButton(){
        if (this.state.isLoading)
            return (<ActivityIndicator />);

        return(
            <Button 
                    title="Entrar"
                    onPress={() => this.tryLogin()}
                />
        );
    }    

    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput 
                        style={styles.input}
                        placeholder="user@mail.com"
                        keyboardType="email-address"
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
                
                { this.renderButton() }
                { this.renderMessage() }
                
            </View>
        );
    }
}

export default connect(null, { tryLogin })(LoginPage);