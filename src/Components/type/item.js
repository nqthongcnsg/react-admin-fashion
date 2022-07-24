import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../API";
const Item =(props)=>{
    console.log(props.product.idType)
        const [success, setSuccess]=useState();
        const pr=props.pr;
       const deleteProduct=()=>{
        var flag=false;
        for(let i=0;i<pr.length;i++){
            if(pr[i].idType==props.product.idType)
            {
                flag=true
            }
        }
        if(flag){
            alert('Không thể xóa khi còn sản phẩm')
        }
        else{
            API.deleteType(props.product.idType).then((res)=>{
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
      <th scope="row">{props.product.idType}</th>
      <td>{props.product.nameType}</td>
     
      <td>
          <Link to={`/updateType${props.product.idType}`} className="icon"><span class="mdi mdi-lead-pencil"></span></Link>
          <a href="/type"  onClick={() => {if(window.confirm('Bạn muốn xóa loại sản phẩm ?')){deleteProduct()};}}><span class="mdi mdi-window-close"></span></a>
      </td>
    </tr>
        </>)
    }

export default Item;