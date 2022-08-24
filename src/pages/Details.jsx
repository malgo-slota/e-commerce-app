import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Details () {
    return (
        <Wrapper>
            <Container>
                <h1>Choose a payment method</h1>
                <div>
                    <input type="radio"  name="payment" id="visa"></input>
                    <label htmlFor="visa">
                        <img src="images/visa.png" alt="visa" />
                    </label>
                </div>
                <div>
                    <input type="radio" name="payment" id="paypal"></input>
                    <label htmlFor="credit">
                        <img src="images/paypal.png" alt="paypal" />
                    </label>
                </div>
                <div>
                    <input type="radio" name="payment" id="paypal"></input>
                    <label htmlFor="credit">
                        <img src="images/apple-pay.png" alt="apple pay" />
                    </label>
                </div>
            </Container>
            <Container>
                <h1>Choose a Shipping method</h1>
                <div>
                    <input type="radio" name="shipping" id="ups"></input>
                    <label htmlFor="ups">
                        <img src="images/ups.png" alt="ups" />
                    </label>
                </div>
                <div>
                    <input type="radio" name="shipping" id="fedex"></input>
                    <label htmlFor="fedex">
                        <img src="images/fedex.png" alt="fedex" />
                    </label>
                </div>
                <div>
                    <input type="radio" name="shipping" id="instore"></input>
                    <label htmlFor="instore">In store pickup</label>
                </div>
            </Container>
            <Proceed to={"/summary"}>Proceed to Summary</Proceed>             
        </Wrapper>
    );
}

const Wrapper = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  img {
    width: 70px;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    align-items: center;
    padding: 3rem 0;
    margin: 1rem;  
    box-shadow: 2px 0px 12px 2px rgba(20,22,38, 0.12);
    h1 {
        text-align: center;
        margin-bottom: 1rem;
    }
    div {
        display: flex;
        gap: 1rem;
    }
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