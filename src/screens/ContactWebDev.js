import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Form2 from "../components/Form2";
import MainContainer from "../components/MainContainer";

const Contact = () => {
  return (
    <MainContainer>
      <Div>
        <Form2 />
        <Footer />
      </Div>
    </MainContainer>
  );
};

const Div = styled.div`
  width: 100%;
  height: auto;
  /* margin-top: 110px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 790px) {
    margin-top: 90px;
  }
`;

export default Contact;
