import React, { Component, useEffect, useState } from "react";
import '../Product/product.css';
import API from "../../API";
import Item from "./item";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";
const Detail =()=>{
    const mahd=useParams(); 
    
    const [product, setProduct] = useState([]);
    const [searchTerm, setSearchTerm] = useState(0);
    useEffect(()=>{
       
           
            API.getOrderDetail(mahd.mahd).then((res)=>{
                if(res.data.success){
                
                        setProduct(res.data.result);
                    }
                }
            )
            
       
    },[searchTerm])
  
    let tongtien=0;
    if(product){
        for(let i=0;i<product.length;i++){
             tongtien=tongtien+(product[i].soluong*product[i].gia);
        }
    }
    const onClick=()=>{
       
        let trangthai='';
        if(product[0].trangthai=='Chờ xác nhận')
        {
            trangthai='Chờ lấy hàng'
            var data={mahd:product[0].mahd,trangthai:trangthai}
            API.updateTrangThai(data).then((res)=>{
                if(res.data.success){
                        alert('Đã duyệt')
                        
                    }
                }
            )
            if (product[0].thanhtoan == 'momo' ||product[0].thanhtoan == 'banking')
            {
                var data1={mahd:product[0].mahd}
               API.updateThanhToan(data1).then((res)=>{
                if(res.data.success){
                        
                        
                    }
                }
            )
            }
            window.location='/order'
        }
        if(product[0].trangthai=='Chờ lấy hàng')
        {
            trangthai='Đang giao'
            var data={mahd:product[0].mahd,trangthai:trangthai}
            API.updateTrangThai(data).then((res)=>{
                if(res.data.success){
                        alert('Đã duyệt')
                        
                    }
                }
            )
            window.location='/order'
        }
        if(product[0].trangthai=='Đang giao')
        {
            trangthai='Đã giao'
            var data={mahd:product[0].mahd,trangthai:trangthai}
            
            API.updateTrangThai(data).then((res)=>{
                if(res.data.success){
                        alert('Đã duyệt')
                        
                    }
                }
            )
           window.location='/order'
        }
        
        
    }

   if(product.length>0)
   {
    console.log(product);
    return(
        <>
        <div className="main-panel">
            <div className="content-wrapper px-0">
                <div className="row m-0 " >
                        <div className="col-sm-12">
                        <div class="scrollme">   
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Hình ảnh</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Size</th>
                          
                                
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product&&product.map((item,index)=>{
                                        return  < ItemDetail                                         key={index}
                                        product={item}
                                        
                                        ></ItemDetail>
                                    })
                                }
                            <tr>
                                    <th scope="row">Tổng tiền</th>
                                    <td className="tt"> {tongtien},000 vnđ </td>
                                    
                                    <td className="tt">  <button class="total__btn-buy" onClick={onClick}>Duyệt</button></td>
                                    <td className="tt thanhtoan"> {product[0].thanhtoan}</td>
                           </tr>
                            </tbody>
                            </table>
                            </div>

                                                                </div>

                                                    </div>
                                            </div>	
        </div>				
                                    
        </>
    )
   }else{
    console.log('aaaa')
   }
    }

export default Detail;