import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";

const FullProductWrapper = styled.div`
  display: grid;
  grid-row-gap: 25px;
  justify-content: center;
  text-align: center;

  img {
    height: 500px;
  }

  span {
    font-size: 1.375rem;
    line-height: 1.875rem;
  }

  p {
    color: #757575;
  }
`;

const FullProduct: React.FC = () => {
  const [product, setProduct] = React.useState<{
    imageUrl: string;
    title: string;
    description: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get(
          "https://63c83bede52516043f4e9cbf.mockapi.io/items/" + id
        );
        setProduct(data);
      } catch (error) {
        alert("Ошибка при получении вещи :(");
        navigate("/");
      }
    }

    fetchProducts();
  }, [id, navigate]);

  if (!product) {
    return <>loading...</>;
  }

  return (
    <FullProductWrapper>
      <img src={product.imageUrl} alt="ProductImage" />
      <div className="desc">
        <span>{product.title}</span>
        <p>{product.description}</p>
        <h4>Номер: {Math.random()}</h4>
        <h4>{product.price} грн.</h4>
      </div>
    </FullProductWrapper>
  );
};

export default FullProduct;
