import { View, Text, Dimensions, ActivityIndicator, FlatList,StatusBar, ScrollView } from 'react-native'
import React from 'react'

import { useMovies } from '../hooks/useMovies.js'
import MoviePoster from '../components/MoviePoster.js'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import HorizontalSlider from '../components/HorizontalSlider.js'
// import { StatusBar } from 'expo-status-bar'

const { width } = Dimensions.get('window')
export default function HomeScreen() {

    const { nowPlaying, loading,popular,upcomming, topRated } = useMovies()

    const { top } = useSafeAreaInsets()


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={20} />
            </View>
        )
    }


    return (
        <ScrollView style={{backgroundColor:'#073763'}} >
            {/* <MoviePoster movie={peliculasCine[0]}/> */}
            <StatusBar barStyle="light-content" backgroundColor="#073763" />
            <View style={{ height: 440 }}>
                <GestureHandlerRootView>
                    <Carousel
                        loop
                        mode='parallax'
                        pagingEnabled
                        autoPlay={true}
                        scrollAnimationDuration={1000}
                        data={nowPlaying}
                        renderItem={({ item }) =>
                            (<MoviePoster movie={item} width={350} height={490} />)
                        }
                        width={width}
                        height={width + 50}

                    />
                </GestureHandlerRootView>
            </View>
            {/* populares */}
           <HorizontalSlider movies={popular} title='filmes populares'/>
           <HorizontalSlider movies={topRated} title='melhores filmes' />
           <HorizontalSlider movies={upcomming} title='por vir' />

            
            
        </ScrollView>
    )
}