import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Shipping () {
    return (
        <Wrapper>
            <Container>
                <h1>Customer information</h1>
                <p>Already have an account? 
                    <NavLink to={"/login"}>Log in</NavLink>
                </p>
                <input type="email" placeholder="Email" />
            </Container>
            <h1>Shipping address</h1>
            <Container>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <Row>
                    <input type="text" placeholder="Adress" />
                    <input type="text" placeholder="Apt,suite,etc." />
                </Row>
                <Row>
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="00-00" />
                </Row>
                <input type="text" placeholder="Country" />
                <input type="text" placeholder="Phone" />
                <NavLink to={"/cart"}>Return to cart</NavLink> 
                <Proceed to={"/details"}>Continue</Proceed>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 0 1rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input {
       border: 1px solid rgb(193,192,192);;
        padding: 0.2rem 1rem;
        font-size: 1.4rem;
        width: 100%;
        outline: none;
        line-height: 3rem;
        font-size: 1.2rem;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.4rem;
`;

const Proceed = styled(NavLink)`
        text-decoration: none;
        text-transform: uppercase;
        margin-top: 1rem;
        text-align: center;
        padding: 1rem;
        background: rgb(160, 191, 48);
        color: rgb(242, 242,242);
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        transition: 0.4s linear;
        border: 1px solid rgb(160, 191, 48);
        :hover {
        background: none;
        color: rgb(160, 191, 48);
      }
`;