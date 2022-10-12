import React from "react";
import styled from "styled-components";
import {GrFacebook, GrInstagram} from 'react-icons/gr';
// import { NativeSelect } from "@mui/material";

function Footer () {
    return (
        <Wrapper>
            <Logo>
                Store
            </Logo>
            <nav>
                <FooterLinks>
                    <li><a href="/">About us</a></li>
                    <li><a href='/'>Terms & Conditions</a></li>
                    <li><a href='/'>PrivacyPolicy</a></li>
                    <li><a href='/'>Contact Us</a></li>
                    <li><a href='/'>FAQ</a></li>
                </FooterLinks> 
            </nav>
            <SocialMedia>
                <GrFacebook />
                <GrInstagram />
            </SocialMedia>
            <Attribution>
                <small>&copy; Copyright 2022 <a href="https://github.com/malgo-slota">malgo-slota</a>. All Rights Reserved</small> 
            </Attribution>
        </Wrapper>
    );
}; 

const Wrapper = styled.footer`
    padding: 4rem 1.2rem;
    li {
        list-style-type: none;
    }
    a {
        text-decoration: none;
        color: rgb(20,22,38);
        line-height: 2rem;
        display: inline-block;
        transition: 0.1s linear;
    }
    a:hover {
        color: rgb(73, 84, 33);
        transform: scale(1.1);
    }
`;

const FooterLinks = styled.ul`
    @media (min-width: 768px){
        display: flex;
        flex-direction: row;
        gap: 2rem;
        justify-content: center;
    }
`;

const Logo = styled.div`
    font-family: 'Abril Fatface', cursive;
    font-size: 2rem;
    color: rgb(73, 84, 33);
    letter-spacing: 0.1rem;
    margin-bottom: 2rem;
     @media (min-width: 600px){
        text-align: center;
    }
`;

const SocialMedia = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
    transition: 0.1s linear;
    svg {
        font-size: 1.2rem;
    }
    svg:hover{
        color: rgb(73, 84, 33);
        transform: scale(1.4);
    }
`;

const Attribution = styled.div`
    text-align: center;
`;

export default Footer;