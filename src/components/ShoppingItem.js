import { useEffect, useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

export default function ShoppingItem({ details, name, onAddItem }) {

  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const item = {
    name: name, id: nanoid(),
  };

  useEffect(() => {
    fetch(details)
      .then((response) => response.json())
      .then((data) => {
        setImage(data.sprites.default);
        setPrice(data.cost);
      })
      .catch((error) => console.error(error));
  }, [details]);

  return (
    <Card>
      <li>{name}<br /><Picture alt="" src={image} /><Price>{price} ¥</Price></li>
      <button onClick={() => onAddItem(item)}>Add Item</button>
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
  border: solid 10px #BCBB6D;
  border-radius: 5px;
  background: #3A3A3A;
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