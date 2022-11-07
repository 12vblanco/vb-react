import React from "react";
import styled from "styled-components";

const ColumnDiv = (props) => {
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.6rem;
`;

export default ColumnDiv;
