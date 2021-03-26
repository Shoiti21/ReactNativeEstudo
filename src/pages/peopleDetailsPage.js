import React from 'react'
import { View, Text } from 'react-native'

export default class PeopleDetailsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const pessoa = this.props.route.params.pessoa;
        return (
            <View>
                <Text>{pessoa.name.first}</Text>
            </View>
        );
    }
}