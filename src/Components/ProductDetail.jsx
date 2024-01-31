// import React, { useState ,useEffect} from "react"
// import { NavLink, useParams } from "react-router-dom";

// import { useCartContext } from "./Context/CartContext";
 

// const ProductDetail = () =>{
//     const {id} = useParams();
//     const [product, setProduct] = useState([{}]);
//     const getProducts = async () => {
//         try {
//             let res = await fetch(`https://dummyjson.com/products/${id}`);
//             let data = await res.json();
//             setProduct(data);
//             console.log(product)
//         } catch (err) {
//             console.log("Error", err)
//         }
//     }
//     useEffect(() => {
//         getProducts();
//     }, [])
//   const{ title,price, brand, review, rating,category }=product;
 
//        const image=product.images[0];
//     return(
//         <>
//         <h1>{title}</h1>
//          <div className="singlePage">
              
//             < img src={image} />
            
//             <div className="page-data">
//                 <p id="product-title">{title}</p>
//                 <p>Rating : {rating}</p>
//                 <p>MRP : {price}</p>
//                 <p className="product-discription">A product description is a form of marketing copy used to <br/> describe and explain the benefits of your product. In other <br/> words, it provides all the information and details of your <br/> product on your ecommerce site product description is <br/> a form of marketing copy used to</p>
//                 <div className="icons">
//                 <i class="fa-solid fa-truck"></i>
//                 <i class="fa-solid fa-repeat"></i>
//                 <i class="fa-solid fa-check"></i>
//                 <i class="fa-solid fa-mobile"></i>
//                 </div>
//                 <p>Brand : {brand}</p>
//                 <p>Category : {category}</p>
//                 <input className="number-input" type="number" placeholder="1" min="1" max="10"/>
//                 <div className="product-button">
//                 {/* <NavLink to="/addtocart">
//                     <button onClick={() => addToCart(image, title, price ,id)}>ADD TO CART</button>
                     
//                 </NavLink> */}
                    
//                     <button >BUY NOW</button>

//                 </div>

//             </div>
//          </div>
           
          
//         </>
//     )
// }
// export default ProductDetail;