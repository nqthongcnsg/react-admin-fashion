import React, { Component } from "react";
import { domain } from "../../constant";
import './gir.css'
class MenuItem extends Component{
    render(){
      
        let a1,a2,a3,a4,a5,a6;
       
        console.log(this.props.active)
        let value=this.props.active;
        
        if(value==1)
        {
          a1="follow__link-active";
         
        }else if(value==2){
          a2="follow__link-active";
          
        }else if(value==3){
          a3="follow__link-active";
            
        }else if(value==4){ 
            a4="follow__link-active";
        
        }
        else if(value==5){
            a5="follow__link-active";
              
          }else if(value==6){ 
              a6="follow__link-active";
          
          }
        
        const onActive=(value)=>{
        this.props.onClick(value);
     

        }
        if(a1!=''){
            return(
                <>
                     <div class="follow__menu">
                        <ul class="follow__list">
                            <li class="follow__item">
                                <a  class={`follow__link `+ a1}  onClick={() => onActive(1)}>
                                    Tất cả
                                </a> 
                            </li>
                            <li class="follow__item">
                                <a  class={`follow__link `+ a2}  onClick={() => onActive(2)}>
                                    Chờ xác nhận
                                </a> 
                            </li>
                            <li class="follow__item">
                                <a  class={`follow__link `+ a3}  onClick={() => onActive(3)}>
                                    Chờ lấy hàng
                                </a> 
                            </li>
                            <li class="follow__item">
                                <a  class={`follow__link `+ a4}  onClick={() => onActive(4)}>
                                    Đang giao
                                </a> 
                            </li>
                            <li class="follow__item">
                                <a  class={`follow__link `+ a5}  onClick={() => onActive(5)}> 
                                    Đã giao
                                </a> 
                            </li>
                            <li class="follow__item">
                                <a  class={`follow__link `+ a6}  onClick={() => onActive(6)}>
                                    Đã hủy
                                </a> 
                            </li>
                        </ul>
                    </div>
    
              </>
            )
        }
    }
}
export default MenuItem;