import React, { useEffect, useState } from "react";
import { useCartContext } from "./Context/CartContext";
import Footer from "./Footer";

const AddToCart = () => {
  const { cart } = useCartContext();
  //  console.log(cart);
  const { deleted } = useCartContext();
  const { clearBtn } = useCartContext();

  const [checkCart, setCheckCart] = useState("Cart is Empty");

  const [item, setItem] = useState();
   console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="cart-message">
        <h1>Cart is Empty</h1>
      </div>
    );
  }

  return (
    <>
      <div className="cart-page">
        {cart.map((curElem, index) => {
          console.log(curElem);
          return (
            <>
              <div className="items">
                <div className="item-img">
                  <img src={curElem.data} />
                </div>
                <div>
                  <p>{curElem.title}</p>
                </div>
                <div>
                  <div>
                    <div className="btn-section"></div>
                  </div>
                  <p>₹{curElem.price}</p>
                </div>

                <div>
                  <i
                    onClick={() => deleted(curElem.id)}
                    class="fa-solid fa-trash"
                  ></i>
                </div>
              </div>
            </>
          );
        })}
        <div class="cart-btn">
          <button onClick={clearBtn}>Clear All</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AddToCart;
