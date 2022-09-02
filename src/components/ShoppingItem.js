import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ShoppingItem() {
  const apiURL = "https://pokeapi.co/api/v2/item/";

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.results);
      })
      .catch((error) => console.error(error));
  }, [apiURL]);

  return (
    <CardContainer>
      {items.map((item) => {
        return (
          <Card>
            <li key={item.name}>{item.name}</li>
          </Card>
        );
      })}
    </CardContainer>
  );
}
const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Card = styled.article`
  list-style: none;
  text-align: center;
  font-family: sans-serif;
  background: green;
  font-size: 20px;
  height: 200px;
  width: 200px;
  border: solid 2px;
  border-radius: 5px;
  padding: 10px;
`;
