import React from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';

function Subscribe () {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your email has been added");
    }

    return (
        <Wrapper>
            <Text>
                <h1>Join our newsletter</h1>
                <h2>and get 5% off your first order</h2>
            </Text>
            <form onSubmit={handleSubmit}>
                <FormInput aria-label="join our newsletter" 
                        type="email" 
                        placeholder='Enter your email address'
                        errorMessage="Invalid email adress"
                    />
                <button aria-label="submit">Submit</button>
            </form>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    background: rgb(16,17,30);
    margin-top: 6rem;
    height: 20rem;
    color: rgb(242, 242, 242);
    form {  
        display: flex;
        flex-direction: column;
        padding: 1rem 3rem;
        input[type="email"] {
            font-size: 1.4rem;
            outline: none;
            background: rgb(20,22,38);
            color: rgb(242, 242,242);
        }
        button {
            text-transform: uppercase;
            font-size: 1rem;
            padding: 1rem;
            border: none;
            background: rgb(73, 84, 33);
            color: rgb(242, 242,242);
            font-size: 1.2rem;
            letter-spacing: 0.1rem;
            transition: 0.1s linear;
            :hover {
                transform: scale(1.1);
            }
        }
        @media (min-width: 768px) {
            width: 60%;
            margin: 0 auto;
        }
    }
`;

const Text = styled.div`
    text-align: center;
    padding: 1.2rem 0.2rem;
    h1 {
        font-family: 'Abril Fatface', cursive;
    }
    
`;

export default Subscribe;