import React from "react";
import { BsPerson, BsLock } from 'react-icons/bs';
import styled from "styled-components";

function Login () {
    return (
        <Wrapper>
            <h1>Welcome back!</h1>
            <FormStyle>
                <div>
                    <BsPerson />
                    <input type="email" placeholder="EMAIL" />
                </div>   
                <div>
                    <BsLock />
                    <input type="password" placeholder="PASSWORD" />
                </div>
                <input type="submit" value="Log in"/>
            </FormStyle>
            <p>Don't have an account? Sign up</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 6rem 2rem;
    padding:  3rem 2rem;
    box-shadow: 2px 0px 12px 2px rgba(20,22,38, 0.12);
    h1 {
        font-family: 'Abril Fatface', cursive;
        color: rgba(20,22,38, 0.6);
        text-align: center;
        margin-bottom: 1.4rem;
    }
    p {
        text-align: center;
        margin-top: 1.6rem;
    } 
`;

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
        div {
            display: flex;
            flex-direction: row;
            border: 1.5px solid rgba(20,22,38, 0.12);
            position: relative;
            input {
                border: none;
                height: 4rem;
                padding: 0 3rem;
                width:100%;
                font-size: 1.4rem;
                outline: none;
                ::placeholder {
                    font-size: 1rem;
                }
            }
            svg {
                opacity: 0.5;
                position: absolute;
                top: 50%;
                left: 0%;
                transform: translate(100%, -50%);
            }
        }
    input[type="submit"] {
        text-transform: uppercase;
        font-size: 1rem;
        padding: 1rem;
        border: none;
        background: rgb(160, 191, 48);
        color: rgb(242, 242,242);
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
    }   
`;

export default Login;