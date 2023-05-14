import useFetch from "../useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Main } from "../Styles";
import HeaderPlaceholder from "../NavHeader/HeaderPlaceholder";
import Trending from "./Trending";

export default function ({ type }) {
    function generateCard(media) {
        return (
            <SwiperSlide className="card" key={media.poster_path}>
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
            </SwiperSlide>
        );
    }

    const { data, loading, error } = useFetch(
        `https://api.themoviedb.org/3/${type}/${
            type === "movie" ? "upcoming" : "top_rated"
        }?api_key=e7158e992adf7c4e90bd637caa889ece&language=pt-BR&page=1`
    );

    if (loading) return <HeaderPlaceholder />;

    return (
        <Main>
            <h2>
                {type === "movie"
                    ? "Últimos lançamentos"
                    : "Mais bem avaliadas"}
            </h2>

            <section className="container">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    loop
                    breakpoints={{
                        1: { slidesPerView: 1 },
                        960: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                >
                    {data.map(generateCard)}
                </Swiper>
            </section>

            <Trending type={type} />
        </Main>
    );
}
