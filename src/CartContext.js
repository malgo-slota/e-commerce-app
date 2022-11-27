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
        const existingItems = cartItems.find((item) => item.id === id);
        if (existingItems) {
            setCartItems((prevState) => [...prevState]);
            console.log('this product already exist')
        } else {
            setCartItems((prevState) => [...prevState, {id, image, title, price}]);
            console.log('added new product to cart');
        }
    };

    const removeFromCart = (item_id) => {
        setCartItems(cartItems.filter((item) => item.id !== item_id));
    }

    const clearCart = () => {
        localStorage.clear();
        setCartItems([]);
    }

	return (
		<CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;