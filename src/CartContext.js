import { createContext, useState, useEffect } from 'react';

const CartContext = createContext(); 

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        getLocalData();
    }, []);

    useEffect(() => { 
        saveDataToLocal(); 
    }, [cartItems]);

    const saveDataToLocal = () => {
        if(cartItems.length > 0)
            localStorage.setItem('cart', JSON.stringify(cartItems));
    };

    const getLocalData = () => {
        if(localStorage.getItem('cart') === null){
            localStorage.setItem('cart', JSON.stringify([]));
        } else {
            let localCartItems = JSON.parse(localStorage.getItem("cart")); 
            setCartItems(localCartItems);
        }
    }

    const addToCart = (id, image, title, price) => {
        setCartItems((prevState) => [...prevState, {id, image, title, price}]);
    };

	return (
		<CartContext.Provider value={{ cartItems, addToCart }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;