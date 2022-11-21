import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Categories () {

    const [category, setCategory] = useState([]);

    let params = useParams();

    useEffect(() => {
        getCategory();
    },[params.category]);

    const getCategory = async () => {
        const api = await fetch(
            `https://fakestoreapi.com/products/category/${params.category}'`
        );
        const data = await api.json();
        setCategory(data);
    }

    return (
        <Wrapper>
            <h2>Shop by category</h2>
            <Grid>
                <GridCell>
                    <img src="images/Optimized-pexels-andrea-piacquadio-774909.jpg" alt="pexels-andrea-piacquadio-774909"/>
                    <Category>
                        <span>WOMEN'S CLOTHING</span>
                        <CategoryLink aria-label="shop category women" to="/products/category/women's%20clothing">
                            SHOP NOW
                        </CategoryLink>
                    </Category>
                </GridCell>
                <GridCell>
                    <img src="images/Optimized-pexels-jackson-david-3147528.jpg" alt="pexels-jackson-david-3147528"/>
                    <Category>
                        <span>MEN'S CLOTHING</span>
                        <CategoryLink aria-label="shop category men" to="/products/category/men's%20clothing">
                            SHOP NOW
                        </CategoryLink>
                    </Category>
                </GridCell>
                <GridCell>
                    <img src="images/Optimized-pexels-ron-lach-10121693.jpg" alt="pexels-ron-lach-10121693"/>
                    <Category>
                        <span>JEWELERY</span>
                        <CategoryLink aria-label="shop category jewellery" to="/products/category/jewelery">
                            SHOP NOW
                        </CategoryLink>
                    </Category>
                </GridCell>
                <GridCell>
                    <img src="images/Optimized-pexels-athena-2582935.jpg" alt="pexels-athena-2582935"/>
                    <Category>
                        <span>ELECTRONIC'S</span>
                        <CategoryLink aria-label="shop category electronics" to="/products/category/electronics">
                        SHOP NOW
                        </CategoryLink>
                    </Category>
                </GridCell>
            </Grid> 
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 2rem 0;
    h2 {
        margin: 1rem 3rem;
        letter-spacing: 0.1rem;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 0 1rem;
    }
`;

const GridCell = styled.div`
    position: relative;
    margin: 0 0.4rem;
    img {
        width: 100%;
        height: 32rem;
        object-fit: cover;
    }
`;

const Category = styled.div` 
    position: absolute;
    background: rgba(242, 242, 242 ,0.6);
    bottom: 1rem;
    left: 0;
    right: 0;
    /* height: 7rem; */
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    /* margin: auto 0; */
    span {
        /* font-family: 'Abril Fatface', cursive; */
        color: rgb(55, 55, 55);
        font-size: 1.8rem;
    }
`;

const CategoryLink = styled(Link)`
    text-decoration: none;
    padding: 1rem;
    /* position: absolute; */
    /* right: 1rem; */
    /* bottom: 2rem; */
    border: none;
    font-size: 1.3rem;
    background: rgb(73, 84, 33);
    color: rgb(242, 242, 242);
    transition: .1s linear;
    :hover {
        transform: scale(1.1);
    }
`;

export default Categories;