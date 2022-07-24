import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../API";

class Item extends Component{
    render(){
        
      
        return(<>
           
    <tr>
      <th scope="row">{this.props.product.mahd}</th>
      <td>{this.props.product.email}</td>
      <td>{this.props.product.ngayhd}</td>
      <td>
      {this.props.product.tennguoinhan}
      </td>
      <td>
      {this.props.product.dienthoai}
      </td>
      <td>
      {this.props.product.diachinguoinhan}
      </td>
      <td>
      {this.props.product.ngaynhan}
      </td>
      <td>
          <Link to={`/detail${this.props.product.mahd}`} className="icon">Chi tiết ở đây</Link>
         
      </td>
    </tr>
        </>)
    }
}
export default Item;