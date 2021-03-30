import React from 'react';
import firebase from 'firebase';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

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
                console.log('Sucesso! ' + result);
                this.setState({
                    message: ""
                })
                this.props.navigation.navigate('Pessoas');
            })
            .catch( erro => {
                console.log('Erro! ' + erro);
                this.setState({
                    message: "E-mail/Senha incorreto",
                    loading: false
                })
            })
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