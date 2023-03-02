import React from "react";
import styled from "styled-components";

const Form = (props) => {
  return (
    <Container>
      <H1>
        Hello there!
        <br />
        <br />
        We have some exciting news to share with you! <br />
        Our shop will be temporarily closed from April to September. However,
        fret not! You can still{" "}
        <span>
          place orders before April 1st or pre-order for when we re-open in
          September.
        </span>
        <br />
        If you're eager to get your hands on some of our amazing products,
        simply fill out our form and we'll be sure to get back to you. <br />
        We apologize for any inconvenience this may cause, but we promise it'll
        be worth the wait! We can't wait to see you in September!
      </H1>
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
  /* margin-top: 4%; */
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
