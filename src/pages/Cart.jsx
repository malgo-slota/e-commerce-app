import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import CartContext from '../CartContext';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

function Cart () {

    const { cartItems } = useContext(CartContext);

    return (
        <Wrapper>
            <table>
                <TableBody>
                    {cartItems.map((item)=> {
                    return (
                        <Item key={item.id}>
                            <img src={item.image} alt={item.title} />  
                            <p>{item.title}</p>
                            <button>
                                <AiOutlineClose/>
                            </button>
                            <QuantityBtns>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </QuantityBtns>
                            <Price>{item.price}$</Price>
                        </Item>    
                    ); 
                    })}
                </TableBody>
                <TableFooter>
                    <tr>
                        <th>Total</th>
                        <td>$</td>
                    </tr>           
                </TableFooter>
            </table>
            <Proceed to={"/shipping"}>Proceed to checkout</Proceed>
        </Wrapper>
    );  
}
const Wrapper = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        margin: 3rem 6rem;
    }
`;

const TableBody = styled.tbody`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Item = styled.tr`
    padding-bottom: 2rem;
    border-bottom: 1px solid rgb(193,192,192);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.2rem;
    align-items: center;
    margin: 1rem;
    min-height: 12rem;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 3fr 1fr 2fr 1fr;
    }
    img {
      width: 100%;
    } 
    button {
        background: none;
        border: none;
        svg{
            font-size: 1.6rem;
        }
    }
`;

const Price = styled.p`
  font-size: 1.2rem;
  line-height: 1.2rem;
  padding: 0.6rem 0; 
  justify-self: center;
    @media (min-width: 768px) {
        grid-row-start: 1;
        grid-column-start: 4;
    }
`;

const QuantityBtns = styled.div`
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
    button {
        border: 1px solid rgb(193,192,192);
        color: rgb(193,192,192);
        font-size: 1.4rem;
        width: 2.2rem;
        height: 2.2rem;
    }
    span {
        border: 1px solid rgb(193,192,192);
        width: 2.2rem;
        height: 2.2rem;
        font-size: 1.3rem;
        text-align: center;
    }
`;

const TableFooter = styled.tfoot`
    tr {
        display: flex;
        justify-content: space-between;
        margin: 0 1rem;
        padding: 3rem 2rem;
        box-shadow: 2px 0px 12px 2px rgba(20,22,38, 0.12);
    }
`;

const Proceed = styled(NavLink)`
        text-decoration: none;
        text-transform: uppercase;
        margin: 1rem;
        text-align: center;
        padding: 1rem;
        background: rgb(160, 191, 48);
        color: rgb(242, 242,242);
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        transition: 0.4s linear;
        border: 1px solid rgb(160, 191, 48);
        :hover {
        background: none;
        color: rgb(160, 191, 48);
      }
`;

export default Cart;