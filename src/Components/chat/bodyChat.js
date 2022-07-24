import React,{Component, useEffect, useState} from 'react'
import API from "../../API";
import Avatar from './avatar';
import BodyMess from './bodyMess';
import './chatMess.css';

const BodyChat=(props)=>{
    let email=props.email
    let Chat=props.chat;
let a=1;
    const [user, setUser] = useState([]);
    useEffect(()=>{
       
           
        API.getUserEmail(email).then((res)=>{
            console.log(res)
            if(res.data.success){
               
                    setUser(res.data.result);
                }
            })


       
        
   
},[email])


    const [Success, setSuccess]= useState({show: false, state: null, message: ""});
    function generateID(length){
        const az= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        var id= "";
        for(let i=0;i<length;i++){
            var index= Math.floor(Math.random()* 63);
            id+=az[index]
        }
        return id;
    }

    const onclick=()=>{
        var today = new Date();
        var newMessage=document.getElementById("newchat").value;
        let id=generateID(6);
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var type="admin";
        var success="success"   
        var trangthai="Đã xem"
        var data={id:id,idAcount:email,message:newMessage,time:time,success:success,type:type,trangthai:trangthai};
        API.addChat(data).then((res)=>{
            setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
        })
        if(Success){
            document.getElementById("newchat").value="";
            window.location.reload();

        }

    }

    if(user.length>0){
        console.log('aaaa');
        console.log(user);
        return(
            <>
              
             <div className='paddingtop'> 
      
            
             <div class="row contai  ">
             <div class="col-md-9">
             <div class="cards cards-bordered">
                  <div class="cards-header">
                          <h4 class="cards-title"><strong>Chat</strong></h4>
                          <a class="btn btn-xs btn-secondary" href="#" data-abc="true">Let's Chat App</a>
                  </div>
        
                  <div class="ps-container ps-theme-default ps-active-y change" id="chat-content" >
                     {
                        Chat && Chat.map((item,index)=>{
                            return <BodyMess 
    
                            key={item.id}
                            item={item}
                            >
    
                            </BodyMess>
                        })
                     }
                                                              
                  </div>               
                  
                  <div class="ps-scrollbar-x-rail" >
                      <div class="ps-scrollbar-x" tabindex="0" >
                      </div>
                  </div>
                  <div class="ps-scrollbar-y-rail" >
                      <div class="ps-scrollbar-y" tabindex="0" >
                         
                      </div>
                  </div>
      
                                                              
                                                           
                                  
             <div class="publisher bt-1 border-light">
                  <Avatar
                  user={user}
                  >
    
                  </Avatar>
                  <input class="publisher-input" type="text" placeholder="Write something" id="newchat"/>
                  <span class="publisher-btn file-group">
                  <i class="mdi mdi-attachment"></i>
                  <input type="file"></input>
                  </span>
                  <a class="publisher-btn" href="" data-abc="true"><i class="mdi mdi-heart"></i></a>
                  <a class="publisher-btn text-info"  data-abc="true" ><i class="mdi mdi-telegram" onClick={onclick}></i></a>
      </div>
              </div>
              
                  </div>
                  </div>
               
             </div>
            </>
            
            );
    }else{
        console.log('bbbbb');
    }
  
}
export default BodyChat;

