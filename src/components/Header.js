import styled from "styled-components";

export default function Header() {
    return <H1>Poké Mart Online Shop</H1>
}

const H1 = styled.h1`
    color: #EEDF24;
    text-align: center;
    -webkit-text-stroke: 3px #16056D;
    font-size: 3rem;
    font-family: sans-serif;
    background: linear-gradient(to right bottom, #2A34AC, #99A6F3);
    border-radius: 5px;
    padding: 10px;
`;

