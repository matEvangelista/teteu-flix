import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useFetch from "../useFetch";
import { TrendingStyle } from "../Styles";
import HeaderPlaceholder from "../NavHeader/HeaderPlaceholder";
import { Link } from "react-router-dom";

export default function Trending({ type }) {
    function generateCard(media) {
        return (
            <Link
                key={media.id}
                to={`/${type === "movie" ? "filmes" : "series"}/` + media.id}
            >
                <figure>
                    <div className="overflow">
                        <img
                            src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
                        />
                    </div>
                    <figcaption>
                        <p>{type === "movie" ? media.title : media.name}</p>
                        <p>
                            {String(
                                type === "movie"
                                    ? media.release_date
                                    : media.first_air_date
                            ).slice(0, 4)}
                        </p>
                    </figcaption>
                </figure>
            </Link>
        );
    }

    function generateButtons(genre) {
        return (
            <button
                key={genre.id}
                id={genre.id}
                className='filtering-buttons'
                onClick={() => {
                    const classes = document.getElementById(genre.id).classList;
                    classes.toggle("clicked");
                    if (!classes.contains("clicked")) {
                        setFilteredGenres(
                            filteredGenres.filter((x) => x != genre.id)
                        );
                    } else {
                        setFilteredGenres([...filteredGenres, genre.id]);
                    }
                }}
            >
                {genre.name}
            </button>
        );
    }

    const [count, setCount] = useState(1);

    const [filteredGenres, setFilteredGenres] = useState([]);

    useEffect(()=> {
        setFilteredGenres([]);
        const buttons = document.getElementsByClassName('filtering-buttons');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('clicked')
        }
    }, [type])

    const { data, loading, error } = useFetch(
        `https://api.themoviedb.org/3/discover/${type}?api_key=e7158e992adf7c4e90bd637caa889ece&language=pt-BR
        &with_genres=${filteredGenres.join(",")}&page=${count}`
    );

    const genres = useFetch(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=e7158e992adf7c4e90bd637caa889ece&language=pt-BR`
    );

    if (loading || genres.loading) return <HeaderPlaceholder />;

    return (
        <TrendingStyle>
            <h2 id="em-alta">Em alta</h2>
            <div className="container button-container">
                {genres.data.genres.map(generateButtons)}
            </div>
            <section className="container">
                {data.results.map(generateCard)}
            </section>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                pageCount={data.total_pages > 500 ? 500 : data.total_pages}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                renderOnZeroPageCount={null}
                onPageChange={(event) => {
                    setCount(event.selected + 1);
                }}
            />
        </TrendingStyle>
    );
}
