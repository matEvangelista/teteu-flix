import Footer from "./components/Footer/Footer";
import Movie from "./components/Individual/Movie";
import TV from "./components/Individual/TV";
import Home from "./components/Main/Home";
import Search from "./components/Main/Search";
import Media from "./components/Media";
import Navbar from "./components/NavHeader/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { GlobalStyle } from "./components/globalStyles";
import Login from "./components/Main/Login";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Navbar />
            <ScrollToTop/>
            <Routes>
                <Route path="/filmes" element={<Media type={"movie"} />} />
                <Route path="/filmes/:filmeID" element={<Movie/>}/>
                <Route path="/series/:seriesID" element={<TV/>}/>
                <Route path="/series" element={<Media type={"tv"} />} />
                <Route path="pesquisa/:pesquisaID" element={<Search/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
