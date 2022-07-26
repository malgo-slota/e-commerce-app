import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Steps from "../components/Steps";
import SummaryContext from "../SummaryContext";
import CartContext from "../CartContext";


export default function Summary () {

    const navigate = useNavigate();

    const { adress, delivery, payment } = useContext(SummaryContext);
    const { cartItems, clearCart } = useContext(CartContext);
    const [modalDisplay, setModalDisplay] = useState(false);

    const handlePlaceOrder = () => {
        clearCart();
        setModalDisplay(true);
        setTimeout(() => {
            navigate('/');
        }, "1000")
    }

    return (
        <div>
             <StepsWrapper>
                <Steps />
            </StepsWrapper>
            <Wrapper>
                <div>
                    <h1>Summary</h1>
                    <Row>
                        <CartSummary>
                            {cartItems.map((item)=>{
                                return (
                                    <div key={item.id}>
                                        <img src={item.image} alt={item.title} /> 
                                        <span>{item.title}</span> 
                                        <div>
                                            <span>{item.price}$</span>
                                            <span>x 1</span>
                                        </div>                                        
                                    </div>    
                                );
                            })}
                        </CartSummary>
                        <div>
                            <ShippingSummary>
                                <h2>Shipping adress</h2>
                                        <div>
                                            <p>Name</p>
                                            <span>{adress.firstname} {adress.lastname}</span>
                                        </div>
                                        <div>
                                            <p>Email</p> 
                                            <span>{adress.email}</span>
                                        </div> 
                                        <div>
                                            <p>Phone</p> 
                                            <span>{adress.phone}</span>
                                        </div>
                                        <div>
                                            <p>Adress</p>
                                            <div>
                                                <span>{adress.street} </span>
                                                <span>{adress.city} {adress.zip} </span>
                                                <span>{adress.country}</span>
                                            </div>
                                        </div>
                            </ShippingSummary>
                            <DetailSummary>
                                <h2>Details</h2>
                                <div>
                                    <div>
                                        <p>Payment method</p>
                                        <span>{payment}</span>
                                    </div>
                                    <div>
                                        <p>Delivery</p>
                                        <span>{delivery}</span>
                                    </div>
                                </div>
                            </DetailSummary>
                            <ButtonsContainer>
                                <NavLink to={"/cart"}>Return to cart</NavLink>
                                <button onClick={handlePlaceOrder}>Place order</button>
                            </ButtonsContainer>
                        </div>
                    </Row>
                </div>
                {modalDisplay ? <Modal>Thank you</Modal> : ''}
            </Wrapper>
        </div>
    );
}
const StepsWrapper = styled.div`
    span {
        :nth-child(4) {
            background: rgb(73, 84, 33);
        }
    }    
`;

const Wrapper = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    h1 {
        text-align: center;
        margin-bottom: 1.5rem;
    }
    a, button {
        text-decoration: none;
        text-transform: uppercase;
        margin-top: 1rem;
        text-align: center;
        padding: 1rem;
        background: rgb(73, 84, 33);
        color: rgb(242, 242,242);
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        transition: 0.4s linear;
        border: 1px solid rgb(73, 84, 33);
        :hover {
        background: none;
        color: rgb(73, 84, 33);
      }
    }  
`;

const Modal = styled.div`
    position: fixed;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform:  translate(-50%, -50%);
    padding: 2rem;
    width: 90%;
    height: 80%;
    background: rgb(255, 255, 255);
    font-size: 2rem;
    box-shadow: 2px 0px 12px 2px rgba(20,22,38, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Row = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const CartSummary = styled.div`
    box-shadow: 2px 0px 12px 2px rgba(20,22,38, 0.12);
    padding: 2rem 1rem;
     @media (min-width: 768px) {
        flex: 2;
    }
    div {
        display: grid;
        gap: 0.8rem;
        grid-template-columns: 1fr 6fr;
        grid-template-rows: 1fr 1fr;
        align-items: center;
        padding: 0.4rem 0;
        border-bottom: 1px solid rgb(193,192,192);
         :last-child {
            border: none;
        }   
        div {
            grid-area: 2 / 2;
            width: 100%;
            color:rgb(193, 192, 192);
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
        }
        img {
            width: 100%;
            grid-row: 1 / span 2;
        }      
    }
`;

const ShippingSummary = styled.div`
    box-shadow: 2px 0px 12px 2px rgba(20,22,38, 0.12);
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1rem;
    h2 {
        margin-bottom: 1rem;
    }
    span {
        line-height: 1.4rem;
    }
    div {
        display: flex;
        justify-content: space-between;
        width: 80%;
        p {
            color: rgb(179,179,179);
        }
        //adress
        div {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    } 
`;

const DetailSummary = styled.div`
    flex: 1;
    box-shadow: 2px 0px 12px 2px rgba(20,22,38, 0.12);
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    h2 { 
        text-align: center;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            color: rgb(179,179,179);
        }
        div { 
            display: flex;
            flex: 1;
            gap: 0.4rem;
            flex-direction: column;
            padding: 0 1rem;
            span {
                font-size: 1.6rem;
            }
            :nth-child(1) {
                border-right: 1px solid rgb(193,192,192);
            }
        }
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    a:nth-child(1) {
        background: none;
        color: rgb(193,192,192);
        border-color: rgb(193,192,192);
    }
`;

