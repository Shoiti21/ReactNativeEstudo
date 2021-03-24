import React from 'react';
import { Text, View } from 'react-native';

const PeopleList = function(props) {
    const pessoas = props.pessoas;
    const pessoasText = pessoas.map(pessoa => {
        const first = pessoa.name.first
        return <Text key={first}>{first}</Text>;
    })
    
    return (
        <View>
            {pessoasText}
        </View>
    );
}

export default PeopleList;