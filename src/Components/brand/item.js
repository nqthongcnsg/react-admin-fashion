import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../API";
import {domain} from '../../constant'
const Item =(props)=>{
    
        const [success, setSuccess]=useState();

        const [product,setProduct]=useState([]);
        const pr=props.pr;
       const deleteProduct=()=>{
    
        console.log(pr);
        var flag=false;
        for(let i=0;i<pr.length;i++){
            if(pr[i].idBrand==props.product.idBrand)
            {
                flag=true
            }
        }
        if(flag){
            alert('Không thể xóa thương hiệu khi còn sản phẩm')
        }
        else{
           API.deleteBrand(props.product.idBrand).then((res)=>{
            if(res.data.success){
            
                    alert(res.data.message)
                    setSuccess(res.data.message);
                }
            }
        )  
        }
      
       }    
        return(<>
           
    <tr>
      <th scope="row">{props.product.idBrand}</th>
      <td>{props.product.nameBrand}</td>
     
      <td>
          <Link to={`/updateBrand${props.product.idBrand}`} className="icon"><span class="mdi mdi-lead-pencil"></span></Link>
          <a href="/brand"  onClick={() => {if(window.confirm('Bạn muốn xóa sản phẩm ?')){deleteProduct()};}}><span class="mdi mdi-window-close"></span></a>
      </td>
    </tr>
        </>)
    }

export default Item;