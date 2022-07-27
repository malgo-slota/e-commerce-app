import React, { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MdAddShoppingCart, MdRemoveRedEye } from 'react-icons/md';

function CategoryShopSection () {

    const [category, setCategory] = useState([]);
    let params = useParams();

    useEffect(() => {   
        getCategory();
    },[params.category]);

    const getCategory = async () => {
        const api = await fetch(
            `https://fakestoreapi.com/products/category/${params.category}`
        );
        const data = await api.json();
        setCategory(data);
    }
    

    return (
        <section>
            <Grid>
                  {category.map((product) => {
                    return (
                        <ItemWrapper>
                            <img src={product.image} alt={product.title}/>
                            <ButtonsWrapper>
                                <Link to={`/product/${product.id}`}>
                                    <button>
                                        <MdRemoveRedEye />
                                    </button>
                                </Link>
                                <button>
                                    <MdAddShoppingCart />
                                </button>
                            </ButtonsWrapper>
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

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: 0 1rem;
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

export default CategoryShopSection;