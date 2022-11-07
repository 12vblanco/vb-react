import React from "react";
import styled from "styled-components";

const StyledContainer = (props) => {
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* max-width: 120rem; */
  /* padding-bottom: 3rem;
  padding-top: 4rem;
  margin-bottom: 2rem; */

  /* /* @media (max-width: 114rem) {
    padding-top: 1rem;
  } */
  @media (max-width: 900px) {
    padding-top: 0;
  }
`;

export default StyledContainer;
