import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";

const UpdateSize=({data,handleChange, handleSubmit})=>{

     const [success, setSuccess]= useState({show: false, state: null, message: ""});
     const [searchTerm, setSearchTerm] = useState(0);
     const [Size, setSize]= useState();
     var id=useParams();
     useEffect(()=>{
         API.getSizeId(id.id).then((res)=>{
             setSize(res.data.result);
         })
     },[searchTerm]);
        
  

    const onClick=()=>{
      
         let name=document.getElementById('name').value;
     console.log(Size[0])
       
       
       
        const data={id:Size[0].idSize,name:name}
       
    
      
        
   
        let dem=0;
      
       if(dem==0){
        API.updateSize(data).then((res)=>{
            alert(res.data.message);
            setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
            window.location="/size";
           
           
        })    
       }
      
    
    

    }
    
    if(Size){
        return(<>
            <div class="main-panel">        
                <div class="content-wrapper">
              <div className="row">
                    <div className="col-md-8 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Add Size</h4>
                          
                          <form className="forms-sample" onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label for="exampleInputUsername1">Name Size</label>
                              <input Size="text" className="form-control" id="name" placeholder={Size[0].nameSize} name="name"/>
                            </div>
                           
                           
                         
                            {/* <button Size="submit" class="btn btn-primary me-2" >Submit</button> */}
                            <div className="btn btn-primary" onClick={onClick}>submit</div>
                            <button className="btn btn-light"><a href="/size" >Cancel</a></button>
                          </form>
                        </div>
                      </div>
                    </div>
                 
               
                  </div>
                  </div>
                  </div>
            </>)
    }
}
export default UpdateSize;