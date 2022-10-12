import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';


export default function Summary () {
    return (
        <Wrapper>
            <div>
                <h1>Summary</h1>
            </div>
            <NavLink to={"/"}>Place order</NavLink>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    a {
        text-decoration: none;
        text-transform: uppercase;
        margin-top: 1rem;
        text-align: center;
        padding: 1rem;
        background: rgb(73, 84, 33);
        color: rgb(242, 242,242);
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        transition: 0.4s linear;
        border: 1px solid rgb(73, 84, 33);
        :hover {
        background: none;
        color: rgb(73, 84, 33);
      }
    }  
`;