import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function QuantityBtns () {
  
    const [quantity, setQuantity] = useState(1);

    const decrease = () => {
        if(quantity>0)
            setQuantity(quantity - 1);
    }

    const increase = () => {
        setQuantity(quantity + 1);
    }
   
    return ( 
        <Wrapper>
            <button aria-label="decrease quantity" onClick={decrease}>
                <AiOutlineMinus />
            </button>
            {/*for the moment quantity value do not affect price*/}
            <input type="number" aria-label="quantity" value={quantity}/>
            <button aria-label="increase quantity" onClick={increase}>
                <AiOutlinePlus />
            </button>
        </Wrapper>
    );

}

const Wrapper = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     width: 7.4rem;
     grid-column-start: 2;
     @media (min-width: 768px) {
        grid-row-start: 1;
        grid-column-start: 3;         
        justify-self: center;
     }

    input[type="number"] {
        border: 1px solid rgb(193,192,192);
        width: 2.2rem;
        height: 2.2rem;
        font-size: 1.3rem;
        text-align: center;
        ::-webkit-outer-spin-button, 
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }
    
    button {
        border: 1px solid rgb(193,192,192);
        color: rgb(193,192,192);
        font-size: 1.4rem;
        width: 2.2rem;         
        height: 2.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
           
export default QuantityBtns;