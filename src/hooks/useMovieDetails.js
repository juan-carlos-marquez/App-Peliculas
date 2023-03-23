import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"

export const useMovieDetails = (movieId) => {

    const [state, setState] = useState({
        isloading: true,
        movieFull: undefined,
        cast: []
    })

    const getMovieDetails = async () => {
        const movieDetailsPromise = await movieDB.get(`${movieId}`)
        const castPromise = await movieDB.get(`${movieId}/credits`)
        
        const [movieDetailsResponse, castPromiseResponse] = await Promise.all([movieDetailsPromise,castPromise])
        
        setState({
            isloading: false,
            movieFull: movieDetailsResponse.data,
            cast: castPromiseResponse.data.cast
        })
    }
    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        ...state
    }
}