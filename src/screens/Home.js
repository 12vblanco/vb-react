import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import StyledContainer from "../components/StyledContainer";
import Product from "../products/Product";
import { products } from "../products/Products";

const Home = (handleShow) => {
  return (
    <MainContainer>
      <StyledContainer>
        {products.map((product, i) => {
          return (
            <ProductCard key={i}>
              <Product product={product} handleShow={handleShow} />
            </ProductCard>
          );
        })}
      </StyledContainer>
      <Footer />
    </MainContainer>
  );
};

const ProductCard = styled.div`
  margin: 6px 10px;
`;

export default Home;
