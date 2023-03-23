import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'



export default function MoviePoster({ movie,width, height  }) {

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const navigation = useNavigation()
    return (
        <TouchableOpacity activeOpacity={0.8}  onPress={()=>navigation.navigate('Details',{movie})}
         style={{
            width, 
            height, 
            alignSelf:'center',
             marginHorizontal:2,
             paddingBottom:28,
             paddingHorizontal:5}}>

            <View  style={styles.imageContainer}>
                <Image
                    source={{
                        uri: uri
                    }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   
    imageContainer: {
        flex:1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 4,
        elevation: 10,
    },
    image: {
        flex: 1,
        borderRadius: 18,


    }
})