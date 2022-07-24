import React,{Component} from 'react'
import { domain } from '../../constant';

class Photo extends Component{
    render(){
        
        
        let img=JSON.parse(this.props.product.image);
        return(
            <>
             <td>
          <img src={domain+"/"+img.images[0]}/>
      </td>
            </>
        )
    }
}
export default Photo;