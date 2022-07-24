import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";
import BodyChat from "./bodyChat";
import './chat.css'
import UserChat from "./userchat";
const Chat=()=>{
    const [user, setUser] = useState([]);
    const [searchTerm, setSearchTerm] = useState(0);
    const emailChat = useParams();
    let flag=true
    let [Chat,setChat]=useState();
    let active=0;   

  
    useEffect(()=>{
       
           
            API.getUserChat().then((res)=>{
               
                if(res.data.success){
                    console.log(user)
                        setUser(res.data.result);
                    }
                }
            )
            API.getChat(emailChat.email).then((res)=>{
                if(res.data.success){
                    setChat(res.data.result)
                }
            })

           
            
       
    },[emailChat.email])
 
    if(emailChat.email)
    {  
        
   
        for(let i=0;i<user.length;i++){
            if(user[i].email==emailChat.email)
            {
                active=i;
            }
        }
     
        
       
    }
  
    console.log(Chat)
    console.log(user)
   if(Chat){
 
    return (
        <>
            <div className='row col-12 body'> 
                <div className='col-4 menu ps-container' >
                     <ul className="navbar-nav ms-auto ">
                            
                            {
                                user&&user.map((item,index)=>{
                                    return <UserChat
                                    key={index}
                                    id={index}
                                    active={active}
                                    user={item}
                                    
                                    >

                                    </UserChat>
                                })
                            }

                                
                            
                    </ul>
          
                </div >
                <div className='col-8 mess '>
                        <BodyChat
                        chat={Chat}
                        email={emailChat.email}
                        >

                        </BodyChat>
                </div>
             
            </div> 
        </>
    )
   }
   else{
    return (
        <>
            <div className='row col-12 body'> 
                <div className='col-4 menu ps-container' >
                     <ul className="navbar-nav ms-auto ">
                            
                            {
                                user&&user.map((item,index)=>{
                                    return <UserChat
                                    key={index}
                                    id={index}
                                    active={active}
                                    user={item}
                                    
                                    >

                                    </UserChat>
                                })
                            }

                                
                            
                    </ul>
          
                </div >
               
             
            </div> 
        </>
    )
   }
}

export default Chat;