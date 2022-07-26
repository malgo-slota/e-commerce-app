import React, { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Product() {
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
            <button>
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
    img{
        width: 100%;
    }
    button {
        padding: 1rem;
        border: none;
        font-size: 1.3rem;
        background: rgb(160, 191, 48);
        color: rgb(242, 242, 242);
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