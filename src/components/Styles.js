import styled from "styled-components";

// equivalente a um mixin no sass. equivale à classe container do css
const container = `
  margin: 0 auto;
  width: 100%;
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
`

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  color: white;
  backdrop-filter: blur(30px) brightness(0.8);
  div.nav-container {
    ${container};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 0;
    a {
      color: white;
    }
    & > div {
      display: flex;
      align-items: center;
      gap: 2rem;
      a {
        padding: .5rem 1rem;
        border-radius: 10px;
        &.active {
          background-color: darkgray;
          box-shadow: 0px 0px 2px black;
        }
      }
    }
  }
  input {
    padding: .5rem 1rem;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-search' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' /%3E%3Cpath d='M21 21l-6 -6' /%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: left 0;
    background-size: 2rem;
    background-color: inherit;
    text-indent: 1rem;
    width: .5rem;
    transition: .5s;
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
`