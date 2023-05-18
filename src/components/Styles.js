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
    input[type="text"] {
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
    form {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 2rem;
        overflow: hidden;
        padding-left: 0.2rem;
        transition: 0.5s;
        &.active {
            width: 20rem;
        }
    }

    input[type="submit"] {
        font-size: 1rem;
        background-color: inherit;
        color: white;
        border: 1px solid white;
        padding: 0.5rem;
        border-radius: 10px;
        &:hover {
            cursor: pointer;
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
        font-weight: lighter;
        div {
            display: flex;
            gap: 1rem;
        }
        h2 {
            font-size: 2.5rem;
            font-weight: bold;
        }
        .stars {
            font-size: 2rem;
            font-weight: regular;
        }
        img {
            height: 2rem;
        }
        color: white;
        margin-bottom: 5%;
        p:last-of-type {
            max-width: 800px;
            font-weight: light;
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
            font-weight: bold;
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
        a {
            background-color: #717171;
        }
        a:last-of-type {
            background-color: #01111e;
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
        font-weight: bold;
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
                p:first-of-type {
                    font-weight: bold;
                }
            }
        }
        img {
            width: 100%;
        }
    }
`;

export const TrendingStyle = styled.section`
    background-color: inherit;
    margin-top: 2rem;
    .button-container {
        display: flex;
        align-items: center;
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none; // esconde a barra de scroll
        }
        gap: 0.5rem;
        button {
            min-width: 10rem;
            background-color: black;
            color: white;
            border: 1px solid white;
            padding: 0.5rem;
            border-radius: 10px;
            font-size: 1rem;
            transition: .2s;
            &:hover {
                cursor: pointer;
                background-color: rgb(67, 67, 67);
            }
            &.clicked{
                background-color: white;
                color: black;
            }
        }
        margin-bottom: 2rem;
    }
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
            p:first-of-type {
                font-weight: bold;
            }
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
        font-weight: bold;
    }
    h2 {
        font-size: 2rem;
        font-weight: bold;
    }
`;

export const HomeMain = styled.main`
    .container {
        ${container}
    }
    h2 {
        font-size: 2rem;
        font-weight: bold;
    }
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 4rem;
    a {
        color: white;
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
                p {
                    display: flex;
                    justify-content: space-between;
                    &:first-of-type {
                        font-weight: bold;
                    }
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
        margin: 3rem 0;
        font-weight: bold;
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
        @media screen and (max-width: 992px) {
            flex-direction: column;
            img {
                margin: 0 auto;
            }
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

export const SearchResults = styled.main`
    display: grid;
    min-height: 100vh;
    gap: 2rem;
    & > * {
        ${container};
    }
    padding: 3.5rem 0;
    h1 {
        font-size: 3rem;
        font-weight: bold;
    }
    h2 {
        font-size: 2.5rem;
        font-weight: bold;
    }
    h3 {
        font-size: 2rem;
    }
    section {
        display: grid;
        gap: 1rem;
    }
    background-color: rgb(18, 3, 42);
    color: white;
    figure {
        &:hover {
            cursor: pointer;
            background-color: rgb(37, 9, 82);
        }
        padding: 1rem;
        display: flex;
        border-radius: 10px;
        justify-content: space-between;
        gap: 3rem;
        img {
            border-radius: 10px;
            height: 100%;
            max-height: 400px;
            margin: auto 0;
        }
        figcaption {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    }
`;

export const FooterStyle = styled.footer`
    color: white;
    background-color: rgb(0, 2, 23);
    padding: 2rem 0;
    .container {
        ${container};
        display: grid;
        align-items: center;
        gap: 3rem;
    }
    h3 {
        font-size: 1.5rem;
        font-weight: bold;
    }
    li {
        margin: 1rem 0;
        width: 100%;
        text-align: center;
    }
    a {
        color: white;
        width: 100%;
        text-align: center;
    }
`;
