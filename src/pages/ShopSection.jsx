import React, { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import styled from 'styled-components';
//components
import Buttons from '../components/Buttons';
import LoadingSpinner from "../components/LoadingSpinner";


function ShopSection () {
    const [isLoading, setLoading] = useState(false);
    const [allProducts, setAllProducts] = useState([]);

   useEffect(() => {   
        setLoading(true);
        getAllProducts();
    },[]);

    const getAllProducts = async () => {
        const api = await fetch(
            `https://fakestoreapi.com/products`
        );
        const data = await api.json();
        setAllProducts(data);
        setLoading(false);
    }
    if(isLoading) {
        return <LoadingSpinner />
    } else {
        return (
            <section>
                <Grid>
                    {allProducts.map((product) => {
                        return (
                            <ItemWrapper key={product.id}>
                                <img src={product.image} alt={product.title}/>
                                <Buttons id={product.id} image={product.image} title={product.title} price={product.price}/>
                                <Info>
                                    <p>{product.price}$</p>
                                    <RatingWrapper>
                                        <Rating name="read-only" value={product.rating.rate} precision={0.5} readOnly />
                                        <p>({product.rating.count})</p>
                                    </RatingWrapper>
                                </Info>
                            </ItemWrapper>
                        );
                    })}
                </Grid>
            </section>
        );
    }
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: 0 1rem;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        margin: 4rem 6rem;
    }
`;

const ItemWrapper = styled.div`
    margin-top: 2rem;
    position: relative;
    min-height: 25rem;
    img{
        position: absolute;
        object-fit: scale-down;
        height: 80%;   
        width: 100%; 
    }
`;

const Info = styled.div`
    display: flex;
    gap: 0.4rem;
    flex-direction: column;
    width: 100%;
    font-size: 1.2rem;
    position: absolute;
    bottom: 0;
    p {
        font-size: 1.4rem;
        align-self: center;
    }
`;

const RatingWrapper = styled.div`
  display: flex;
  transform: scale(0.8);
 
  p {
    color: rgb(79, 79, 79);    
  }
`;

export default ShopSection;