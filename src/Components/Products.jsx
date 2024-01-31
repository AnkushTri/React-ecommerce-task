import React, { useEffect, useState } from "react";
import Footer from "./Footer";

import Card from "./Card";

 

const Products = () => {

const [products, setProduct] = useState([{}]);
const getProducts=async()=>{
  try{
    let res = await fetch('https://dummyjson.com/products');
    let data= await res.json();
    setProduct(data.products);
    console.log(products)
  }catch(err){
    console.log("Error", err)
  }
}
  useEffect(()=>{
     getProducts();
  },[])
  if (!products) {
    return <p>Loading...</p>; // Or any other loading indicator or message
  }
    // console.log(filterProduct);
  return (
    <div className="prductpage">
      <h1 style={{textAlign:"center"}}>Products</h1>
      {products && products.map((product) => (
        <Card
          key={product.id}
          image={product.images && product.images[0]}
          title={product.title}
          price={product.price}
          review={product.rating}
          id={product.id}
        />
      ))}
      <Footer />
    </div>
  );
}
export default Products;


