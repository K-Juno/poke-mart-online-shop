import Header from "./components/Header";
import ShoppingItem from "./components/ShoppingItem";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Cart from "./components/Cart";

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

  const [shoppingCart, setShoppingCart] = useState([]);

  // const [shoppingCart, setShoppingCart] = useState(loadFromLocal() || "");
  // useEffect(() => {
  //   localStorage.setItem('_items', JSON.stringify(shoppingCart));
  // }, [shoppingCart]);

  // function loadFromLocal() {
  //   try {
  //     return JSON.parse(localStorage.getItem('_items'));
  //   } catch (error) {
  //     console.log("Das war mal wieder ein Schuss in den Ooooooofeeeeeeen!");
  //   }
  // }

  function addToCart(newItem) {
    setShoppingCart([newItem, ...shoppingCart]);
  }

  return (
    <div>
      <Header />
      <h2>Cart</h2>
      <CartContainer>
        {shoppingCart.map((newItem) => {
          return (
            <Cart key={newItem.name} item={newItem} />
          );
        })}
      </CartContainer>
      <h2>Search Items</h2>
      <CardContainer>
        {items.map((item) => {
          return (
            <ShoppingItem key={item.name} name={item.name} details={item.url} onAddItem={addToCart} />
          );
        })}
      </CardContainer>
    </div>
  );
};

export default App;

const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CartContainer = styled(CardContainer)``;