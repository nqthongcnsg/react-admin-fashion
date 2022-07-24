import React, { Component } from "react";

import { domain } from "../../constant";

class ItemDetail extends Component{
    render(){
      
        var img=JSON.parse(this.props.product.image);
      
        return(<>
           
    <tr>
      <th scope="row">{this.props.product.namProduct}</th>
      <td> <img src={domain+"/"+img.images[0]}/></td>
      <td>{this.props.product.soluong}</td>
      <td>
      {this.props.product.gia},000 vnđ
      </td>
      <td>
      {this.props.product.size}
      </td>
     
    </tr>
        </>)
    }
}
export default ItemDetail;