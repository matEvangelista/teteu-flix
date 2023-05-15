import Movie from "./components/Individual/Movie";
import TV from "./components/Individual/TV";
import Home from "./components/Main/Home";
import Search from "./components/Main/Search";
import Media from "./components/Media";
import Navbar from "./components/NavHeader/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/filmes" element={<Media type={"movie"} />} />
                <Route path="/filmes/:filmeID" element={<Movie/>}/>
                <Route path="/series/:seriesID" element={<TV/>}/>
                <Route path="/series" element={<Media type={"tv"} />} />
                <Route path="pesquisa/:pesquisaID" element={<Search/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
