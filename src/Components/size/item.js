import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../API";
const Item =(props)=>{
    console.log(props.product.idSize)
        const [success, setSuccess]=useState();
  
       const deleteProduct=()=>{
        API.deleteSize(props.product.idSize).then((res)=>{
            if(res.data.success){
            
                    alert(res.data.message)
                    setSuccess(res.data.message);
                }
            }
        )  
       }    
        return(<>
           
    <tr>
      <th scope="row">{props.product.idSize}</th>
      <td>{props.product.nameSize}</td>
     
      <td>
          <Link to={`/updateSize${props.product.idSize}`} className="icon"><span class="mdi mdi-lead-pencil"></span></Link>
          <a href="/size"  onClick={() => {if(window.confirm('Do you want delete Size ?')){deleteProduct()};}}><span class="mdi mdi-window-close"></span></a>
      </td>
    </tr>
        </>)
    }

export default Item;