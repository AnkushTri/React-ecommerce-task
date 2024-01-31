import React, { useState } from "react";
import { useAuth } from "./store/auth";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, price, review, id }) => {

    const navigate = useNavigate()
    const { loggedIn } = useAuth();
    const handleClick = () => {
        if(loggedIn){
            navigate(`/product/${id}`)
        }  else{
            navigate('/login')
        }
    }

    return (
        <>
            {/* <NavLink to={`/product/productdetail/${id}`}  id="product-detail">  */}
            <div className="card">
                <img src={image} className="image" />
                <div className="card-text">
                    <p className="title">{title}</p>
                    <p><i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </p>
                    <div className="bag-icon">
                        <p>₹{price}</p>
                        <button onClick={handleClick} ><i class="fa-solid fa-bag-shopping">
                        </i>    </button>
                    </div>

                </div>
            </div>
            {/* </NavLink> */}
        </>
    )
}
export default Card;
