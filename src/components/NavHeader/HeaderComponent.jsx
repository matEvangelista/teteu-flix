import { Header } from "../Styles";
import logo from "../../assets/IMDB.png";
import { useEffect, useState } from "react";
import HeaderPlaceholder from "./HeaderPlaceholder";
import { Link } from "react-router-dom";

export default function HeaderComponent({ type }) {
    function minutesToHours(mins) {
        if (mins < 60) return `${mins}min`;
        return `${Math.trunc(mins / 60)}h ${mins % 60}min`;
    }

    function getGenres(array) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            result.push(array[i].name);
        }
        return result.join(", ");
    }

    document.title = `TeteuFlix - ${type === "movie" ? "Filmes" : "Séries"}`;

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [trailer, setTrailer] = useState("");

    useEffect(() => {
        const result = fetch(
            `https://api.themoviedb.org/3/discover/${type}?api_key=e7158e992adf7c4e90bd637caa889ece&include_adult=false&language=pt-BR&page=1&append_to_response=videos`
        )
            .then((resp) => resp.json())
            .then((fin) => {
                const id = fin.results[0].id;
                return fetch(
                    `https://api.themoviedb.org/3/${type}/${id}?api_key=e7158e992adf7c4e90bd637caa889ece&language=pt-BR&append_to_response=videos`
                );
            })
            .then((resp) => resp.json())
            .catch((err) => alert(err));
        result.then((r) => {
            setData(r);
            if (r.videos.results.length !== 0)
                setTrailer(
                    `https://youtube.com/watch?v=${r.videos.results[0].key}`
                );
            setLoading(false);
        });
    }, [type]);

    if (loading) return <HeaderPlaceholder />;

    return (
        <Header url={data.backdrop_path}>
            <section>
                <h2>{type === "movie" ? data.title : data.name}</h2>
                <div>
                    <p>
                        {minutesToHours(
                            type === "movie"
                                ? data.runtime
                                : data.episode_run_time
                        )}
                        |
                        {String(
                            type === "movie"
                                ? data.release_date
                                : data.first_air_date
                        ).slice(0, 4)}
                        |{getGenres(data.genres)}
                    </p>
                </div>
                <div>
                    <p>
                        <span className="stars">
                            &#11088;{data.vote_average.toFixed(1)}
                        </span>
                        /10
                    </p>
                    <img src={logo} alt="logo imdb" />
                </div>
                <p>{data.overview}</p>
                <div className="links-container">
                    <a href="">
                        <i className="fa-solid fa-play"></i>
                        <span>Assistir agora</span>
                    </a>
                    <a
                        target="_blank"
                        href={trailer}
                        style={
                            type === "movie"
                                ? { display: "flex" }
                                : { display: "none" }
                        }
                    >
                        <i className="fa-solid fa-film"></i>
                        <span>Trailer</span>
                    </a>
                    <Link
                        to={`${type === "movie" ? "/filmes" : "/series"}/${
                            data.id
                        }`}
                    >
                        <i className="fa-solid fa-circle-info"></i>
                        <span>Detalhes</span>
                    </Link>
                </div>
            </section>
        </Header>
    );
}
