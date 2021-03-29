import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const PeopleDetailsItem = function(props) {
    const nameItem = props.nameItem;
    const nameContent = props.nameContent;

    return (
        <View style={style.item}>
            <Text style={[style.nameItem, nameItem.length > 10 ? style.fontLong : null ]}>{`${nameItem}: `}</Text>
            <Text style={style.nameContent}>{nameContent}</Text>
        </View>
    )
} 
const style = StyleSheet.create({
    item: {
        margin: 5,
        flexDirection: 'row'
    },
    nameItem: {
        fontWeight: "bold",
        alignItems: 'center',
        color: 'black',
        flex: 1
    },
    nameContent: {
        alignItems: 'center',
        flex: 3
    },
    fontLong: {
        fontSize: 11
    }
})

export default PeopleDetailsItem;