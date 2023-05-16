import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderPlaceholder from "../NavHeader/HeaderPlaceholder";
import { MediaContainer } from "../Styles";
import ErrorMessage from "./ErrorMessage";

export default function Movie() {
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

    const param = useParams().filmeID;
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [foundError, setFoundError] = useState(false);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${param}?api_key=e7158e992adf7c4e90bd637caa889ece&language=pt-BR&append_to_response=videos`
        )
            .then((resp) => {
                if (resp.ok) return resp.json();
                throw new Error("Não foi possível carregar a página");
            })
            .catch((err) => {
                setError(err);
                setFoundError(true);
            })
            .then((res) => setMovie(res))
            .finally(setLoading(false));
    }, []);

    if (!foundError && (loading || movie === undefined))
        return <HeaderPlaceholder />;

    if (foundError) return <ErrorMessage />;

    document.title = `TeteuFlix - ${movie.title}`;

    return (
        <MediaContainer background_img={movie.backdrop_path}>
            <section className="movie-container">
                <h1>{movie.title}</h1>
                <section className="poster-text">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
                    <div>
                        <h3>
                            <p>Sinopse: {movie.overview}</p>
                            <p>
                                <span>
                                    &#11088;{Math.trunc(movie.vote_average)}/10|
                                </span>
                                <span>{getGenres(movie.genres)}|</span>
                                <span>{minutesToHours(movie.runtime)}|</span>
                                <span>
                                    Receita: US$
                                    {movie.revenue
                                        .toString()
                                        .replace(
                                            /(\d)(?=(\d\d\d)+(?!\d))/g,
                                            "$1."
                                        )}
                                </span>
                            </p>
                        </h3>
                        <div className="responsive-video">
                            {movie.videos.results.length > 0 && (
                                <iframe
                                    src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    title="YouTube video player"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </div>
                </section>
            </section>
        </MediaContainer>
    );
}
