import React, { useState, useEffect, useContext} from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CartContext from '../CartContext';

function Product() {
    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState({});
    let params = useParams();
  
    const getProductDetails = async () => {
        const data = await fetch(
            `https://fakestoreapi.com/products/${params.id}`
            );
        const details = await data.json();
        setProduct(details);
    };

    useEffect(() => {
        getProductDetails();
    },[params.id]);

    return (
       <Wrapper>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <Desc>
                {product.description}
            </Desc>
            <p>{product.price}$</p>
            <button onClick={() => addToCart(product.id, product.image, product.title, product.price)}>
                Add to cart
            </button>
       </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    @media (min-width: 768px){
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin: 5rem 8rem 0rem 8rem;
    }
    img{
        width: 100%;
        @media (min-width: 768px){
            grid-row: 1 / span 4;
        }
    }
    button {
        padding: 1rem;
        border: none;
        font-size: 1.3rem;
        background: rgb(160, 191, 48);
        color: rgb(242, 242, 242);
        transition: 0.4s linear;
        border: 1px solid rgb(160, 191, 48);
        :hover {
            background: none;
            color: rgb(160, 191, 48);
        }
    }
    p {
        font-size: 2rem;
    }
`;

const Desc = styled.div`
    font-size: 1.2rem;
    opacity: 0.7;
`;

export default Product;