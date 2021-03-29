import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import PeopleDetailsItem from '../components/peopleDetailsItem'

export default class PeopleDetailsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const pessoa = this.props.route.params.pessoa;
        const first = pessoa.name.first
        const last = pessoa.name.last
        return (
            <View style={ style.container }>
                <Image style={ style.image } source={{ uri: pessoa.picture.large }}/>
                <View style={style.containerItem}>
                    <PeopleDetailsItem nameItem="Nome" nameContent={`${first} ${last}`}></PeopleDetailsItem>
                    <PeopleDetailsItem nameItem="Idade" nameContent={pessoa.dob.age}></PeopleDetailsItem>
                    <PeopleDetailsItem nameItem="Genero" nameContent={pessoa.gender}></PeopleDetailsItem>
                    <PeopleDetailsItem nameItem="Nacionalidade" nameContent={`${pessoa.nat} - ${pessoa.location.country}`}></PeopleDetailsItem>
                    <PeopleDetailsItem nameItem="E-mail" nameContent={pessoa.email}></PeopleDetailsItem>
                    <PeopleDetailsItem nameItem="Celular" nameContent={pessoa.cell}></PeopleDetailsItem>
                    <PeopleDetailsItem nameItem="Telefone" nameContent={pessoa.phone}></PeopleDetailsItem>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        marginTop: 15
    },
    image: {
        aspectRatio: 1,
        borderRadius: 999,
        marginHorizontal: 50
    },
    containerItem: {
        backgroundColor: '#96d7ff',
        margin: 15,
        padding: 5
    }
})