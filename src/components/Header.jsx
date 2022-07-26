import React from "react";
import styled from 'styled-components';
import {BsSearch, BsPerson, BsCart } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function Header () {
    return (
        <Nav>
            <Logo to="/">
                Store
            </Logo>   
            <NavLinks>
                <div>
                    <button>
                        <GiHamburgerMenu />
                    </button>
                </div>
                <div>
                    <a href='/'>
                        <BsSearch />
                    </a>
                    <a href='/'>
                        <BsCart />
                    </a>
                    <NavLink to={"/login"}>
                        <BsPerson />
                    </NavLink>
                </div>  
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
  align-self: flex-end;
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