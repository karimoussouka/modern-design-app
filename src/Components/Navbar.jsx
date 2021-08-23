import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../Data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLInk = css`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  font-style: italic;
  ${NavLInk}
`;
const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    color: white;
    &:hover {
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLInk}
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
