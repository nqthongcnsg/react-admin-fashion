import React,{Component} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddPBrand from "../brand/addBrand";
import Brand from "../brand/brand";
import UpdateBrand from "../brand/update";
import AddPCategories from "../categories/addCategories";
import Categories from "../categories/categories";
import UpdateCategories from "../categories/update";
import Chat from "../chat/chat";
import AddDiscount from "../discount/addDiscount";
import Discount from "../discount/discount";
import UpdateDiscount from "../discount/update";

import Main from "../main/main";
import Detail from "../order/detail";
import Order from "../order/order";

import AddProduct from "../Product/addProduct";
import Product from "../Product/product";
import UpdateProduct from "../Product/update";
import AddSize from "../size/addSize";
import Size from "../size/size";
import UpdateSize from "../size/update";
import Test from "../test";
import AddType from "../type/addType";
import Type from "../type/type";
import UpdateType from "../type/updateType";
import EnterStock from "../Warehouse/EnterStock";
import WareHouse from "../Warehouse/Warehouse";

class DieuHuong extends Component{
    render(){
        return(
            <>
             <Router>
                    <Routes>
                   
                        <Route path='/' element={<Main/>} />
                        <Route path='/product' element={<Product/>} />
                        <Route path='/addproduct' element={<AddProduct/>} />
                        <Route path="/updateProduct:id" element={<UpdateProduct/>}/>
                        <Route path='/brand' element={<Brand/>} />
                        <Route path='/addBrand' element={<AddPBrand/>} />
                        <Route path="/updateBrand:id" element={<UpdateBrand/>}/>
                        <Route path='/categories' element={<Categories/>} />
                        <Route path='/addCategories' element={<AddPCategories/>} />
                        <Route path="/updateCategories:id" element={<UpdateCategories/>}/>
                         <Route path='/discount' element={<Discount/>} />
                        <Route path='/addDiscount' element={<AddDiscount/>} />
                        <Route path="/updateDiscount:id" element={<UpdateDiscount/>}/>
                        <Route path='/type' element={<Type/>} />
                        <Route path='/addType' element={<AddType/>} />
                        <Route path="/updateType:id" element={<UpdateType/>}/>
                        <Route path='/size' element={<Size/>} />
                        <Route path='/addSize' element={<AddSize/>} />
                        <Route path="/updateSize:id" element={<UpdateSize/>}/>
                        <Route path="/order" element={<Order/>}/>
                        <Route path="/detail:mahd" element={<Detail/>}/>
                        <Route path="/warehouse" element={<WareHouse/>}/>
                        <Route path="/addwarehouse" element={<EnterStock/>}/>
                        <Route path="/chat" element={<Chat/>}/>
                        <Route path="/chat:email" element={<Chat/>}/>
                        <Route path="/test" element={<Test/>}/>

                        
                    </Routes>
            </Router>
            </>
        )
    }
}
export default DieuHuong;