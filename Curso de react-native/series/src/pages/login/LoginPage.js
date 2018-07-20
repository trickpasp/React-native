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

import styles from './styles';

import FormRow from '../../components/form/FormRow';

export default class LoginPage extends React.Component {
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
            color: false,
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
        const {mail, password} = this.state;

        const loginUserSuccess = user => {
            this.setState({
                message: 'Success',
                color: true,
            });
        }

        const loginUserFalied = error => {
            this.setState({
                message: this.getMessageByErrorCode(error.code),
                 color: false,
            });  
        }

        firebase
            .auth()
            .signInWithEmailAndPassword(mail, password)
            .then(loginUserSuccess)
            .catch(error => {
                if(error.code === 'auth/user-not-found'){
                    Alert.alert(
                        'Usuário não encontrado!',
                        'Deseja criar um cadastro com as informações inseridas?',
                        [{
                            text: 'Não', 
                            onPress: () => console.log('Usuário não quer criar conta!'),
                            style: 'cancel'
                        },{
                            text: 'Sim',
                            onPress: () => {
                                firebase
                                        .auth()
                                        .createUserWithEmailAndPassword(mail, password)
                                        .then(loginUserSuccess(user))
                                        .catch(error => {
                                            loginUserFalied(error)
                                        });
                            }
                        }],
                        { cancelable: false }
                    );
                    return;
                }    

                loginUserFalied(error)            
                
            })
            .then(() => this.setState({ isLoading: false })); 
    }

    getMessageByErrorCode(errorCode){
        switch(errorCode){            
            case 'auth/invalid-email':
                return 'Email inválido!';
            case 'auth/user-not-found':
                return 'Usuário não encontrado!';
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
            <Text style={[this.state.color ? styles.success: styles.error]}>{ message }</Text>
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

