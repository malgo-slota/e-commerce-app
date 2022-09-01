import React from 'react';
import styled from 'styled-components';

function BurgerMenu ( { isMenuOpen }) {

    isMenuOpen ? document.body.style.overflow="hidden" : document.body.style.overflow="visible";

    return (
       <Menu isMenuOpen={isMenuOpen}>
           <a href="/products">
               All products
           </a>
            <a href="/products/category/women's%20clothing">
                Women's clothing
            </a>
            <a href="/products/category/men's%20clothing">
                Men's clothing
            </a>
            <a href="/products/category/jewelery">
                Jewelery
            </a>
            <a href="/products/category/electronics">
                Electronics
            </a>
        </Menu>
    );
}

const Menu = styled.div`
    position: absolute;
    z-index: 1;
    top: 3rem;
    right: 0;
    bottom: 0;
    height: 100vh;
    min-width: 100vw;
    background-color: rgb(242,242,242);
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    transition: transform 300ms;
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)')};
  a {
      position: relative;
      text-decoration: none;
      font-size: 1.4rem; 
      line-height: 3rem;
        ::before {
            content: "";
            position: absolute;
            right: 0rem;
            height: 0%;
            border-right: 5px solid rgb(160, 191, 48);
            transition: 0.2s linear;
        }
        ::after {
            content: "";
            position: absolute;
            left: 0rem;
            height: 0%;
            border-left: 5px solid rgb(160, 191, 48);
            transition: 0.2s linear;
        }
        :hover {
        font-size: 1.6rem;
            ::before {
                right: 2rem;
                height: 100%;
            }
            ::after {
                left: 2rem;
                height: 100%;
            }
        }
    }

`;
export default BurgerMenu;