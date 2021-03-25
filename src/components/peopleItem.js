import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const PeopleItem = function(props) {
    const pessoa = props.pessoa;
    const first = pessoa.name.first
    const last = pessoa.name.last

    return (
        <View style={style.item}>
            <Image style={style.img} source={{ uri: pessoa.picture.thumbnail }}/>
            <Text style={style.text}>{`${first} ${last}`}</Text> 
        </View>
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