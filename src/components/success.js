import React from "react";
import styled from "styled-components";

const Form = (props) => {
  return (
    <Container>
      <FromContainer>
        <p>thanks</p>
      </FromContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FromContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 62.5rem;
  padding: 2rem 0.75rem 2rem 0.75rem;
  border-radius: 0.8rem;
  background: rgba(213, 221, 224, 0.4);
`;

const H1 = styled.h1`
  width: 62.5rem;
  font-size: 17px;
  padding-left: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;
  /* margin-top: -100px; */
  padding: 2rem;
  border-radius: 0.8rem;
  background: rgba(213, 221, 224, 0.4);

  span {
    font-weight: bold;
  }
`;

export default Form;
