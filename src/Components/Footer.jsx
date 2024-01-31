import React from "react";

const Footer = () =>{
    return(
        <>
            <div className="footer-bottom">
                <p>@{new Date().getFullYear()} Created By Anku raj</p>
                <div >
                    <p>Privacy Policy</p>
                    <p>Term & Condition</p>
                </div>
            </div>
        </>
    )
}
export default Footer;