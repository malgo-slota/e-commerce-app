import React from "react";
import styled from "styled-components";
import {GrFacebook, GrInstagram} from 'react-icons/gr';

function Footer () {
    return (
        <Wrapper>
            <Logo>
                Store
            </Logo>
            <nav>
                <ul>
                    <li><a href="/">About us</a></li>
                    <li><a href='/'>Terms & Conditions</a></li>
                    <li><a href='/'>PrivacyPolicy</a></li>
                    <li><a href='/'>Contact Us</a></li>
                    <li><a href='/'>FAQ</a></li>
                </ul> 
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
    }
    a:hover {
        color: rgb(160, 191, 48);
    }
`;

const Logo = styled.div`
    font-family: 'Abril Fatface', cursive;
    font-size: 2rem;
    color: rgb(160, 191, 48);
    letter-spacing: 0.1rem;
    margin-bottom: 2rem;
`;

const SocialMedia = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
    svg {
        font-size: 1.2rem;
    }
    svg:hover{
        color: rgb(160, 191, 48);
    }
`;

const Attribution = styled.div`
    text-align: center;
`;

export default Footer;