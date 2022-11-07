import React from "react";
import styled from "styled-components";

const RowDiv = (props) => {
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default RowDiv;
