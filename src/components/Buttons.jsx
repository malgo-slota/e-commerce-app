import React from "react";
import { Link } from 'react-router-dom';
import { MdAddShoppingCart, MdRemoveRedEye } from 'react-icons/md';
import styled from 'styled-components';

function Buttons ( { id }) {
    return (
        <ButtonsWrapper>
            <Link to={`/product/${id}`}>
                <button>
                    <MdRemoveRedEye />
                </button>
            </Link>
            <button>
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
        svg {
            font-size: 1.6rem;
        }  
        :hover{
            opacity: 1;
        }
    }
`;

export default Buttons;