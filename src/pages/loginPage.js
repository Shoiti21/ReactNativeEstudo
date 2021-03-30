import React from 'react';
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
        if (this.state.login.length > 5) {
            var regChar = /[\W]/;
            if (regChar.test(this.state.login)) {
                this.setState({
                    message: "Usuário não pode ter caracter especial"
                })
            } else {
                console.log("Sucesso!")
                this.setState({
                    message: "",
                    loading: true
                })
            }
        } else {
            this.setState({
                message: "Usuário não pode ser menos de 5 caracteres"
            })
        }
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