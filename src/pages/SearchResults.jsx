import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
//components
import SearchBar from "../components/SearchBar";
import Buttons from '../components/Buttons';

function SearchResults () {
    const [input, setInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);
   
    const getSearchResult = async () => {
        const api = await fetch(
                `https://fakestoreapi.com/products`
        );
        const data = await api.json();
        setSearchResult(data);
    };
    
    useEffect(() => {
        getSearchResult();
    },[input]);

    return (
        <div>
            <SearchBar input={input} 
                        setInput={setInput} />
            <Wrapper>
                {searchResult.map(item => {
                    const tags = item.title.trim().toLowerCase().split(" ");
                    return (
                        <div>
                            {tags.filter(word => word === input.toLowerCase()).map(()=> {
                                return(
                                    <ItemWrapper key={item.id}>
                                        <img src={item.image} alt={item.title}/>
                                        <Buttons id={item.id} image={item.image} title={item.title} price={item.price}/>
                                        <Info>
                                            <h3>{item.title}</h3>
                                            <p>{item.price}$</p>
                                            <RatingWrapper>
                                                <Rating name="read-only" value={item.rating.rate} precision={0.5} readOnly />
                                                <p>({item.rating.count})</p>
                                            </RatingWrapper>
                                        </Info>
                                    </ItemWrapper>       
                                );
                            })}
                        </div>
                    );
                })}
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
  margin: 0rem 1rem; 
  @media (min-width: 768px) {
        width: 30%;
        margin: 3rem auto;
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    position: relative;
    min-height: 20rem;
    img{
        object-fit: scale-down;
        height: 50%;   
        width: 50%; 
    }
`;

const Info = styled.div`
    display: flex;
    gap: 0.4rem;
    flex-direction: column;
    width: 100%;
    font-size: 1.2rem;
    p {
        font-size: 1.4rem;
        align-self: center;
    }
`;

const RatingWrapper = styled.div`
  display: flex;
  transform: scale(0.8);
  p {
    color:rgb(79, 79, 79);
  }
`;

export default SearchResults;