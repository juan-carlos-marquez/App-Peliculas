import axios from "axios";

const movieDB = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie",
    params:{
        api_key:'a747805b7c4ff3e6721be614328097e6',
        language:'pt-BR'
    }
})

export default movieDB