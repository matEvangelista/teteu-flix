import HeaderPlaceholder from "../NavHeader/HeaderPlaceholder";
import { HomeHeader, HomeMain } from "../Styles";
import useFetch from "../useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
    function generateCard(media) {
        return (
            <SwiperSlide className="card" key={media.poster_path}>
                <figure>
                    <img
                        src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
                    />
                    <figcaption>
                        <p>{media.title}</p>
                        <p>
                            <span>
                                &#11088;{Math.ceil(media.vote_average)}/10
                            </span>
                            <span>{media.release_date.slice(0, 4)}</span>
                        </p>
                    </figcaption>
                </figure>
            </SwiperSlide>
        );
    }

    const { data, loading, error } = useFetch(
        "https://api.themoviedb.org/3/account/19268743/favorite/movies?api_key=e7158e992adf7c4e90bd637caa889ece&page=1&session_id=86c9f088b5a4b6f83a822f8b18c5336cc96a09cd&language=pt-BR"
    );

    if (loading) return <HeaderPlaceholder />;

    return (
        <>
            <HomeHeader
                background_img={`https://image.tmdb.org/t/p/original${
                    data[Math.floor(Math.random() * data.length)].backdrop_path
                }`}
            >
                <h1>TeteuFlix</h1>
                <h2>A melhor escolha em cinema</h2>
            </HomeHeader>
            <HomeMain>
                <h2 className="container">Favoritos do Teteu</h2>
                <section className="container">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        loop
                        breakpoints={{
                            1: { slidesPerView: 1 },
                            960: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        {data.map(generateCard)}
                    </Swiper>
                </section>
            </HomeMain>
        </>
    );
}
