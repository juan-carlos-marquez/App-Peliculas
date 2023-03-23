import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CurrencyFormatter from 'currency-formatter'
import { Ionicons } from '@expo/vector-icons'
import CastItem from './CastItem'


export default function MovieDetails({ movieFull, cast }) {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <Ionicons
                    name='star-outline'
                    size={16}
                    color='gray'
                />
                <Text>{movieFull.vote_average}</Text>
                <Text style={{color:"#c2c2c2", marginLeft: 5 }}>
                    -{movieFull.genres.map(g => g.name).join(',')}
                </Text>
                {/* historia */}
                <Text style={{color:"#c2c2c2", fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Histora
                </Text>
                <Text style={{color:"#c2c2c2", fontSize: 16 }}>
                    {movieFull.overview}
                </Text>
                <Text style={{color:"#c2c2c2" ,fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{color:"#c2c2c2", fontSize: 18 }}>
                    {CurrencyFormatter.format(movieFull.budget, { code: 'BRL' })}
                </Text>
            </View>
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{color:"#c2c2c2", fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Actores
                </Text>
                <FlatList
                data={cast}
                renderItem={({item})=><CastItem actor={item} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop:10, height:70}}
                />

              

                
            </View>
        </>
    )
}