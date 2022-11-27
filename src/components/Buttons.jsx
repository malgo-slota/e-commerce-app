import React, { useContext } from "react";
import CartContext from "../CartContext";
import { Link } from 'react-router-dom';
import { MdAddShoppingCart, MdRemoveRedEye } from 'react-icons/md';
import styled from 'styled-components';

function Buttons ( { id, image, title, price }) {

    const { addToCart } = useContext(CartContext);

    return (
        <ButtonsWrapper>
            <DetailsLink aria-label="product details" to={`/product/${id}`}>
                <MdRemoveRedEye />
            </DetailsLink>
            <button aria-label="add to cart" onClick={() => addToCart(id,image,title,price)}>
                <MdAddShoppingCart />
            </button>
        </ButtonsWrapper>
    );
}

const ButtonsWrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    gap: 0.5rem;
    position: absolute;
    align-items: center;
    justify-content: center;
    opacity: 0;
    :hover {
            opacity: 1;
        }
    button {
        color: rgb(0, 0, 0);
        background: rgb(242, 242, 242);
        border-radius: 50%;
        border: none;
        height: 3.5rem;
        width: 3.5rem;
        transition: .1s linear;
        svg {
            font-size: 1.6rem;
        }  
        :hover{
            opacity: 1;
            transform: scale(1.1);
        }
    }
`;

const DetailsLink = styled(Link)`
    background: rgb(242, 242, 242);
    border-radius: 50%;
    border: none;
    height: 3.5rem;
    width: 3.5rem;
    transition: .1s linear;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        font-size: 1.6rem;
        color: rgb(0,0,0);
    }  
    :hover{
        opacity: 1;
        transform: scale(1.1);
    }
`;

export default Buttons;