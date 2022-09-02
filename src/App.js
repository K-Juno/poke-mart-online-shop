import Header from "./components/Header";
import ShoppingItem from "./components/ShoppingItem";
import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {

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
    <div>
      <Header />
      <CardContainer>
        {items.map((item) => {
          return (
            <ShoppingItem key={item.name} name={item.name} details={item.url} />
          );
        })}
      </CardContainer>

    </div>
  );
}

export default App;

const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;