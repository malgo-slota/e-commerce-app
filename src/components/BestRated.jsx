import React, {useEffect, useState} from "react";
import '@splidejs/splide/css';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
//components
import Buttons from '../components/Buttons';


function BestRated () {
    const [bestRated, setBestRated] = useState([]);

    useEffect(() => {   
        getSelectedItems();
    },[]);

    const getSelectedItems = async () => {
        const api = await fetch(
            `https://fakestoreapi.com/products`
        );
        const data = await api.json();
        setBestRated(data);
    }
    return (
        <Wrapper>
            <h2>Top rated products</h2>
            <Splide options={{
                type: 'loop',
                gap: '0.5rem',
                padding: '5rem',
                perPage: '1',
                drag: true,
                arrows: true,
                pagination: false,
            }}> 
                {bestRated.filter(product => product.rating.rate >= 4).map(item => {
                    return (
                        <SplideSlide key={item.id}>
                            <ItemWrapper>
                                <img src={item.image} alt={item.title}/>
                                <Buttons id={item.id}/>
                                <Info>
                                    <p>{item.price}$</p>
                                    <RatingWrapper>
                                        <Rating name="read-only" value={item.rating.rate} precision={0.5} readOnly />
                                        <p>({item.rating.count})</p>
                                    </RatingWrapper>
                                </Info>
                            </ItemWrapper>
                        </SplideSlide>
                    );
                })} 
            </Splide>
        </Wrapper>      
    );
};

const Wrapper = styled.div`
    margin-top: 6rem;
    h2 {
        margin: 1rem 3rem;
        letter-spacing: 0.1rem;
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
    padding: 0.5rem 1rem;
    width: 100%;
    font-size: 1.2rem;
    position: absolute;
    bottom: 0;
    p {
        font-size: 1.4rem;
    }
`;

const RatingWrapper = styled.div`
  display: flex;
 
  p {
    opacity: 0.5;
  }
`;

export default BestRated;