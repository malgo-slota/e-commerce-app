import React, { useContext } from "react";
import CartContext from '../CartContext';

function Cart () {

    const { cartItems } = useContext(CartContext);

    return (
        <div>
            Shopping cart
            {cartItems.map((item)=> {
                return (
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                    </div>    
                ); 
            })}
        </div>
    );  
}

export default Cart;