import { Link } from "react-router-dom";
import './style.css'

function Header(){
    return(
        <header className="Header-App">
            <div className="Logo">
            <Link to='/' className="LogoName">Prime-Flix</Link>
            </div>
            
            <div className="Navegation">
            <Link to='/favorites' className="ItensNav">Meus Filmes</Link>
            </div>
        </header>

    )
}

export default Header;