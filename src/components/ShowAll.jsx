import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ShowAll () {
 
    return (
        <Wrapper>
            <p>Explore all categories</p>
            <h1>Discover our products</h1>
            <CategoryLink to="/products" aria-label="shop now">
                Shop now
            </CategoryLink>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 3rem;
    padding: 1rem 0rem;
    background: rgb(242,242,242);
    p {
        color: rgb(79, 79, 79);
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.09rem;
        margin: 0.2rem 1rem;
    }
    h1 {
        margin: 0rem 1rem;
    }
     @media (min-width: 768px){
        margin: 3rem auto;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const CategoryLink = styled(Link)`
    display: block;
    text-decoration: none;
    text-align: center;
    margin: 1.2rem 1rem 0rem 1rem;
    padding: 1rem;
    border: 0.1rem solid rgb(73, 84, 33);
    font-size: 1.3rem;
    background: rgb(73, 84, 33);
    color: rgb(242, 242, 242);
    transition: .3s linear;
    :hover {
        background: none;
        color: rgb(73, 84, 33);
    }
`;

export default ShowAll;