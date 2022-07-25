import React from "react";
import styled from 'styled-components';

function Categories () {
    return (
        <Grid>
            <Category>
                <img src="images/pexels-andrea-piacquadio-774909.jpg" alt="smiling women"/>
                <button>Women's clothing</button>
            </Category>
            <Category>
                <img src="images/pexels-jackson-david-3147528.jpg" alt="smiling women"/>
                <button>Men's clothing</button>
            </Category>
            <Category>
                <img src="images/pexels-ron-lach-10121693.jpg" alt="smiling women"/>
                <button>Jewellery</button>
            </Category>
            <Category>
                <img src="images/pexels-athena-2582935.jpg" alt="smiling women"/>
                <button>Electronics</button>
            </Category>
        </Grid> 
    );
}

const Grid = styled.div`
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
`;

const Category = styled.div` 
    position: relative;
    img {
        width: 100%;
        height: 28rem;
        object-fit: scale-down;
    }
    button {
        padding: 1rem;
        position: absolute;
        right: 1rem;
        bottom: 2rem;
        border: none;
        font-size: 1.3rem;
        background: rgb(160, 191, 48);
        color: rgb(242, 242, 242);
    }
`;

export default Categories;