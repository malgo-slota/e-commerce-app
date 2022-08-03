import React, { useContext, useEffect } from "react";
import styled from 'styled-components';
import { BsPerson, BsCart } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import CartContext from '../CartContext.js';

function Header () {
    const { cartItems } = useContext(CartContext);
   
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
                <ShoppingCart to={"/cart"}>
                    <BsCart />
                    <div>{cartItems.length}</div>
                </ShoppingCart>
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
      font-size: 1.4rem;
      margin: 0.4rem ;
  }
`;

const ShoppingCart = styled(NavLink)`
        position: relative;
    div {
          background: rgb(160, 191, 48);
          border-radius: 20px;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          right: 0;
          transform: translate(20%, 0%);
          width: 1.3rem;
          height: 1.3rem;
    }
`;

export default Header;