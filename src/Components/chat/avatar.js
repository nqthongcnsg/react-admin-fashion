import React,{Component} from 'react'
import { domain } from '../../constant';
class Avatar extends Component{
    render(){
        const user=this.props.user;
    
    if(user){
        let img=JSON.parse(user[0].avatar);
        return(
            <>
             <img class="avatar avatar-xs" src={domain+"/"+img.images[0]} />
            </>
        )
    }
        

    }
}

export default Avatar;