import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logoMain.png";
import Modal from "../Modal";
import BurgerMenu from "./BurgerMenu";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1140);
  const updateNavMenu = () => {
    setDesktop(window.innerWidth > 1140);
  };

  useEffect(() => {
    window.addEventListener("resize", updateNavMenu);
    return () => window.removeEventListener("resize", updateNavMenu);
  });

  return (
    <>
      <StyledDiv>
        <Link to="/">
          <LogoDiv>
            <Img src={logo} alt="victor blanco's logo" />
            <Name>Victor Blanco</Name>
          </LogoDiv>
        </Link>
        {isDesktop ? (
          <NavDiv>
            <NavUl>
              <NavMenu
                isDesktop={isDesktop}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
              />
            </NavUl>
          </NavDiv>
        ) : (
          <BurgerMenu handleShow={handleShow} handleClose={handleClose} />
        )}
      </StyledDiv>
      {show && <Modal handleClose={handleClose} />}
    </>
  );
};

const StyledDiv = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  background: #f4f7f8;
  display: flex;
  width: 100vw;
  height: 110px;
  max-width: 140rem;
  align-items: center;
  justify-content: space-evenly;
  z-index: 123;
  @media (max-width: 480px) {
    flex-direction: column;
    margin-left: 0;
    padding-top: 7rem;
    padding-bottom: 5rem;
    height: 22rem;
  }
`;
const LogoDiv = styled.div`
  display: flex;
  margin-left: 4.4rem;
  height: 9.2rem;
  width: auto;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 480px) {
    height: 9.2rem;
    margin: 0;
  }
`;
const NavDiv = styled.div`
  display: flex;
  height: 9.2rem;
  width: auto;
  align-items: center;
  justify-content: space-around;

  /* @media (max-width: 114rem) {
    display: none;
  } */
`;

const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
`;

const Img = styled.img`
  width: 8.8rem;
  height: 8.8rem;
  /* @media (max-width: 1800px) {
    width: 78px;
    height: 78px;
  }
  @media (max-width: 685px) {
    width: 55px;
    height: 55px;
  }
  @media (max-width: 61rem) {
    width: 4.6rem;
    height: 4.6rem;
  }
  @media (max-width: 33.2rem) {
    display: none;
  } */
`;

const Name = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 5.6rem;
  margin-left: 4rem;
  letter-spacing: -0.1rem;
  /* @media (max-width: 1800px) {
    font-size: 5.2rem;
    margin-left: 30px;
  }
  @media (max-width: 685px) {
    font-size: 4rem;
    margin-left: 1rem;
  }
  @media (max-width: 61rem) {
    font-size: 3.4rem;
    margin-left: .4rem;
  }
  @media (max-width: 287px) {
    font-size: 2.4rem;
  } */
`;

export default Navbar;
