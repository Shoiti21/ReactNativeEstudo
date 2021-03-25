import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import PeopleItem from './peopleItem'

const PeopleList = function(props) {
    const pessoas = props.pessoas;
    const pessoasText = pessoas.map(pessoa => {
        return (
            <PeopleItem pessoa={pessoa}/>
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