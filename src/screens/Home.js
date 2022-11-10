import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
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

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 1040px) {
    padding-top: 100px;
  }
`;

export default Home;
