import React from "react";
import { FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <Div>
          <NavLink to="/contact">
            Victor Blanco 2019 - {new Date().getFullYear()} &copy;
            <span>&nbsp;&nbsp;</span>
          </NavLink>{" "}
          <NavLink to="/terms"> Terms & conditions</NavLink> <span>&nbsp;</span>
          <FaReact style={{ fontSize: "1.6rem", marginBottom: "-3px" }} />{" "}
        </Div>
      </FooterDiv>
    </>
  );
};

const FooterDiv = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #f4f7f8;
  color: white;
  text-align: center;
  z-index: 234;
`;
const Div = styled.div`
  padding: 1rem;
  background: #f4f7f8;
  font-size: 1.3rem;
  color: black;
  font-weight: 500;
  &:hover {
    color: #a52a2a;
  }
`;

export default Footer;
