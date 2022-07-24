import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";

const UpdateType=({data,handleChange, handleSubmit})=>{

     const [success, setSuccess]= useState({show: false, state: null, message: ""});
     const [searchTerm, setSearchTerm] = useState(0);
     const [Type, setType]= useState();
     var id=useParams();
     useEffect(()=>{
         API.getTypeId(id.id).then((res)=>{
             setType(res.data.result);
         })
     },[searchTerm]);
        
  

    const onClick=()=>{
      
         let name=document.getElementById('name').value;
     console.log(Type[0])
       
       
       
        const data={id:Type[0].idType,name:name}
       
    
      
        
   
        let dem=0;
      
       if(dem==0){
        API.updateType(data).then((res)=>{
            alert(res.data.message);
            setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
           
            window.location="/type";
        })    
       }
      
    
    

    }
    
    if(Type){
        return(<>
            <div class="main-panel">        
                <div class="content-wrapper">
              <div className="row">
                    <div className="col-md-8 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Add Type</h4>
                          
                          <form className="forms-sample" onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label for="exampleInputUsername1">Name Type</label>
                              <input type="text" className="form-control" id="name" placeholder={Type[0].nameType} name="name"/>
                            </div>
                           
                           
                         
                            {/* <button type="submit" class="btn btn-primary me-2" >Submit</button> */}
                            <div className="btn btn-primary" onClick={onClick}>submit</div>
                            <button className="btn btn-light"><a href="/type" >Cancel</a></button>
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
export default UpdateType;