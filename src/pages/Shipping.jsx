import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FormInput from "../components/FormInput";
import Steps from "../components/Steps";
import SummaryContext from '../SummaryContext';


export default function Shipping () {

    const { setAdress } = useContext(SummaryContext);
    const navigate = useNavigate();
 
   const handleSubmit= (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        setAdress(Object.fromEntries(data.entries()));
        navigate('/details');
   };

    return (
        <div>
            <StepsWrapper>
                <Steps />
            </StepsWrapper>
            <Wrapper>
                <form onSubmit={handleSubmit}>
                    <h2>Customer information</h2>
                    <p>Already have an account? 
                        <NavLink to={"/login"}>Log in</NavLink>
                    </p>
                    <FormInput name="email" 
                                type="email" 
                                label="Email" 
                                errorMessage="Invalid email"
                                />
                    
                    <h2>Shipping address</h2>
                    <FormInput name="firstname" 
                                type="text" 
                                label="First Name" 
                                errorMessage="This field is required"
                                />
                    <FormInput name="lastname" 
                                type="text" 
                                label="Last Name" 
                                errorMessage="This field is required"
                                />
                    <FormInput name="street" 
                                type="text" 
                                label="Adress" 
                                errorMessage="This field is required"
                                />
                    <Row>
                        <FormInput name="city" 
                                    type="text" 
                                    label="City" 
                                    errorMessage="This field is required"
                                    />
                        <FormInput name="zip" 
                                    type="text"
                                    inputMode="numeric" 
                                    label="Zip/Postal Code" 
                                    pattern="[0-9]{2}\-[0-9]{3}"
                                    errorMessage="This filed is required, and should contain olny numbers"
                                    />
                    </Row>
                    <FormInput name="country" 
                                type="text" 
                                label="Country"
                                pattern="[A-Za-z ]{1,32}"
                                errorMessage="This field is required"
                                />
                    <FormInput name="phone" 
                                type="tel" 
                                label="Phone"
                                pattern="/(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/"
                                errorMessage="Invalid phone number"
                                />
                    <NavLink to={"/cart"}>Return to cart</NavLink> 
                    <SubmitBtn aria-label="submit">Submit</SubmitBtn>
                </form> 
            </Wrapper>
        </div>
    );
}

const StepsWrapper = styled.div`
    span {
        :nth-child(2) {
            background: rgb(73, 84, 33);
        }
    }    
`;

const Wrapper = styled.div`
    box-shadow: 2px 0px 12px 2px rgba(20,22,38, 0.12);
    padding: 3rem 2rem;
    margin: 2rem 1rem 0rem 1rem;
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
`;