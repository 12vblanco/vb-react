import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pagination = (props) => {
  return (
    <Div>
      <Previous>
        <Link to={props.previous}>
          <PrevIcon />
          Previous
        </Link>
      </Previous>
      <Next>
        <Link to={props.next}>
          Next
          <NextIcon />
        </Link>
      </Next>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  @media (max-width: 646px) {
    margin: 4rem 0;
  }
`;

const Previous = styled.div`
  display: flex;
  width: auto;
  font-size: 2.2rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 1.8rem;

  @media (max-width: 746px) {
    font-size: 17px;
  }
  &:hover a {
    color: #a52a2a;
  }
`;
const Next = styled.div`
  display: flex;
  width: auto;
  font-size: 2.2rem;
  margin-left: 1.8rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 746px) {
    font-size: 17px;
  }

  &:hover {
    color: #a52a2a;
  }
`;

const PrevIcon = styled(GrPrevious)`
  border: 0.2rem solid rgba(54, 54, 54, 0.2);
  border-radius: 0.6rem;
  margin-right: 1.4rem;
  margin-bottom: -3px;
  &:hover {
    color: #a52a2a;
  }
`;
const NextIcon = styled(GrNext)`
  border: 0.2rem solid rgba(54, 54, 54, 0.2);
  border-radius: 0.6rem;
  margin-left: 1.4rem;
  margin-bottom: -3px;
`;

export default Pagination;
