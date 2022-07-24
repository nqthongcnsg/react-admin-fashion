import React,{Component}from 'react'
import { domain } from '../../constant';

class Avatar extends Component{
    render(){
        const user=this.props.user;
    
        let img=JSON.parse(user[0].avatar);
  
        return(
            <>
                <div className='col-2 avata'>
                                      <img className="img-xs rounded-circle image" src={domain+"/"+img.images[0]} alt="Profile image"/> 
                                     </div>
            </>
        )
    }
}
export default Avatar;