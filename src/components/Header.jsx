import React, { useContext, useState } from "react";
import styled from 'styled-components';
import { BsPerson, BsCart } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import CartContext from '../CartContext.js';
import BurgerMenu from "./BurgerMenu.jsx";
import SearchBar from "./SearchBar.jsx";
import SearchContext from "../SearchContext";

function Header () {
    const { cartItems } = useContext(CartContext);
    const { searchInput, setSearchInput, isSearchBarOpen, toggleSearchBar} = useContext(SearchContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    return (
        <Nav>
            <Logo aria-label="go to homepage" to="/" onClick={() => isMenuOpen ? setIsMenuOpen(false) : ''}>
                Store
            </Logo>   
            <NavLinks>
                <BurgerButton aria-label="category menu" onClick={() => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)}>
                    {isMenuOpen ? <GrClose /> : <GiHamburgerMenu />}
                </BurgerButton>
                <BurgerMenu isMenuOpen={isMenuOpen}/>
                <button aria-label="search" onClick={toggleSearchBar}>
                    <BsSearch />
                </button>
                <SearchBar isSearchBarOpen={isSearchBarOpen} 
                            input={searchInput} 
                            setInput={setSearchInput}
                            />
                <ShoppingCart aria-label="shopping cart" to={"/cart"} onClick={() => isMenuOpen ? setIsMenuOpen(false) : ''}>
                    <BsCart />
                    <div>{cartItems.length}</div>
                </ShoppingCart>
                <NavLink aria-label="log in" to={"/login"} onClick={() => isMenuOpen ? setIsMenuOpen(false) : ''}>
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
    color: rgb(73, 84, 33);
    letter-spacing: 0.1rem;
    text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 55%;
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
      :hover {
        transform: scale(1.2);
      }
  }
   @media (min-width: 768px){
    justify-content: flex-end;
    width: 100%;
    gap: 2rem;
   }
`;

const BurgerButton = styled.button`
       @media (min-width: 768px){
         display: none;
       }     
`;

const ShoppingCart = styled(NavLink)`
        position: relative;
    div {
          background: rgb(73, 84, 33);
          color: rgb(242, 242, 242);
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