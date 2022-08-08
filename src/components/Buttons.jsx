import React, { useContext } from "react";
import CartContext from "../CartContext";
import { Link } from 'react-router-dom';
import { MdAddShoppingCart, MdRemoveRedEye } from 'react-icons/md';
import styled from 'styled-components';

function Buttons ( { id, image, title, price }) {

    const { addToCart } = useContext(CartContext);

    return (
        <ButtonsWrapper>
            <Link to={`/product/${id}`}>
                <button>
                    <MdRemoveRedEye />
                </button>
            </Link>
            <button onClick={() => addToCart(id,image,title,price)}>
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

export default Buttons;