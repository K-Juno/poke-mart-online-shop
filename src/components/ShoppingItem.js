import { useEffect, useState } from "react";

const [items, setItems] = useState([]);

export default function ShoppingItem() {
  const apiURL = 'https://pokeapi.co/api/v2/item/';

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.results)
      })
      .catch((error) => console.error(error));
  }, [apiURL]);
}