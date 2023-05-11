import { Nav } from "../Styles";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <Nav>
            <div className="nav-container">
                <NavLink to="/">TeteuFlix</NavLink>
                <div>
                    <NavLink to="/series">Series</NavLink>
                    <NavLink to="/filmes">Filmes</NavLink>
                </div>
                <div>
                    <input type="text" name="text1" id="text1" />
                    <span>Filtro</span>
                    <span>Login</span>
                </div>
            </div>
        </Nav>
    );
}
