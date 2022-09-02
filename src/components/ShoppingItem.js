import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ShoppingItem({details, name}) {

  const [image, setImage] = useState([]);
  const [price, setPrice] = useState([]);

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
            <li><img alt="" src={image}/>{name}<p>{price}</p></li>
          </Card>
        
  );
}



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
