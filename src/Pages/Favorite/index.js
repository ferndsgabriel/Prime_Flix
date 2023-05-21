import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./favorite.css"
import { ToastContainer, toast } from 'react-toastify';

function Favorite(){
    const[favorite, setFavorite] = useState ([]);


    useEffect (()=>{
        const myListFavorite = localStorage.getItem ("@PrimeFlix");
        
        setFavorite(JSON.parse(myListFavorite) || []);
        console.log(myListFavorite)
    },[])

    function deleteMovie(id){
        let filterMovies = favorite.filter((item)=>{
        return (item.id !== id)    

        })
        setFavorite (filterMovies)
        localStorage.setItem ("@PrimeFlix",JSON.stringify(filterMovies));
        toast.success("Filme removido com sucesso! ")
    }

    return(
        <div className="div_movies">
            <h1>Meus filmes</h1>
            {favorite.length === 0 && <span>Parece que você ainda não selecionou nenhum filme para salvar :(</span>}
            <ul>
                {favorite.map((item)=>{
                    return(
                        
                        <li key={item.id} className="li-movies">
                          <span>{item.title}</span>
                          <div className="redirectable">
                          <Link to={`/Movie/${item.id}`}>Ver detalhes do filme</Link>
                          <button onClick={()=>deleteMovie(item.id)}>Excluir</button>
                          </div>
                        </li>
                    )
                })}
            </ul>



        </div>

    )

}
export default Favorite;