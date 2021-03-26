import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PeopleItem = function(props) {
    const pessoa = props.pessoa;
    const first = pessoa.name.first
    const last = pessoa.name.last

    const toGoDetails = () => {
        props.navigation.navigate('Detalhes', { pessoa: pessoa })
    }

    return (
        <TouchableOpacity onPress={toGoDetails}>
            <View style={style.item}>
                <Image style={style.img} source={{ uri: pessoa.picture.thumbnail }}/>
                <Text style={style.text}>{`${first} ${last}`}</Text> 
            </View>
        </TouchableOpacity>
    )
} 
const style = StyleSheet.create({
    item: {
        backgroundColor: '#96d7ff',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    img: {
        aspectRatio: 1,
        width: 10,
        borderRadius: 50,
        flex: 1,
        margin: 5
    },
    text: {
        marginLeft: 8,
        flex: 8
    }
})

export default PeopleItem;