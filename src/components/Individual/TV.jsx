import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderPlaceholder from "../NavHeader/HeaderPlaceholder";
import { MediaContainer } from "../Styles";
import ErrorMessage from "./ErrorMessage";

export default function TV() {
    function getGenres(array) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            result.push(array[i].name);
        }
        return result.join(", ");
    }

    const param = useParams().seriesID;
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [foundError, setFoundError] = useState(false);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/tv/${param}?api_key=e7158e992adf7c4e90bd637caa889ece&language=pt-BR&append_to_response=videos`
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

    {console.log(movie.videos)}

    return (
        <MediaContainer background_img={movie.backdrop_path}>
            <section className="movie-container">
                <h1>{movie.name}</h1>
                <section className="poster-text">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
                    <div>
                        <h3>
                            <p>Sinopse: {movie.overview}</p>
                            <p>
                                &#11088;{Math.trunc(movie.vote_average)}/10 |{" "}
                                {getGenres(movie.genres)}
                            </p>
                        </h3>
                        <div className="responsive-video">
                            <iframe
                                width="560"
                                height="315"
                                src={
                                    movie.videos.results.length === 0
                                        ? ""
                                        : `https://www.youtube.com/embed/${movie.videos.results[0].key}`
                                }
                                title="YouTube video player"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </section>
            </section>
        </MediaContainer>
    );
}