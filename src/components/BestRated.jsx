import React, {useEffect, useState} from "react";
import '@splidejs/splide/css';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from 'styled-components';

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
                                <Info>
                                    <p>{item.rating.rate}</p>
                                    <p>{item.price}$</p>
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
`;

const ItemWrapper = styled.div`
    position: relative;
    min-height: 25rem; 
    img{
        position: absolute;
        object-fit: scale-down;
        height: 90%;   
        width: 100%; 
    }
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    width: 100%;
    font-size: 1.2rem;
    position: absolute;
    bottom: 0;
`;

export default BestRated;