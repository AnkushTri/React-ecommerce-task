const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    console.log("ssss");
    console.log(state);

    let { image, title, price, id } = action.payload;
    let cartProducts = {
      data: image[0].url,
      title,
      price,
      id,
    };

    return {
      ...state,
      cart: [...state.cart, cartProducts],
    };
  }

 
  if (action.type == "REMOVE_TO_CART") {
    let updateCart = state.cart.filter((curItem) => curItem.id !== action.payload
    );

    return {
      ...state,
      cart: updateCart,
    };
  }

  //  clear cart
  if (action.type == "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  return state;
};
export default cartReducer;
