import { Nav } from "../Styles";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const btn = useRef();
    const input = useRef();
    const navigate = useNavigate();
    return (
        <Nav>
            <div className="nav-container">
                <NavLink to="/">TeteuFlix</NavLink>
                <div>
                    <NavLink to="/series">Series</NavLink>
                    <NavLink to="/filmes">Filmes</NavLink>
                </div>
                <div>
                    <form
                        onSubmit={(e) => {
                            if (input.current.value !== "") navigate(`pesquisa/${input.current.value}`)
                            input.current.value = "";
                            e.preventDefault();
                        }}
                        ref={btn}
                    >
                        <input
                            type="text"
                            name="text1"
                            id="text1"
                            ref={input}
                            onBlur={() =>
                                btn.current.classList.toggle("active")
                            }
                            onFocus={() =>
                                btn.current.classList.toggle("active")
                            }
                            autoComplete="off"
                        />
                        <input type="submit" value="Pesquisar" />
                    </form>
                    <span>Filtro</span>
                    <span>Login</span>
                </div>
            </div>
        </Nav>
    );
}
