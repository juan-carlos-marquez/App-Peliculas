import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'

export const useMovies = () => {
  const [loading, setLoading] = useState(true)

  const [moviesState, setMoviesState] = useState({
    nowPlaying: [],
    popular: [],
    upcomming: [],
    topRated:[]
  })

  const getMovies = async () => {
    const pnowPlaying = movieDB.get('/now_playing')
    const ppopular = movieDB.get('/popular')
    const ptopRated = movieDB.get('/top_rated')
    const pupcomming = movieDB.get('/upcoming')
    const res = await Promise.all([
      pnowPlaying,
      ppopular,
      pupcomming,
      ptopRated
    ])
    setMoviesState({
      nowPlaying: res[0].data.results,
      popular: res[1].data.results,
      upcomming: res[2].data.results,
      topRated: res[3].data.results
    })

    setLoading(false)
  }
  useEffect(() => {
    getMovies()
  }, [])
  return {
    ...moviesState,
    loading,

  }
}
