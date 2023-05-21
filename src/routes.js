import {BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Header from "./Components/header";
import Error from "./Pages/Error";
import Favorite from "./Pages/Favorite";

function RoutesApp(){
    return(
    <BrowserRouter>
        <Header/>
        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Movie/:id" element={<Movie/>}/>
                <Route path="/favorites" element={<Favorite/>}/>

                <Route path="/*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
    )
}


export default RoutesApp;