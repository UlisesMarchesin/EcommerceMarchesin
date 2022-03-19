import { createContext, useState } from "react"

const CartContext = createContext();

export function CartContextProvider({ children }) {

    const [itemsCart, setItemsCart] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);

    const [countCart, setCountCart] = useState(0);

    const addItem = (item, qty) => {
        if(isItemInCart(item.id)){
            let index = itemsCart.findIndex(i => i.id === item.id);
            let copyCart = [...itemsCart];
            copyCart[index].qty += qty;
            setItemsCart(copyCart)
            setCountCart(countCart + qty)
            setTotalPrice(totalPrice + item.price * qty);
        }else{
            const itemToAdd = {...item, qty}
            setItemsCart([...itemsCart, itemToAdd]);
            setCountCart(countCart + qty);
            setTotalPrice(totalPrice + item.price * qty);
        }
        
    }

    function removeItem(item, qty){
        let itemToRemove = itemsCart;
        itemToRemove = itemToRemove.filter(e => e.id != item.id)
        setItemsCart(itemToRemove)
        setCountCart(countCart - qty);
        setTotalPrice(totalPrice - item.price * qty);
    }

    function isItemInCart(id){
       return itemsCart.some(e => e.id === id) 
    }

    function getItemInCart(id){
        return itemsCart.find(e => e.id === id);
    }

    const clearCart = () => {
        setItemsCart([]);
        setCountCart(0);
        setTotalPrice(0);
    };

    return (
      <CartContext.Provider value={{ addItem, itemsCart, clearCart, removeItem, getItemInCart, totalPrice, countCart }}>
        {children}
      </CartContext.Provider>
    );
}

export default CartContext;