import React, { Component,useState,useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../API";
import {domain} from '../../constant'
import Photo from "./photo";
const Item =(props)=>{
   
        
    const [tonkho,setTonkho]=useState([]);
    useEffect(()=>{
       
           
        API.getTonKho(props.product.idProduct).then((res)=>{
            if(res.data.success){
                
                   setTonkho(res.data.result)
                }
            }
        )
        
   
},[props])
       const deleteProduct=()=>{
        
      
        console.log(tonkho)
        if(tonkho[0].soluong >0)
        {
            alert('Sản phẩm vẫn còn trong kho không thể xóa được')
        }
        else{
          API.deleteProduct(props.product.idProduct).then((res)=>{
            if(res.data.success){
                 
                    alert(res.data.message)
                }
            }
        )
        API.deleteProductWarehouse(props.product.idProduct).then((res)=>{
            if(res.data.success){
            
                   
                }
            }
        )

        }
       
        }
        return(<>
           
    <tr>
      <th scope="row">{props.product.idProduct}</th>
      <td>{props.product.namProduct}</td>
      <td>{props.product.priceNew},000 vnd</td>
      <Photo
      product={props.product}
      ></Photo>
      <td>
          <Link to={`/updateProduct${props.product.idProduct}`} className="icon"><span class="mdi mdi-lead-pencil"></span></Link>
          <a href="/product" onClick={() => {if(window.confirm('Bạn muốn xóa sản phẩm ?')){deleteProduct()};}}><span class="mdi mdi-window-close"></span></a>
      </td>
    </tr>
        </>)
    
}
export default Item;