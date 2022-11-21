import React, { useState, useEffect, useContext} from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CartContext from '../CartContext';
import LoadingSpinner from "../components/LoadingSpinner";

function Product() {
    const { addToCart } = useContext(CartContext);
    const [isLoading, setLoading] = useState(false);

    const [product, setProduct] = useState({});
    let params = useParams();
  
    const getProductDetails = async () => {
        const data = await fetch(
            `https://fakestoreapi.com/products/${params.id}`
            );
        const details = await data.json();
        setProduct(details);
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        getProductDetails();
    },[params.id]);

    if(isLoading){
        return <LoadingSpinner />
    } else {
        return (
            <Wrapper>
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                    <span>{product.price}$</span>
                    <Desc>
                        {product.description}
                    </Desc>
                    <button onClick={() => addToCart(product.id, product.image, product.title, product.price)}>
                        Add to cart
                    </button>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    margin: 6rem 2rem 0rem 2rem;
    padding:  3rem 2rem;
    box-shadow: 2px 0px 12px 2px rgba(20,22,38, 0.12);
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
        @media (min-width: 768px){
            display: grid;
            grid-template-columns: 1fr 2fr;
            margin: 5rem 10rem 0rem 10rem;
        }
    img {
        width: 60%;
        margin: 0 auto;
        @media (min-width: 768px){
            grid-row: 1 / span 4;
        }
    }
    p {
        font-size: 1.4rem;
    }
    button {
        padding: 1rem;
        border: none;
        font-size: 1.3rem;
        background: rgb(73, 84, 33);
        color: rgb(242, 242, 242);
        transition: 0.4s linear;
        border: 1px solid rgb(73, 84, 33);
        :hover {
            background: none;
            color: rgb(73, 84, 33);
        }
    }
    span {
        font-size: 2rem;
    }
`;

const Desc = styled.div`
    font-size: 1.2rem;
    opacity: 0.7;
`;

export default Product;