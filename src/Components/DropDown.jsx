import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { menuData } from "../Data/MenuData";
import { Button } from "./Button";

const DropDownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #a5917d;
  display: grid;
  align-items: center;
  justify-content: center;
  /* left: 0; */
  transition: 1s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 2.1rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const IconClose = styled(FaTimes)`
  color: #000;
`;
const DropDownWrapper = styled.div``;
const DropDowmMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const DeopDownLink = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  list-style: none;
  font-size: 1.5rem;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000;
  }
`;
const BtnWRap = styled.div`
  display: flex;

  justify-content: center;
`;

const DropDown = ({ isOpen, toggle }) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <IconClose></IconClose>
      </Icon>
      <DropDownWrapper>
        <DropDowmMenu>
          {menuData.map((item, index) => (
            <DeopDownLink to={item.link} key={index}>
              {item.title}
            </DeopDownLink>
          ))}
        </DropDowmMenu>
        <BtnWRap>
          <Button primary="true" round="true" big="true" to="/Contact">
            Contact Us
          </Button>
        </BtnWRap>
      </DropDownWrapper>
    </DropDownContainer>
  );
};

export default DropDown;
