import { useState, useEffect } from "react";
import api from "../../Services/api";
import { Link } from "react-router-dom";
import "./home.css"

function Home(){

    const [movies, setMovies] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect (()=>{
        async function loadMovies(){
            const response = await api.get ('movie/now_playing', {
                params:{
                    api_key:"d7c8bb72134a5d0288d84cc358425938",
                    language: "pt-br",
                    page:1,
                }
            })

           

            setMovies(response.data.results.slice(0,15))
            setLoading (false)

        }

        loadMovies()


    },[])
    
    if (loading){
        return(
            <div className="Loading">
                <h1>Carregando os filmes...</h1>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="list-movies">
                {movies.map((moviesApi)=>{
                    return(
                        <article key={moviesApi.id} className="Article_movies">
                            <strong>{moviesApi.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${moviesApi.poster_path}`} alt={moviesApi.title}/>
                            <Link to=  {`/Movie/${moviesApi.id}`} className="Link">Acessar</Link>

                        </article>
                    )
                })}
            </div>

        </div>
    )
}

export default Home;