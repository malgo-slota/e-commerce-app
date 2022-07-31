import React from "react";
import styled from 'styled-components';
import { BsPerson, BsCart } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

function Header () {
    return (
        <Nav>
            <Logo to="/">
                Store
            </Logo>   
            <NavLinks>
                <button>
                    <GiHamburgerMenu />
                </button>
                <NavLink to={"/search"}>
                    <BsSearch />
                </NavLink>
                <BsCart />
                <NavLink to={"/login"}>
                    <BsPerson />
                </NavLink>
                
            </NavLinks> 
        </Nav>
    );
}; 

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.4rem;
`;

const Logo = styled(NavLink)`
    font-family: 'Abril Fatface', cursive;
    font-size: 2rem;
    color: rgb(160, 191, 48);
    letter-spacing: 0.1rem;
    text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  button {
      border: none;
      background: none;
  }
  a {
      color: rgb(38, 38, 38);
  }
  svg {
      font-size: 1.2rem;
      margin: 0.4rem ;
  }
`;

export default Header;