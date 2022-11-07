import React from "react";
// import styled from "styled-components";
import Footer from "../components/Footer";
import Form from "../components/Form";
import MainContainer from "../components/MainContainer";
import StyledContainer from "../components/StyledContainer";

const Contact = () => {
  return (
    <MainContainer>
      <StyledContainer>
        <Form />
        <Footer />
      </StyledContainer>
    </MainContainer>
  );
};

export default Contact;
