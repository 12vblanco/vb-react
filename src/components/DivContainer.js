import React from "react";
import styled from "styled-components";

const DivContainer = (props) => {
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;

export default DivContainer;
