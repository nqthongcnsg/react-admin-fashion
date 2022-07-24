
import React, {Component}  from "react";
import './chatMess.css';
class BodyMess extends Component{
    
    render(){
      
        if(this.props.item.type == 'admin'){
            return(
             
                 <>
        
    
        
    
                 <div class="media media-chat media-chat-reverse">
                 <div class="media-body">
                     <p>{this.props.item.message}</p>
                     <p class="meta">{this.props.item.time}</p>
                 </div>
                 </div>
                     </>
            );
        }
        else{
            return(
                <>
                <div class="media media-chat">
    
                <div class="media-body">
                    <p>{this.props.item.message}</p>
                    <p class="meta">{this.props.item.time}</p>
                </div>
                </div>
        
            
        
                    </>
            );
        }
       
    }
}
export default BodyMess;