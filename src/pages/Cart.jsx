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
                            <td>
                                <img src={item.image} alt={item.title} />
                            </td>
                            <Row>
                                <div>
                                    <p>{item.title}</p>
                                    <QuantityBtns>
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </QuantityBtns>
                                </div>
                                <div>
                                    <button>
                                        <AiOutlineClose/>
                                    </button>
                                    <Price>{item.price}$</Price>
                                </div>
                            </Row>
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

const TableBody = styled.tbody`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    img {
      width: 100%;
    } 
`;

const Item = styled.tr`
    padding-bottom: 2rem;
    border-bottom: 1px solid rgb(193,192,192);
    margin: 1rem;
    display: flex;
    gap: 1rem;
    min-height: 12rem;
    button {
        background: none;
        border: none;
        svg{
            font-size: 1.6rem;
        }
    }
`;

const Row = styled.td`
    display: flex;
    gap: 1rem;
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
            flex-direction: row;
        }
    }
`;

const Price = styled.p`
  font-size: 1.2rem;
  line-height: 1.2rem;
  padding: 0.6rem 0; 
`;

const QuantityBtns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 7.4rem;
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

export default Cart;