import React, { useState } from 'react';
import styled from 'styled-components';

function LoadingSpinner () {
    return (
        <LoadingContainer>
            <h2>Just a moment...</h2>
            <Spinner />
        </LoadingContainer>
    );
}

export default LoadingSpinner;

const LoadingContainer = styled.div`
    margin: 6rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
`;

const Spinner = styled.div`
  border: 5px solid;  
  width: 90px;
  height: 90px;
  border-color: rgb(73, 84, 33) transparent rgb(73, 84, 33) transparent;
  border-radius: 50%;
  animation: spin 1.2s ease infinite;
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
