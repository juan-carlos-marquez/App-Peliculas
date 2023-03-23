import { View, Text, FlatList } from 'react-native'
import React from 'react'
import MoviePoster from './MoviePoster'

export default function HorizontalSlider({movies, title}) {
    return (
        <View style={{ 
            
            height:(title)? 270: 180 
            }}>
            {title &&<Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft:10 , color:'#c2c2c2'}}>{title}</Text>}
            <FlatList
                data={movies}
                renderItem={({ item }) => (<MoviePoster movie={item} width={120} height={170} />)}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
            />

        </View>
    )
}