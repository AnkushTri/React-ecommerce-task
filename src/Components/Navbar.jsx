import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from './store/auth'


const Navbar = () =>{

    const { loggedIn } =useAuth();
    const [showItem, setshowItem] = useState(false)
    const showNav = () =>{
        setshowItem(true)
    }
    const hideNav = () =>{
        setshowItem(false)
    }
    return(
        <>

        <nav className={showItem ? "show-navitems" : "hide-navitems"} >
            <div className="logo">
                <h1>Ankush Shope</h1>
                {/* <img src={heels}/> */}
            </div>
            <ul>
                <li><NavLink onClick={()=>setshowItem(false)} className="nav-items" to="/">Home</NavLink></li>
                <li><NavLink onClick={()=>setshowItem(false)} className="nav-items" to="/about">About</NavLink></li>
                <li><NavLink onClick={()=>setshowItem(false)} className="nav-items" to="/product">Products</NavLink></li>
                {!loggedIn ? <>
                <li><NavLink onClick={()=>setshowItem(false)} className="nav-items" to="/login">Login</NavLink></li>
                 <li><NavLink onClick={() => setshowItem(false)} className="nav-items" to="/registration">Register</NavLink></li>
                </>:
                    <li><NavLink onClick={() => setshowItem(false)}className="nav-items" to="/logout">Logout</NavLink></li>
                }
                    <li><NavLink onClick={() => setshowItem(false)} className="nav-items" to="/addtocart"><i class="fa-solid fa-cart-shopping"></i></NavLink></li>
            </ul>
            <div className="icons">
            <i onClick={showNav} id="bar-icon" class="fa-solid fa-bars"></i>
            <i onClick={hideNav} id="cross-icon" class="fa-solid fa-xmark"></i>

            </div>
        </nav>
        </>
    )
}
export default Navbar;