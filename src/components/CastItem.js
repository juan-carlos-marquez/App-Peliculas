import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function CastItem({ actor }) {
    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
    return (
        <View style={styles.container}>
            {
                actor.profile_path &&

                <Image
                    source={{ uri }}
                    style={{ width: 50, height: 50, borderTopLeftRadius: 10 , borderBottomLeftRadius:10, marginRight:10}}
                />
            }
            <View style={styles.atorInf}>

                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 14, opacity: 0.7 }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 4,
        elevation: 15,
        marginRight: 30,
        paddingRight:10,
        height: 50,
        backgroundColor:'#fff'
    },
    atorInf: {
        // marginLeft: 10,
        backgroundColor: '#fff',
        marginTop: 5

    }
})