import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NotFound () {
    return (
        <Wrapper>
            <h1>404 NOT FOUND</h1>
            <img src="/images/undraw_dreamer_re_9tua.svg" alt="404 Page not Found" />
            <Link to={"/"}>
                <button aria-label="back to homepage">Back to home page</button>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 4rem 0;
    position: relative;
     @media (min-width: 768px) {
        width: 30%;
        margin: 4rem auto;
    }
    h1 {
        font-size: 2.4rem;
        text-align: center;
    }  
    img {
        width: 100%;
    }
    button {
        position: absolute;
        padding: 1rem;
        left: 4rem;
        top: 6rem;
        text-transform: uppercase;
        border: none;
        background: rgb(73, 84, 33);
        color: rgb(242, 242,242);
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
    }
`;

export default NotFound;