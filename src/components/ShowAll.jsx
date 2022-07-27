import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ShowAll () {
    return (
        <Wrapper>
            <p>Explore all categories</p>
            <h1>Discover our products</h1>
            <Link to={'/products'}>
                <button>Shop now</button>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 3rem;
    padding: 1rem 0rem;
    background: rgb(242,242,242);
    p {
        color: rgba(20,22,38, 0.42);
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.09rem;
        margin: 0.2rem 1rem;
    }
    h1 {
        margin: 0rem 1rem;
    }
    button {
        margin: 1.2rem 1rem 0rem 1rem;
        padding: 1rem;
        border: none;
        font-size: 1.3rem;
        background: rgb(160, 191, 48);
        color: rgb(242, 242, 242);
    }
`;

export default ShowAll;