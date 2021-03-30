import React from 'react';
import firebase from 'firebase';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';

/*
    Sistema de Login
    
    Regras de Login:
    Usuario maior que 6 caracteres e sem caracter especial
    Senha maior que 6 caracteres e sem caracter especial
*/

export default class loginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            login: "",
            password: "",
            message: "",
            loading: false
        };
    }

    onChangeInput(key, value) {
        this.setState({
            [key]: value
        })
    }

    doLogin() {
        if (this.state.login.length > 5 && this.state.password.length > 5) {
            var regChar = /[\W]/;
            if (regChar.test(this.state.login) && regChar.test(this.state.password)) {
                this.setState({
                    message: "E-mail/Senha não pode ter caracter especial"
                })
            } else {
                this.setState({
                    message: "",
                    loading: true
                })
                this.doAuthFirebase()
            }
        } else {
            this.setState({
                message: "E-mail/Senha não pode ser menos de 5 caracteres"
            })
        }
    }

    doAuthFirebase() {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.login, this.state.password)
            .then( result => {
                this.setState({
                    message: ""
                })
                this.props.navigation.navigate('Pessoas');
            })
            .catch( erro => {
                if(erro.code == 'auth/user-not-found') {
                    this.onAlertCreateAccount();
                }
                this.setState({
                    message: this.getMessageByFirebase(erro.code)
                })
            }) 
            .then( result => {
                this.setState({
                    loading: false
                })
            })
    }

    onAlertCreateAccount() {
        Alert.alert(
            "Criar conta",
            "Você não tem uma conta registrado, gostaria de criar uma conta com as informações inseridas?",
            [
                {
                    text: "Não",
                    onPress: () => {
                        console.log("Não")
                    },
                    style: "cancel" // estilo do IOS
                },
                {
                    text: "Sim", 
                    onPress: () => {
                        firebase
                            .auth()
                            .createUserWithEmailAndPassword(this.state.login, this.state.password)
                            .then( result => {
                                Alert.alert(
                                    "Sucesso",
                                    "Sua conta foi criada",
                                    [
                                        {
                                            text: "OK",
                                            onPress: () => {
                                                console.log("Não")
                                            }
                                        }
                                    ]
                                );
                            })
                            .catch( erro => {
                                Alert.alert(
                                    "Erro",
                                    this.getMessageByFirebase(erro.code),
                                    [
                                        {
                                            text: "OK",
                                            onPress: () => {
                                                console.log("Não")
                                            }
                                        }
                                    ]
                                );
                            })
                    } 
                }
            ]
        );
    }

    getMessageByFirebase(error) {
        switch (error) {
            case 'auth/invalid-email':
                return 'Usuário não é valido'
                break;
            case 'auth/user-disabled':
                return 'Usuário foi desativado'
                break;           
            case 'auth/user-not-found':
                return 'Usuário não exite'
                break;           
            case 'auth/wrong-password':
                return 'Senha inválida'
                break;
            case 'auth/email-already-in-use':
                return 'Já existe conta com esse endereço de e-mail'
                break;   
            case 'auth/operation-not-allowed':
                return 'Criação dde conta está desativada'
                break;           
            case 'auth/weak-password':
                return 'Senha não é forte o suficiente'
                break;
            default:
                return 'Aconteceu um erro no aplicativo'
                break;
        }
    }

    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyCns2xjkP7dG6tGilFJZCb7WGCQIwSoEYg",
            authDomain: "reactnativeestudo.firebaseapp.com",
            projectId: "reactnativeestudo",
            storageBucket: "reactnativeestudo.appspot.com",
            messagingSenderId: "1095379320498",
            appId: "1:1095379320498:web:fb56e4b1728ffeec0753ab",
            measurementId: "G-GQB3CGH5V5"
          };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <View>
                <View style={style.containerLogin}>
                    <TextInput
                        placeholder="Usuario"
                        value={this.state.login}
                        onChangeText={value => this.onChangeInput('login', value)}
                        editable={!this.state.loading}
                    />
                    <TextInput
                        placeholder="Senha"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeInput('password', value)}
                        editable={!this.state.loading}
                    />
                    <Button
                        onPress={() => this.doLogin()}
                        disabled={this.state.loading}
                        title={
                            this.state.loading ?
                                'CARREGANDO...' :
                                'ENTRAR'
                        }
                    />
                    {
                        this.state.message == '' ?
                            null :
                            <Text>{this.state.message}</Text>
                    }
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({
    containerLogin: {
        margin: 20
    }
})