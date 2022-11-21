import React from 'react';
import styled from 'styled-components';

function Steps () {
    return (
        <StepsInfo>
            <div></div>
            <span>
                1
            </span>
            <span>
                2
            </span>
            <span>
                3  
            </span>
        </StepsInfo>
    );
}

const StepsInfo = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    color: rgb(242, 242, 242);
    div {
        position: absolute;
        border-bottom: 1px dashed rgba(73, 84, 33, 0.2);
        width: 60%;
        height: 1.6rem;
    }
    span {
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(218,220,210);
        margin: 0.6rem;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
    }
`;


export default Steps;

