import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Cart({ image, price, name, onRemoveItem }) {

  // const [image, setImage] = useState("");
  // const [price, setPrice] = useState();

  // useEffect(() => {
  //   fetch(details)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setImage(data.sprites.default);
  //       setPrice(data.cost);
  //     })
  //     .catch((error) => console.error(error));
  // }, [details]);

  return (
    <Card>
      <li>{name}<br /><Picture alt="" src={image} /><Price>{price} ¥</Price></li>
      <button onClick={() => onRemoveItem(name)}>Remove Item</button>
    </Card>
  );
}

const Card = styled.article`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: sans-serif;
  font-size: 28px;
  height: 200px;
  width: 200px;
  border: solid 10px #3A3A3A;
  border-radius: 5px;
  background: #BCBB6D;
  color: white;
  padding: 30px;
  gap: 20px;
`;

const Picture = styled.img`
  width: 100px;
`;

const Price = styled.p`
  margin: 0;
`;