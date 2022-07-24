import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../API";
import { domain } from "../../constant";
import Avatar from "./img";
const UserChat=(props)=>{
    const [Success, setSuccess]= useState({show: false, state: null, message: ""});
    let email=props.user.email;
    const [user, setUser] = useState([]);
    const [user1, setUser1] = useState([]);
    const [searchTerm, setSearchTerm] = useState(0);
    useEffect(()=>{
       
        
            API.getUserMess(email).then((res)=>{
                if(res.data.success){
                
                        setUser(res.data.result);
                    }
                }
            )
            API. getUserEmail(email).then((res)=>{
                if(res.data.success){
                
                        setUser1(res.data.result);
                    }
                }
            )
       
        
   
},[props])
let a;
for(let i=0;i<user.length;i++){
    a=user[i];
   
}
let type='Admin';
let trangthai='Đã xem'
if(a){
    if(a.type=="user"){
        type='User'
    }
    if(a.trangthai=="Chưa xem")
    {
        trangthai="Chưa Xem"
    }
}

let active='';
if(props.active==props.id){
active='active';
}

const onupdate=()=>{

    API.updateTrangThaiChat(email).then((res)=>{
        if(res.data.success){
            
            setSuccess(res.data.result)
        }
    })
    
}
  if(trangthai=="Chưa Xem"){
    if(user1.length !=0 && a){
        return(<>
             <li className={`nav-item ${active} count`}>
                               <Link to={`/chat${email}`} className="nav-link" onClick={onupdate}>
                                  
                                         <div className='row col-12'>
                                         <Avatar
                                         user={user1}
                                         ></Avatar>
                                         <div className='col-9'>
                                             <div className=' chuaxem'>
                                                 {
                                                     props.user.ten
                                                 }
                                               
             
                                             </div>
                                             <div className=' chuaxem'>
                                               { type} : { a.message}
     
                                                
                                             </div>
             
                                         </div>
                                         </div>
                                      </Link>
                                     </li>
                 </>)
       }
  }else{
    if(user1.length !=0 && a){
        return(<>
             <li className={`nav-item ${active} count`}>
                               <Link to={`/chat${email}`} className="nav-link">
                                  
                                         <div className='row col-12'>
                                         <Avatar
                                         user={user1}
                                         ></Avatar>
                                         <div className='col-9'>
                                             <div className='name'>
                                                 {
                                                     props.user.ten
                                                 }
                                               
             
                                             </div>
                                             <div className='content'>
                                               { type} : { a.message}
     
                                                
                                             </div>
             
                                         </div>
                                         </div>
                                      </Link>
                                     </li>
                 </>)
       }
  }
}
export default UserChat;