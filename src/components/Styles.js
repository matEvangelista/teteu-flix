import styled from "styled-components";

// equivalente a um mixin no sass. equivale à classe container do css
const container = `
  margin: 0 auto;
  width: 95%;
  @media screen and (min-width: 576px) {
    max-width: 540px;
  }
  @media screen and (min-width: 768px) {
    width: 100;
    max-width: 720px;
  }
  @media screen and (min-width: 992px) {
    max-width: 960px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
  @media screen and (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    color: white;
    backdrop-filter: blur(30px) brightness(0.8);
    z-index: 999;
    div.nav-container {
        ${container};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0;
        a {
            color: white;
        }
        & > div {
            display: flex;
            align-items: center;
            gap: 2rem;
            a {
                padding: 0.5rem 2rem;
                border-radius: 30px;
                border: none;
                &.active {
                    background-color: #747474;
                    box-shadow: 0px 0px 2px black;
                }
            }
        }
    }
    input {
        padding: 0.5rem 1rem;
        border-radius: 10px;
        border: none;
        font-size: 1rem;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-search' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' /%3E%3Cpath d='M21 21l-6 -6' /%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: left 0;
        background-size: 2rem;
        background-color: inherit;
        text-indent: 1rem;
        width: 0.5rem;
        transition: 0.5s;
        &:not(:focus):hover {
            cursor: pointer;
        }
        &:focus {
            outline: 1px solid darkgray;
            background-color: inherit;
            color: white;
            width: 10rem;
        }
    }
`;

export const Header = styled.header`
    height: 90vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
        ${(props) => `url(https://image.tmdb.org/t/p/original/${props.url})`};
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-end;
    section {
        ${container};
        line-height: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        div {
            display: flex;
            gap: 1rem;
        }
        h2 {
            font-size: 2.5rem;
        }
        .stars {
            font-size: 2rem;
        }
        img {
            height: 2rem;
        }
        color: white;
        margin-bottom: 5%;
        p:last-of-type {
            max-width: 800px;
            font-weight: lighter;
        }
    }
    .links-container {
        width: 100%;
        max-width: 600px;
        text-align: center;
        a {
            color: white;
            padding: 1rem 0rem;
            border-radius: 60px;
            &:hover {
                opacity: 0.8;
            }
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            width: 50%;
        }
        a:first-of-type {
            background-color: #d53a00;
        }
        a:last-of-type {
            background-color: #717171;
        }
    }
`;

export const HeaderHolder = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
`;

export const Main = styled.main`
    background-color: black;
    padding: 2rem 0;
    color: white;
    h2 {
        ${container};
        margin-bottom: 2rem;
        font-size: 2rem;
    }
    .container {
        ${container};
    }
    a {
        color: white;
        max-width: 300px;
    }
    .card {
        ${container};
        figure {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            figcaption {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
        }
        img {
            width: 100%;
        }
    }
`;

export const TrendingStyle = styled.section`
    background-color: inherit;
    a {
        color: white;
        overflow: hidden;
        &:hover {
            img {
                transform: scale(1.1);
            }
        }
    }
    .overflow {
        overflow: hidden;
    }
    section {
        display: grid;
        row-gap: 2rem;
        column-gap: 1.5rem;
        figure {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        img {
            object-fit: contain;
            width: 100%;
            height: auto;
            overflow: hidden;
            transition: 0.5s;
        }
        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (min-width: 1200px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media screen and (min-width: 1400px) {
            grid-template-columns: repeat(5, 1fr);
        }
    }
    ul {
        margin: 0 auto;
        margin-top: 2rem;
        width: fit-content;
        display: flex;
        gap: 1rem;
        li {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid white;
            width: 3rem;
            height: 3rem;
            a {
                width: 100%;
                padding: 1rem 0;
                text-align: center;
                color: inherit;
                &:hover:not(.break) {
                    cursor: pointer;
                    opacity: 0.6;
                }
            }
            &.selected {
                color: black;
                background-color: white;
            }
            &.disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }
    }
`;

export const HomeHeader = styled.header`
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),
        ${(props) =>
            `url(https://image.tmdb.org/t/p/original/${props.background_img})`};
    height: 90vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    color: white;
    h1 {
        font-size: 4rem;
    }
    h2 {
        font-size: 2rem;
    }
`;

export const HomeMain = styled.main`
    .container {
        ${container}
    }
    h2 {
        font-size: 2rem;
    }
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .card {
        ${container};
        figure {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            figcaption {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                p {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
        img {
            width: 100%;
        }
    }
    background-color: black;
    color: white;
`;

export const MediaContainer = styled.main`
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        ${(props) =>
            `url(https://image.tmdb.org/t/p/original/${props.background_img})`};
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    align-items: center;
    color: white;
    padding-top: 1rem;
    h1 {
        font-size: 3rem;
        margin: 2rem 0;
    }
    .movie-container {
        ${container};
    }
    .poster-text {
        display: flex;
        gap: 4rem;
        align-content: center;
        line-height: 2rem;
        img {
            width: 100%;
            height: 100%;
            max-width: 400px;
            border-radius: 10px;
            box-shadow: 0px 0px 5px black;
        }
        & > div {
            display: flex;
            flex-direction: column;
            height: 100%;
            gap: 2rem;
        }
        h3 {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
    iframe {
        aspect-ratio: 16/9;
        width: 100%;
        height: auto;
    }
`;

export const ErrorStyles = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: black;
    color: white;
`;
