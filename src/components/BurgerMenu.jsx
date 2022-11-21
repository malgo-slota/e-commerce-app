import React from 'react';
import styled from 'styled-components';

function BurgerMenu ( { isMenuOpen }) {

    isMenuOpen ? document.body.style.overflow="hidden" : document.body.style.overflow="visible";

    return (
       <Menu isMenuOpen={isMenuOpen}>
           <a aria-label="all products" href="/products">
               ALL
           </a>
            <a aria-label="women's category" href="/products/category/women's%20clothing">
                WOMEN'S
            </a>
            <a aria-label="men's category" href="/products/category/men's%20clothing">
                MEN'S 
            </a>
            <a aria-label="jewelery category" href="/products/category/jewelery">
                JEWELERY
            </a>
            <a aria-label="electronics category" href="/products/category/electronics">
                ELECTRONIC'S
            </a>
        </Menu>
    );
}

const Menu = styled.div`
    position: absolute;
    z-index: 2;
    top: 3rem;
    right: 0;
    bottom: 0;
    height: 100vh;
    min-width: 100vw;
    background-color: rgb(242,242,242);
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 3rem;
    transition: transform .5s ease-in;
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)')};
    a {
      position: relative;
      text-decoration: none;
      font-size: 1.4rem; 
      line-height: 3rem;
      :nth-child(1) {
        margin-top: 6rem;
      }
       @media (min-width: 768px) {
                padding: 0 0.5rem;
                :nth-child(1) {
                margin-top: 0rem;
                }
        }
        ::before {
            content: '';
            background-color: rgb(73, 84, 33);
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            bottom: 0;
            width: 30%;
            height: 2px;
            z-index: -1;
            transition: all .5s ease-in-out;
            @media (min-width: 768px) {
                width: 100%;
                background-color: rgb(242, 242, 242);
            }
        }
        :hover {
            color: rgb(242, 242, 242);
            transition: all .5s ease-in-out;
            @media (min-width: 768px) {
                color: rgb(38, 38, 38);
            }
        }
        :hover::before {
                bottom: 0;
                height: 100%;
                font-size: 1.6rem;
                background-color: rgb(73, 84, 33);
                @media (min-width: 768px) {
                    background-color: rgb(242, 242, 242);
                }
        }
    }
    
    @media (min-width: 768px){
        position: static;
        height: 100%;
        min-width: 0vw;
        top: 0;
        background: none;
        flex-direction: row;
        gap: 1rem;
        transform: translateX(0%);
        a {
            font-size: 1rem;
            :hover {
                font-size: 1rem;
            }
        }
    }
`;
export default BurgerMenu;