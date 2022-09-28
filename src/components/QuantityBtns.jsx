import React, { Component } from 'react';
import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

class QuantityBtns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            min: 0
        };
    }

    incrementQuantity = () => {
        this.setState(prevState => {
            return {
                quantity: prevState.quantity + 1
            }
        });
    }

    decreaseQuantity = () => {
        this.setState(prevState => {
            if(prevState.quantity > 0) {
                return {
                    quantity: prevState.quantity - 1
                }
            } else {
                return null;
            }
        });
    }

    handleChange = (e) => {
        this.setState({quantity: e.target.value});
    }

    render() {
        return ( 
            <Wrapper>
                <button onClick={this.decreaseQuantity}>
                    <AiOutlineMinus />
                </button>
                {/*for the moment quantity value do not affect price*/}
                <input type="number" value={this.state.quantity} onChange={this.handleChange} />
                <button onClick = {this.incrementQuantity}>
                    <AiOutlinePlus />
                </button>
            </Wrapper>
        );
    } 
}

const Wrapper = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     width: 7.4rem;
     grid-column-start: 2;
     @media (min-width: 768px) {
        grid-row-start: 1;
        grid-column-start: 3;         
        justify-self: center;
     }

    input[type="number"] {
        border: 1px solid rgb(193,192,192);
        width: 2.2rem;
        height: 2.2rem;
        font-size: 1.3rem;
        text-align: center;
        ::-webkit-outer-spin-button, 
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }
    
    button {
        border: 1px solid rgb(193,192,192);
        color: rgb(193,192,192);
        font-size: 1.4rem;
        width: 2.2rem;         
        height: 2.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
           
export default QuantityBtns;