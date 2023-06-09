import { useParams, useNavigate, Link } from "react-router-dom";
import useFetch from "../useFetch";
import HeaderPlaceholder from "../NavHeader/HeaderPlaceholder";
import { SearchResults } from "../Styles";

export default function Search() {
    const navigate = useNavigate();
    function displayMovies(data) {
        return (
            <Link key={data.id} to={`/../filmes/${data.id}`}>
                <figure>
                    <img
                        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                    />
                    <figcaption>
                        <h3>{data.title}</h3>
                        <p>{data.overview}</p>
                        <p>&#11088;{data.vote_average.toFixed(1)}/10</p>
                    </figcaption>
                </figure>
            </Link>
        );
    }

    function displayTV(data) {
        return (
            <Link to={`../series/${data.id}`} key={data.id}>
                <figure
                >
                    <img
                        src={
                            data.poster_path === null
                                ? ""
                                : `https://image.tmdb.org/t/p/original${data.poster_path}`
                        }
                    />
                    <figcaption>
                        <h3>{data.name}</h3>
                        <p>{data.overview}</p>
                        <p>&#11088;{data.vote_average.toFixed(1)}/10</p>
                    </figcaption>
                </figure>
            </Link>
        );
    }

    document.title = "TeteuFlix - Busca";

    const searchID = useParams().pesquisaID;
    const movieSearch =
        `https://api.themoviedb.org/3/search/movie?api_key=e7158e992adf7c4e90bd637caa889ece&query=${searchID}&language=pt-BR`.replaceAll(
            " ",
            "-"
        );
    const tvSearch =
        `https://api.themoviedb.org/3/search/tv?api_key=e7158e992adf7c4e90bd637caa889ece&query=${searchID}&language=pt-BR`.replaceAll(
            " ",
            "-"
        );
    const movie = useFetch(movieSearch);
    const tv = useFetch(tvSearch);

    if (movie.loading || tv.loading) return <HeaderPlaceholder />;

    return (
        <SearchResults>
            <h1>Resultados para {searchID}</h1>
            <h2>Filmes</h2>
            <section>
                {movie.data.results.length === 0 ? (
                    <p>Sem resultados</p>
                ) : (
                    movie.data.results.map(displayMovies)
                )}
            </section>
            <h2>Séries</h2>
            <section>
                {tv.data.results.length === 0 ? (
                    <p>Sem resultados</p>
                ) : (
                    tv.data.results.map(displayTV)
                )}
            </section>
        </SearchResults>
    );
}
