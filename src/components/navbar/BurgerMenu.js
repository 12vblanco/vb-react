import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import Cart from "../Cart";
import NavMenu from "./NavMenu";

const BurgerMenu = ({ handleShow, handleClose }) => {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick(!click);
    handleClose();
  };

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <>
      <BurgerDiv>
        <MenuIcon>
          {click && <IconClose onClick={clickHandler} />}
          {!click && (
            <>
              <GiHamburgerMenu onClick={clickHandler} />
              <Cart handleShow={handleShow} />
            </>
          )}
        </MenuIcon>
      </BurgerDiv>
      <BurgerToggled
        style={
          click
            ? { width: "100%", height: "100vh", position: "fixed" }
            : {
                width: "0%",
                height: "0vh",
                display: "none",
              }
        }
      >
        <NavMenu closeMenu={closeMenu} handleShow={handleShow} />
      </BurgerToggled>
    </>
  );
};

const BurgerDiv = styled.div`
  margin-top: 2.2rem;
  flex: 1;
  margin-right: 4%;
  /* /* @media (max-width: 685px) {
    flex: initial;
    margin-top: 2rem;
  } */
  @media (max-width: 640) {
    flex: initial;
    margin: 0;
  }
`;

const MenuIcon = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
  font-size: 50px;
  cursor: pointer;
  @media (max-width: 646px) {
    font-size: 8rem;
  }
`;

const BurgerToggled = styled.div`
  position: absolute;
  text-align: center;
  padding-top: 30%;
  top: 140px;
  background: #f4f7f8;
  /* z-index: 12; */
`;

const IconClose = styled(MdClose)`
  margin-left: 16px;
  margin-top: 4px;
  font-size: 52px;
`;

export default BurgerMenu;
