import Media from "./components/Media";
import Navbar from "./components/NavHeader/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/filmes" element={<Media type={"movie"} />} />
                <Route path="/series" element={<Media type={"tv"} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
