import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'

import { useMovieDetails } from '../hooks/useMovieDetails'
import MovieDetails from '../components/MovieDetails'



const screenHeight = Dimensions.get('screen').height
export default function DetailScreen({ route, navigation }) {
  const { movie } = route.params
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  const { isloading, cast, movieFull } = useMovieDetails(movie.id)

  //  console.log(movieFull);
  useEffect(() => {
    // console.log(movie.id);
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#073763' }}>
      <StatusBar barStyle="light-content" backgroundColor="#073763" />
      <View style={styles.container}>
        <Image
          source={{
            uri
          }}
          style={styles.posterImage}
        />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View >
        {
          isloading ?
            <ActivityIndicator size={35} color='gray' style={{ marginTop: 20 }} />
            : <MovieDetails movieFull={movieFull} cast={cast} />

        }
      </View>
      <TouchableOpacity onPress={() => navigation.pop()} style={{ position: 'absolute', zIndex: 999, elevation: 9, top: 30, left: 5 }}>
        <Ionicons name='arrow-back-outline' size={60} color='white' />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    height: screenHeight * 0.7,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {

    marginHorizontal: 20,
    marginTop: 20

  },
  subtitle: {
    color:'#c2c2c2',
    fontSize: 18,
    opacity: 0.8
  },
  title: {
    color:'#c2c2c2',
    fontSize: 20,
    fontWeight: 'bold',

  }
})