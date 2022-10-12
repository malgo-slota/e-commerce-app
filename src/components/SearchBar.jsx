import React from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'
import styled from 'styled-components';

function SearchBar ( { input, setInput }) {
    const navigate = useNavigate();
    
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/search');
    };

    return (
      <Wrapper onSubmit={submitHandler}>
            <SearchInput type="text" 
                        onChange={(e) => setInput(e.target.value)}
                        value={input} 
                        aria-label="insert your search"/>
            <button aria-label="search">
                <IoIosArrowForward/>
            </button>
      </Wrapper>
    );
}

const Wrapper = styled.form`
    margin: 2rem auto;
    border: 1px solid rgb(73, 84, 33);
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      display: flex;
      border: none;
    }
    svg {
      font-size: 2.1rem;
      color: white;
      background: rgb(73, 84, 33);
      transition: 0.4s linear;
      :hover {
        background: none;
        color: rgb(73, 84, 33);
      }
    }
`;

const SearchInput = styled.input`
    padding: 0 0.5rem;
    width: 100%;
    border: none;
    outline: 0;
    line-height: 2.1rem;
    font-size: 1.1rem;
    font-family: 'Raleway', sans-serif;
`;
   
export default SearchBar;