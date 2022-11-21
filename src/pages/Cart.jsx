import React, { useContext, useState } from "react";
import { NavLink } from 'react-router-dom';
import CartContext from '../CartContext';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import QuantityBtns from "../components/QuantityBtns";


function Cart () {

    const { cartItems, removeFromCart} = useContext(CartContext);
    // const [ prices, setPrices ] = useState([]);
    const cartTotal = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);


    const prices = [];

    return (
        <Wrapper>
                <ItemsContainer>
                    {cartItems.map((item)=> {
                    return (
                        <Item key={item.id}>
                            <img src={item.image} alt={item.title} /> 
                            <p>{item.title}</p>
                            <button aria-label="remove from cart" onClick={() => removeFromCart(item.id)}>
                                <AiOutlineClose/>
                            </button>
                            <QuantityBtns price={item.price}/>
                            <Price>{item.price}$</Price>
                        </Item>    
                    ); 
                    })}
                </ItemsContainer>
                <CartTotal>
                        <p>Total</p>
                        <p>{cartTotal}$</p> 
                </CartTotal>
                <Proceed to={"/shipping"}>Proceed to checkout</Proceed>
        </Wrapper>
    );  
}
const Wrapper = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        margin: 3rem 6rem;
    }
`;

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Item = styled.div`
    padding-bottom: 2rem;
    border-bottom: 1px solid rgb(193,192,192);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.2rem;
    align-items: center;
    margin: 1rem;
    min-height: 12rem;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 3fr 1fr 2fr 1fr;
    }
    img {
      width: 100%;
    } 
    button {
        background: none;
        border: none;
        svg{
            font-size: 1.6rem;
        }
    }
`;

const Price = styled.p`
  font-size: 1.2rem;
  line-height: 1.2rem;
  padding: 0.6rem 0; 
  justify-self: center;
    @media (min-width: 768px) {
        grid-row-start: 1;
        grid-column-start: 4;
    }
`;

const CartTotal = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 0 1rem;
        padding: 3rem 2rem;
        box-shadow: 2px 0px 12px 2px rgba(20,22,38, 0.12);
`;

const Proceed = styled(NavLink)`
        text-decoration: none;
        text-transform: uppercase;
        margin: 1rem;
        text-align: center;
        padding: 1rem;
        background: rgb(73, 84, 33);
        color: rgb(242, 242,242);
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        transition: 0.4s linear;
        border: 1px solid rgb(73, 84, 33);
        :hover {
        background: none;
        color: rgb(73, 84, 33);
      }
`;

export default Cart;