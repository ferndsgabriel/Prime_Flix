import { Link } from "react-router-dom";
import "./error.css"

function Error(){
    return(
        <div className="Father-Error">
            <h1>404</h1>
            <p>Pagina não encontrada</p>
            <Link to='/'>Acesse todos os filmes</Link>
        </div>

    )
}

export default Error;