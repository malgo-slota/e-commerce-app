import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'
import styled from 'styled-components';
import SearchContext from "../SearchContext";

function SearchBar () {

    const { searchInput, setSearchInput, isSearchBarOpen, toggleSearchBar} = useContext(SearchContext);
    const navigate = useNavigate();
    
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/search');
    };

    return (
      <Wrapper onSubmit={submitHandler} isSearchBarOpen={isSearchBarOpen} onBlur={toggleSearchBar}>
            <SearchInput type="text" 
                        onChange={(e) => setSearchInput(e.target.value)}
                        value={searchInput} 
                        aria-label="insert your search"/>
            <button aria-label="search">
                <IoIosArrowForward/>
            </button>
      </Wrapper>
    );
}

const Wrapper = styled.form`
    z-index: 1;
    position: absolute;
    right: 0;
    left: 0.4rem;
    top: 0.4rem;
    border: 1px solid rgba(73, 84, 33, 0.3);
    width: 45%;
    display: ${({ isSearchBarOpen }) => (isSearchBarOpen ? 'flex' : 'none')};
    align-items: center; 
    button {
      display: flex;
      border: none;
      
    }
    svg {
      margin: 0;
      padding: 0;
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
    height: 2.4rem;
    padding: 0 0.5rem;
    width: 100%;
    border: none;
    outline: 0;
    line-height: 2.1rem;
    font-size: 1.1rem;
    font-family: 'Raleway', sans-serif;
`;
   
export default SearchBar;