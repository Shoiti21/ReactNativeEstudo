import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PeopleList = function(props) {
    const pessoas = props.pessoas;
    const pessoasText = pessoas.map(pessoa => {
        const first = pessoa.name.first
        return (
            <View key={first} style={style.item}>
                <Text>{first}</Text>
            </View>
        );
    })
    
    return (
        <View>
            {pessoasText}
        </View>
    );
}

const style = StyleSheet.create({
    item: {
        backgroundColor: '#96d7ff',
        height: 40,
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default PeopleList;