import React, { Component, useEffect, useState } from "react";
import '../Product/product.css';
import API from "../../API";
import Item from "./item";
import MenuItem from "./menuItem";
import ContentAll from "./contentall";
import './thongbao.css'
const Order =()=>{
    const [flag,setflag]=useState();
    const [product, setProduct] = useState([]);
    const [searchTerm, setSearchTerm] = useState(0);
  
    useEffect(()=>{
       
           
            API.getOrder(searchTerm).then((res)=>{
                if(res.data.success){
                
                        setProduct(res.data.result);
                    }
                }
            )
            setflag(1);
            
       
    },[searchTerm])

    const onActive=(value)=>{
        setflag(value);
        let trangthai='';
      
         if(value==1){
            API. getOrder().then((res)=>{
                if(res.data.success){
                    setProduct(res.data.result)
                }else{
                     setProduct(false)
                 }
            }) 
         }
    
        if(value==2){
            trangthai='Chờ xác nhận';
            const data={trangthai:trangthai}
            API.getOrderTrangThai(data).then((res)=>{
                if(res.data.success){
                    
                    setProduct(res.data.result)
                }else{
                    setProduct(false)
                }
            }) 
        }
        if(value==3){
            trangthai='Chờ lấy hàng';
            const data={trangthai:trangthai}
            API.getOrderTrangThai(data).then((res)=>{
                if(res.data.success){
                    
                    setProduct(res.data.result)
                }else{
                    setProduct(false)
                }
            }) 
        }
        if(value==4){
            trangthai='Đang giao';
            const data={trangthai:trangthai}
            API.getOrderTrangThai(data).then((res)=>{
                if(res.data.success){
                
                    setProduct(res.data.result)
                }else{
                    setProduct(false)
                }
            }) 
          
        }
        if(value==5){
            trangthai='Đã giao';
            const data={trangthai:trangthai}
            API.getOrderTrangThai(data).then((res)=>{
                if(res.data.success){
                    
                    setProduct(res.data.result)
                }else{
                    setProduct(false)
                }
            }) 
        }
        if(value==6){
            trangthai='Đã hủy';
            const data={trangthai:trangthai}
            API.getOrderTrangThai(data).then((res)=>{
                if(res.data.success){
                    
                    setProduct(res.data.result)
                }else{
                    setProduct(false)
                }
            }) 
        }
       
       
    }
const onSearch=()=>{
    let search=document.getElementById('search').value;
    console.log('aaaa')
    API.getOrderSeach(search).then((res)=>{

        console.log('aaaa')

        if(res.data.success){
            if(searchTerm>0){
                setProduct((p)=>([...p, ...res.data.result]))
            }else{
                setProduct(res.data.result)
            }
        }
    })
}
   
      if(product){
        return(
            <>
            <div className="main-panel">
                <div className="content-wrapper px-0">
                    <div className="row m-0 " >
                            <div className="col-sm-12">
                            <MenuItem
                             onClick={onActive}
                    active={flag}
                            >
                            </MenuItem>
                            <div>
                            <input type="text" className="form-control text" id="search" placeholder="Name Product" name="name"/>
                                <button onClick={onSearch}>Tìm kiếm</button>
                            </div>
                          <ContentAll
                          product={product}
                          >

                          </ContentAll>

                                                                 </div>

                                                        </div>
                                                </div>	
            </div>				
                                        
            </>
        )
      }else{
        return(
            <>
            <div className="main-panel">
                <div className="content-wrapper px-0">
                    <div className="row m-0 " >
                            <div className="col-sm-12">
                            <MenuItem
                             onClick={onActive}
                    active={flag}
                            >
                                 <div>
                                 <input type="text" className="form-control text" id="search" placeholder="Name Product" name="name"/>
                                <button onClick={onSearch}>Tìm kiếm</button>
                            </div>
                            </MenuItem>
                            <div  className="chuathongbao">
                    <div className="thongbao2">
                        <img src="https://theme.hstatic.net/1000360022/1000651995/14/replace-icon.png?v=1306"/>
                        <p>Không có đơn hàng nào</p>
                    </div>
                        
                     </div>
                 

                                                                 </div>

                                                        </div>
                                                </div>	
            </div>				
                                        
            </>
        )
      }
    }

export default Order;