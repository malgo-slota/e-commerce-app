import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FormInput from "../components/FormInput";


export default function Shipping () {
    const navigate = useNavigate();


   const handleSubmit= (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries()));

        navigate('/details');

   };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <h2>Customer information</h2>
                <p>Already have an account? 
                    <NavLink to={"/login"}>Log in</NavLink>
                </p>
                <FormInput name="email" 
                            type="email" 
                            label="Email*" 
                            errorMessage="Invalid email"
                            />
                
                <h2>Shipping address</h2>
                <FormInput name="firstname" 
                            type="text" 
                            label="First Name*" 
                            errorMessage="This field is required"
                            />
                <FormInput name="lastname" 
                            type="text" 
                            label="Last Name*" 
                            errorMessage="This field is required"
                            />
                <FormInput name="street" 
                            type="text" 
                            label="Adress*" 
                            errorMessage="This field is required"
                            />
                <Row>
                    <FormInput name="city" 
                                type="text" 
                                label="City*" 
                                errorMessage="This field is required"
                                />
                    <FormInput name="zip" 
                                type="text"
                                inputmode="numeric" 
                                label="Zip/Postal Code*" 
                                pattern="[0-9]{2}\-[0-9]{3}"
                                errorMessage="This filed is required, and should contain olny numbers"
                                />
                </Row>
                <FormInput name="country" 
                            type="text" 
                            label="Country*"
                            pattern="[A-Za-z ]{1,32}"
                            errorMessage="This field is required"
                            />
                <FormInput name="phone" 
                            type="tel" 
                            label="Phone*"
                            pattern="/(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/"
                            errorMessage="Invalid phone number"
                            />
                <NavLink to={"/cart"}>Return to cart</NavLink> 
                <SubmitBtn>Submit</SubmitBtn>
            </form> 
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 0 1rem;
    margin-top: 4rem;
    form {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }
     @media (min-width: 768px) {
        margin: 3rem 22rem;
    }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 7fr 4fr;
  gap: 0.4rem;
`;

const SubmitBtn = styled.button`
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