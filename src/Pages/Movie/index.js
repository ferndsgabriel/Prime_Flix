import { useEffect, useState } from "react";
import { useParams, useNavigate, json} from "react-router-dom";
import api from "../../Services/api";
import "./movie.css"
import { toast } from "react-toastify";


function Movie(){

    const {id} = useParams ();
    const [movie,setMovie] = useState ({});
    const [loading, setLoading] = useState (true)
    const navigate = useNavigate();

    useEffect(()=>{
        async function loadMovie(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:'d7c8bb72134a5d0288d84cc358425938',
                    language:'pt-BR',
                }
            })
            .then((response)=>{
               setMovie(response.data) ;
               console.log (response.data)
               setLoading (false);
            })
            .catch(()=>{
                navigate ('/', {replace: true})
                return;
                
            })
        }
        loadMovie();
        
        return ()=> {
            console.log ("O componente foi desmontado")
        }



    },[navigate, id])


     function saveMovie(){
        const myList = localStorage.getItem("@PrimeFlix")
        let movieSaved = JSON.parse(myList)|| [];
        const hasMovie = movieSaved.some((movieSaved)=> movieSaved.id === movie.id)
       
        if (hasMovie){
            toast.warn ("Este filme já foi salvo!")
            return
        }

        movieSaved.push(movie)
            localStorage.setItem("@PrimeFlix", JSON. stringify(movieSaved))
            toast.success("Filme salvo com sucesso!")

        }

    if (loading){
    return (
        <div>
            <h1>Carregando filmes</h1>
        </div>
    )
    }


    
    return(
        <div className="father-movie">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>
            <strong>Avaliação: {movie.vote_average.toFixed(1)}/10 </strong>
            <h3>Sinopse</h3>
            <p>{movie.overview}</p>
            <div className="buttons">
                <button onClick={saveMovie}>Salvar</button>
                <button>
                     <a target="blank" href={`https://www.youtube.com/results?search_query=${movie.title}+trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Movie;