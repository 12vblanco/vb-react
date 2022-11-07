import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Cart from "../Cart";

const NavMenu = ({ handleShow, closeMenu }) => {
  return (
    <>
      <StyledLink>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
      </StyledLink>
      <StyledLink>
        <NavLink to="/bio" onClick={closeMenu}>
          Bio
        </NavLink>
      </StyledLink>

      <StyledLink>
        <a
          href="https://www.instagram.com/rigodoner/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
      </StyledLink>

      <StyledLink>
        <NavLink to="/contact" onClick={closeMenu}>
          <Contact />
        </NavLink>
      </StyledLink>

      <StyledLink style={{ marginLeft: "18px", cursor: "pointer" }}>
        <Cart handleShow={handleShow} onClick={handleShow} />
      </StyledLink>
    </>
  );
};

export const StyledLink = styled.div`
  list-style: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  margin: 20px;
  font-weight: 400;
  &:hover,
  .active {
    color: #a52a2a;
  }

  /* @media (max-width: 1800px) {
    font-size: 2.4rem;
    margin: 2rem 2.6rem;
  } */
`;

const Instagram = styled(GrInstagram)`
  font-size: 40px;
  margin-top: 16px;
  /* @media (max-width: 1800px) {
    font-size: 3.2rem;
    margin-top: 1rem;
  } */
`;

const Contact = styled(FaRegEnvelope)`
  font-size: 40px;
  margin-top: 16px;
  /* @media (max-width: 1800px) {
    font-size: 3.7rem;
    margin-top: 1.2rem;
  } */
`;

export default NavMenu;
