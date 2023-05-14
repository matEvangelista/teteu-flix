import { useState } from "react";
import ReactPaginate from "react-paginate";
import useFetch from "../useFetch";
import { TrendingStyle } from "../Styles";
import HeaderPlaceholder from "../NavHeader/HeaderPlaceholder";
import { Link } from "react-router-dom";

export default function Trending({ type }) {
    function generateCard(media) {
        return (
            <Link key={media.id} to={`/${type === "movie" ? "filmes" : "series"}/`+media.id}>
                <figure>
                    <img
                        src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
                    />
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

    const [count, setCount] = useState(1);

    const { data, loading, error } = useFetch(
        `https://api.themoviedb.org/3/trending/${type}/week?api_key=e7158e992adf7c4e90bd637caa889ece&language=pt-BR&page=${count}`
    );

    if (loading) return <HeaderPlaceholder />;

    return (
        <TrendingStyle>
            <h2 id="em-alta">Em alta</h2>
            <section className="container">{data.map(generateCard)}</section>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                pageCount={1000}
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
