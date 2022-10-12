import React from "react";
import { BsLock } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import FormInput from '../components/FormInput';
import styled from "styled-components";

function Login () {
    return (
        <Content>
            <h1>Welcome back!</h1>
            <FormStyle>
                <Container>
                    <AiOutlineMail />
                    <FormInput type="email"
                                name="email" 
                                placeholder="EMAIL"  
                                errorMessage="Invalid email or user doesn't exist"
                                required
                                />
                </Container>         
                <Container>
                    <BsLock />
                    <FormInput type="password" 
                                name="password"
                                placeholder="PASSWORD" 
                                errorMessage="Invalid password"
                                required
                            />
                </Container>
                <input type="submit" value="Log in"/>
            </FormStyle>
            <div>
                <p>Don't have an account?</p>
                <NavLink to={"/signup"}>
                    <span>Sign up</span>
                </NavLink>
            </div>
        </Content>
    );
}

const Content = styled.div`
    margin: 6rem 2rem;
    padding:  3rem 2rem;
    box-shadow: 2px 0px 12px 2px rgba(20,22,38, 0.12);
    @media (min-width: 768px){
        margin: 6rem 22rem;
    }
    h1 {
        font-family: 'Abril Fatface', cursive;
        color: rgba(20,22,38, 0.6);
        text-align: center;
        margin-bottom: 1.4rem;
    }
    a {
        color: rgb(73, 84, 33);
    }
`;

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    input[type="submit"] {
        text-transform: uppercase;
        margin-top: 1rem;
        padding: 1rem;
        border: none;
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

const Container = styled.div`
    position: relative;
    height: 6rem;
    input {
        border: 1.5px solid rgba(20,22,38, 0.12);
        height: 4rem;
        padding: 0 3rem;
    }
    svg {
        opacity: 0.5;
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -100%);
    }
`;

export default Login;