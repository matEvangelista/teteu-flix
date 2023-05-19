import { Nav } from "../Styles";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const btn = useRef();
    const input = useRef();
    const navigate = useNavigate();
    const vertical = useRef();
    return (
        <Nav>
            <div className="nav-container">
                <div className="button-nav-container">
                    <NavLink
                        to="/"
                        onClick={() => {
                            vertical.current.classList.remove("clicked");
                        }}
                    >
                        TeteuFlix
                    </NavLink>
                    <button
                        onClick={() => {
                            vertical.current.classList.toggle("clicked");
                        }}
                    >
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
                <div className="options" ref={vertical}>
                    <div className="links">
                        <NavLink
                            to="/series"
                            onClick={() => {
                                vertical.current.classList.remove("clicked");
                            }}
                        >
                            Series
                        </NavLink>
                        <NavLink
                            to="/filmes"
                            onClick={() => {
                                vertical.current.classList.remove("clicked");
                            }}
                        >
                            Filmes
                        </NavLink>
                    </div>
                    <div className="form-container">
                        <form
                            onSubmit={(e) => {
                                if (input.current.value !== "")
                                    navigate(`pesquisa/${input.current.value}`);
                                input.current.value = "";
                                vertical.current.classList.remove('clicked')
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
            </div>
        </Nav>
    );
}
