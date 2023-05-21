import React from "react";
import styled from "styled-components";

function Success() {
  const handleBackHome = () => {
    window.location.href = "/home";
  };
  return (
    <Div>
      <H1>Thank you for submitting the form!</H1>
      <Text>We will get back to you soon.</Text>
      <ContactBtn onClick={handleBackHome}>Go Back</ContactBtn>{" "}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;

  /* @media (max-width: 860px) {
    height: fit-content;
  }
  @media (max-width: 816px) {
    flex-direction: column;
  } */
`;

const Text = styled.p`
  margin-bottom: 44px;
  font-size: 22px;
`;

const ContactBtn = styled.button`
  display: flex;
  background: white;
  border: 1px solid black;
  border-radius: 2px;
  font-weight: 600;
  font-size: 18px;
  color: black;
  width: 110px;
  height: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;
  border-radius: 8px;
`;

const H1 = styled.h1`
  font-size: 32px;
`;

export default Success;
