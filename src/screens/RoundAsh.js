import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import Pagination from "../components/Pagination";
import ShopWidget from "../components/ShopWidget";
import { products } from "../products/Products";

const {
  name,
  id,
  format,
  price,
  description,
  description2,
  img,
  previous,
  next,
} = products[7];

const RoundAsh = () => {
  const [isMobile, setMobile] = useState(window.innerWidth < 760);
  const updateNavMenu = () => {
    setMobile(window.innerWidth < 760);
  };
  const [isDesktop, setDesktop] = useState(window.innerWidth < 1441);
  const updateDesktop = () => {
    setDesktop(window.innerWidth < 1441);
  };
  useEffect(() => {
    window.addEventListener("resize", updateNavMenu);
    return () => window.removeEventListener("resize", updateNavMenu);
  });
  useEffect(() => {
    window.addEventListener("resize", updateDesktop);
    return () => window.removeEventListener("resize", updateDesktop);
  });

  return (
    <>
      <MainContainer style={isMobile && { display: "none" }}>
        <DivContainer>
          <ShopBody>
            <ColText>
              {isDesktop ? (
                <RowHeader>
                  <Name>{name}</Name>
                  <Format>
                    {format}
                    <span style={{ color: "#a52a2a" }}> £{price}</span>
                  </Format>
                  <Hr />
                </RowHeader>
              ) : (
                <RowHeader>
                  <Name>{name}</Name>
                  <Format>{format}</Format>
                  <Price>£{price}</Price> <Hr />
                </RowHeader>
              )}
              <Description>{description2}</Description>
              {isMobile && (
                <ColImg>
                  <Img src={img} />
                </ColImg>
              )}
              <ShopWidget id={id} price={price} />{" "}
              {isMobile && <Description>{description}</Description>}
              <Pagination previous={previous} next={next} />
            </ColText>
            {!isMobile && (
              <ColImg>
                <Img src={img} />
              </ColImg>
            )}
          </ShopBody>
        </DivContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

const DivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ShopBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  @media (max-width: 1040px) {
    width: auto;
  }
`;
const ColText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 55rem;
  height: 65rem;
  padding: 1rem 2rem;
  margin: 1rem;
  @media (max-width: 1440px) {
    min-height: 635px;
    width: 59rem;
  }
  @media (max-width: 1040px) {
    width: 46rem;
    min-height: 635px;
    margin-top: 120px;
    margin-bottom: 30px;
    padding: 1rem 0;
  }
  @media (max-width: 753px) {
    width: auto;
    height: auto;
    margin-top: 120px;
    margin-bottom: 30px;
    padding: 1rem 0;
  }
  @media (max-width: 500px) {
    width: 340px;
  }
`;
const ColImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 55rem;
  height: auto;
  margin: 1rem;
  @media (max-width: 760px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 340px;
    margin-bottom: 3rem;
  }
`;
const RowHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 55rem;
  height: 19%;
`;
const Description = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  letter-spacing: -0.6px;
  font-weight: 300;
  white-space: pre-line;
  text-align: justify;
  width: 48rem;
  height: 100%;
  padding: 0 3rem;
  @media (max-width: 1440px) {
    width: 42rem;
    font-size: 17px;
    width: 90%;
    margin-bottom: 2rem;
  }
  @media (max-width: 1040px) {
    font-size: 15px;
    width: auto;
  }
  @media (max-width: 759px) {
    width: 56rem;
    margin-bottom: 2rem;
    padding: 2rem 0 0 0;
  }
  @media (max-width: 500px) {
    width: 340px;
  }
`;

const Name = styled.h1`
  font-size: 29px;
  margin-bottom: 0.2rem;
  font-style: italic;
  @media (max-width: 1040px) {
    font-size: 22px;
  }
`;
const Format = styled.h2`
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 1040px) {
    font-size: 14px;
  }
`;
const Hr = styled.hr`
  width: 70px;
  border-top: 2px solid #a52a2a;
  @media (min-width: 1400px) {
    margin: 0 18px;
  }
`;
const Price = styled.h3`
  font-size: 16px;
  padding: 6px 42px 10px 32px;
  font-weight: 500;
  color: #a52a2a;
  @media (max-width: 1040px) {
    font-size: 14px;
  }
`;

const Img = styled.img`
  width: 48rem;
  @media (max-width: 1440px) {
    width: 42rem;
  }
  @media (max-width: 1040px) {
    width: 32rem;
  }
  @media (max-width: 759px) {
    width: 340px;
  }
`;

export default RoundAsh;
