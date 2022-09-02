import styled from "styled-components";

export default function Header() {
    return (
        <Head>
            <H1>Poké Mart Online Shop</H1>
            <img alt="" src="https://tcg.pokemon.com/assets/img/home/top-deck/pikachu.jpg" />
        </Head>
    )
};

const Head = styled.header`
    display: grid;
    justify-items: center;
`;

const H1 = styled.h1`
    color: white;
    width: 696px;
    text-align: center;
    -webkit-text-stroke: 3px #BCBB6D;
    font-size: 3.8rem;
    font-family: sans-serif;
    background: linear-gradient(to bottom right, #3A3A3A, #232323);
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0;
`;