import { createContext, useState } from "react"

const CartContext = createContext();

export function CartContextProvider({ children }) {

    const [itemsCart, setItemsCart] = useState([]);

    const addItem = (item, qty) => {
        if(isItemInCart(item.id)){
            let index = itemsCart.findIndex(i => i.id === item.id);
            let copyCart = [...itemsCart];
            copyCart[index].qty += qty;
            setItemsCart(copyCart)
        }else{
            const itemToAdd = {...item, qty}
            setItemsCart([...itemsCart, itemToAdd]);
        }
    }

    function removeItem(item){
        let itemToRemove = itemsCart;
        itemToRemove = itemToRemove.filter(e => e.id != item.id)
        setItemsCart(itemToRemove)
    }

    function isItemInCart(id){
       return itemsCart.some(e => e.id === id) 
    }

    function getItemInCart(id){
        return itemsCart.find(e => e.id === id);
    }

    const clearCart = () => {
        setItemsCart([]);
    };

    return (
      <CartContext.Provider value={{ addItem, itemsCart, clearCart, removeItem, getItemInCart }}>
        {children}
      </CartContext.Provider>
    );
}

export default CartContext;