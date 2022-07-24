import React, { Component, useEffect, useState } from "react";
import './product.css';
import API from "../../API";
import Item from "./item";
const Product =()=>{
  
    const [product, setProduct] = useState([]);
    const [searchTerm, setSearchTerm] = useState(0);
    useEffect(()=>{
       
           
            API.getAll(searchTerm).then((res)=>{
                if(res.data.success){
                
                        setProduct(res.data.result);
                    }
                }
            )
            
       
    },[searchTerm])
    console.log(product);
        return(
            <>
           <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                                    <div className="col-sm-12">
                                    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name Product</th>
      <th scope="col">Price</th>
      <th scope="col">Image</th>
      <th scope="col">activate</th>
      
    </tr>
  </thead>
  <tbody>
     
  {
        product&&product.map((item,index)=>{
            return  <Item
            key={index}
            product={item}
            
            ></Item>
        })
     }
  </tbody>
</table>

                                    </div>

                        </div>
                </div>	
            </div>				
                                        
            </>
        )
    }

export default Product;