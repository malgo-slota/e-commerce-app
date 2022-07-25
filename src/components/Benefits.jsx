import React from "react";
import styled from 'styled-components';
import { MdOutlineLocalShipping, MdEco }from 'react-icons/md';
import { Ri24HoursFill } from 'react-icons/ri';

function Benefits () {
    return (
        <Grid>
            <div>
                <MdOutlineLocalShipping/>
                <h2>Free shipping</h2>
                <p>and returns in 14 days</p>
            </div>
            <div>
                <Ri24HoursFill/>
                <h2>We are fast</h2>
                <p>we ship in 24 hours</p>
            </div>
            <div>
                <MdEco/>
                <h2>We are eco</h2>
                <p>plastic free packaging</p>
            </div>
        </Grid>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 6rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 0;
        margin: 1rem 2rem;  
        box-shadow: 2px 0px 12px 2px rgba(20,22,38, 0.12);
        svg {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
    }
`;

export default Benefits;