import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import '@splidejs/splide/css';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import { MdAddShoppingCart, MdRemoveRedEye } from 'react-icons/md';


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
                                <ButtonsWrapper>
                                    <Link to={`/product/${item.id}`}>
                                        <button>
                                            <MdRemoveRedEye />
                                        </button>
                                    </Link>
                                    <button>
                                        <MdAddShoppingCart />
                                    </button>
                                </ButtonsWrapper>
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
        text-align: center;
        font-size: 1.6rem;
        margin-bottom: 2rem;
        text-transform: uppercase;
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


export default BestRated;