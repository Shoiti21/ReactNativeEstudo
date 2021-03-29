import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import PeopleItem from './peopleItem'

const PeopleList = function(props) {
    const pessoas = props.pessoas;
    const pessoasText = pessoas.map(pessoa => {
        const first = pessoa.name.first
        return (
            <PeopleItem key={first} pessoa={pessoa} navigation={props.navigation}/>
        );
    })
    
    return (
        // FlatList transforma a view em um scroll, só que ele trabalha com a renderização conforme a view do usuario para que assim otimize o app e não carregar todos os item de uma vez só.
        <FlatList
            data={pessoas}
            renderItem={({item}) => (
                <PeopleItem pessoa={item} navigation={props.navigation}/>
            )}
            keyExtractor={item => item.name.first + item.name.last}        
        />

        // <View>
        //     {pessoasText}
        // </View>
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