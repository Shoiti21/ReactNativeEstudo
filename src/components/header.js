import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = function(props) {
    return (
      <View style={style.container}>
        <Text style={style.text}>{props.title}</Text>
      </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'blue'
    },
    text: {
        fontSize: 24,
        color: 'white',
        margin: 20,
        textAlign: 'center'
    }
})

/*
StyleSheet.create serve como otimização, ele te ajuda a saber onde vc está errado

Alternativa 1 - É possivel passar um objeto direto no style sem o StyleSheet.create
const style = {
    container: {
        backgroundColor: 'blue'
    },
    text: {
        fontSize: 24,
        color: 'white',
        margin: 20,
        textAlign: 'center'
    }
}

Alternativa 2 - Passado separado com ou sem StyleSheet.create
const container: {
    backgroundColor: 'blue'
}
const text: {
    fontSize: 24,
    color: 'white',
    margin: 20,
    textAlign: 'center'
}


*/

export default Header;