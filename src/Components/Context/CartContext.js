import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../Reducer/cartReducer";

const cartContext = createContext();

let localDatas = () => {
  let storageCart = localStorage.getItem("localCart");
  if (storageCart == []) {
    return [];
  } else {
    return JSON.parse(storageCart);
  }
};

const initialState = {
  // cart:[],
  cart: localDatas(),
 
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (image, title, price, id) => {
    dispatch({ type: "ADD_TO_CART", payload: { image, title, price, id } });
  };

  const deleted = (id) => {
    dispatch({ type: "REMOVE_TO_CART", payload: id });
  };

 
  // clear cart
  const clearBtn = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(state.cart));
     
  }, [state.cart]);
   
  return (
    <cartContext.Provider value={{ ...state, addToCart, deleted, clearBtn }}>
      {children}
    </cartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(cartContext);
};

export { CartProvider, useCartContext };
