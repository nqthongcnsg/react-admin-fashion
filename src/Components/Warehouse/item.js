import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../API";
import {domain} from '../../constant'
class Item extends Component{
    render(){
        const deleteProduct=()=>{
        
      
        
         
              
            API.deleteProductNumber(this.props.product.idProduct).then((res)=>{
                if(res.data.success){
                       alert(res.data.message)
                       
                    }
                }
            )
    
            
           
            }
      
        return(<>
           
    <tr>
      <th scope="row">{this.props.product.idProduct}</th>
      <td>{this.props.product.namProduct}</td>
      <td>{this.props.product.soluong}</td>
    
      <td>
         
      <a  href="/warehouse" onClick={() => {if(window.confirm('Bạn muốn xóa sản phẩm ?')){deleteProduct()};}}><span class="mdi mdi-window-close"></span></a>
      </td>
    </tr>
        </>)
    }
}
export default Item;