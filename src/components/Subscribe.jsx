import React from 'react';
import styled from 'styled-components';

function Subscribe () {
    return (
        <Wrapper>
            <Text>
                <h1>Join our newsletter</h1>
                <h2>and get 5% off your first order</h2>
            </Text>
            <form>
                <input type="email" placeholder='Enter your email address'></input>
                <input type="submit" value="Submit"></input>
            </form>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background: rgb(16,17,30);
    margin-top: 6rem;
    height: 20rem;
    color: rgb(242, 242, 242);
    form {  
        display: flex;
        flex-direction: column;
        padding: 3rem;
        input[type="email"] {
            font-size: 1.4rem;
            padding: 1rem;
            border: none;
            outline: none;
            background: rgb(20,22,38);
        }
        input[type="submit"] {
            text-transform: uppercase;
            font-size: 1rem;
            padding: 1rem;
            border: none;
            background: rgb(160, 191, 48);
            
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